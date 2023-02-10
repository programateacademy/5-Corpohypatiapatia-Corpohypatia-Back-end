import User from "../schema/User.js";
import jwt from "jsonwebtoken";
import Role from "../schema/Role.js";
import UserControl from "../schema/UserControl.js";
import LogonAttempts from "../schema/LogonAttempts.js";

// setting environment variables -- password encryption key
import { config } from "dotenv";
config();
const SECRET = process.env.SECRET;

export const signUp = async (req, res) => {
  // destructuring the request body
  const { firstNames, lastNames, email, position, phone, password, role } =
    req.body;

  // instantiation of a new user and encryption of the password
  const newUser = new User({
    firstNames,
    lastNames,
    email,
    position,
    phone,
    password: await User.encryptPassword(password),
    role,
  });

  /**
   * search by name for the role in the role collection and
   * returns the id of the role that matches
   */
  if (role) {
    const foundRole = await Role.find({ name: { $in: role } });
    newUser.role = foundRole.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.role = [role._id];
  }

  // save the new user in the database
  const savedUser = await newUser.save();

  // session token creation
  const token = jwt.sign({ id: savedUser._id }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  // respond with the created token
  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  /**
   * search for the user that matches the email in the request body
   */
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "role"
  );

  // if the user does not exist
  if (!userFound) return res.status(200).json({ message: "User not found" });

  // check that the rol match
  const matchRole = await User.compareRole(req.body.role, userFound.role.name);

  //check that the user is enabled
  if (!userFound.enabled)
    return res.status(200).json({ message: "User is disabled" });

  if (!matchRole) return res.status(200).json({ message: "Invalid role" });

  // check that the rol match
  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  // in case the passwords do not match
  if (!matchPassword) {
    // find failed attempts
    const logonAttempts = await LogonAttempts.findOne({
      user: userFound.email,
    });

    // check if there are failed attempts
    if (!logonAttempts) {
      // create a new record in the collection of failed attempts
      const logonAttempt = new LogonAttempts({
        user: userFound.email,
        counter: 1,
      });
      await logonAttempt.save();
    } else {
      // checks if number of failed attempts is greater than or equal to 2
      if (logonAttempts.counter >= 2) {
        // disable user
        await User.updateOne(
          { email: userFound.email },
          { $set: { enabled: false } }
        );
      } else {
        // increases the attempt counter by one unit
        await LogonAttempts.updateOne(
          { user: userFound.email },
          { $inc: { counter: 1 } }
        );
      }
    }

    return res.status(200).json({ message: "Invalid password" });
  }

  // deletes the logs of failed attempts that the user has
  await LogonAttempts.deleteMany({
    user: userFound.email,
  });

  // records user login
  const userControl = new UserControl({
    user: userFound.email,
  });
  await userControl.save();

  //session token creation
  const token = jwt.sign({ id: userFound._id }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  // respond with the created token
  res.status(200).json({ token });
};
