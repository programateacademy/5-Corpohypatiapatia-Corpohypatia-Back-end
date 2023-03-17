import User from "../schema/User.js";
import jwt from "jsonwebtoken";
import Role from "../schema/Role.js";
import UserControl from "../schema/UserControl.js";
import LogonAttempts from "../schema/LogonAttempts.js";
import nodemailer from "nodemailer";

// setting environment variables -- password encryption key
import { config } from "dotenv";
config();
const SECRET = process.env.SECRET;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;
const URL = process.env.URL;

// email config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

// login
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
  res.status(201).json({ token });
};

// register a new user
export const signIn = async (req, res) => {
  /**
   * search for the user that matches the email in the request body
   */
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "role"
  );

  // if the user does not exist
  if (!userFound)
    return res.status(204).json({ message: "Usuario no encontrado." });

  // check that the rol match
  const matchRole = await User.compareRole(req.body.role, userFound.role.name);

  //check that the user is enabled
  if (!userFound.enabled)
    return res.status(401).json({ message: "El usuario está deshabilitado." });

  if (!matchRole) return res.status(401).json({ message: "Rol inválido" });

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

    return res.status(409).json({ message: "Contraseña invalida." });
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
  res.status(201).json({ token });
};

// send email Link For reset Password
export const sendPasswordLink = async (req, res) => {
  const email = await req.body.email;

  if (!email) {
    return res.status(401).json({ message: "Ingresa un correo válido." });
  }

  try {
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "role"
    );

    if (!userFound) {
      return res.status(401).json({ message: "Ingresa un correo válido." });
    }

    // verify that the user is an administrator
    if (!(userFound.role.name === "admin")) {
      return res.status(401).json({ message: "Ingresa un correo válido." });
    }

    // token generate for reset password
    const token = jwt.sign({ id: userFound._id }, SECRET, {
      expiresIn: 3600, // 1 hour
    });

    const mailOptions = {
      from: EMAIL,
      to: email,
      /* to: "jlbejarano662@gmail.com", */
      subject: "Sending Email For password Reset",
      text: `Este Enlace es válido por 1 horas ${URL}/change-password/${token}`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("error", error);
        return res.status(304).json({ message: "El correo no fue enviado." });
      } else {
        console.log("Email sent", info.response);
        return res.status(200).json({
          status: 200,
          message: "El correo fue enviado satisfactoriamente.",
        });
      }
    });
  } catch (error) {
    return res.status(401).json({ status: 401, message: "Usuario inválido." });
  }
};

// change password
export const changePassword = async (req, res) => {
  try {
    const password = await req.body.password;
    const id = await req.userId;

    const newPassword = await User.encryptPassword(password);

    const setnewuserpass = await User.findByIdAndUpdate(
      { _id: id },
      { password: newPassword }
    );
    setnewuserpass.save();

    res.status(201).json({ message: "La contraseña se ha cambiado" });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
};
