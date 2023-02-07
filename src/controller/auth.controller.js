import User from "../schema/User.js";
import jwt from "jsonwebtoken";
import Role from "../schema/Role.js";
import UserControl from "../schema/UserControl.js";

import { config } from "dotenv";
config();
const SECRET = process.env.SECRET;

export const signUp = async (req, res) => {
  const { firstNames, lastNames, email, position, phone, password, role } =
    req.body;

  const newUser = new User({
    firstNames,
    lastNames,
    email,
    position,
    phone,
    password: await User.encryptPassword(password),
    role,
  });

  if (role) {
    const foundRole = await Role.find({ name: { $in: role } });
    newUser.role = foundRole.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.role = [role._id];
  }

  const savedUser = await newUser.save();
  console.log(savedUser);

  const token = jwt.sign({ id: savedUser._id }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "role"
  );

  if (!userFound) return res.status(200).json({ message: "User not found" });

  const matchRole = await User.compareRole(req.body.role, userFound.role.name);

  if (!matchRole) return res.status(200).json({ message: "Invalid role" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );

  if (!matchPassword)
    return res.status(200).json({ message: "Invalid password" });

  if (!userFound.enabled)
    return res.status(200).json({ message: "User is disabled" });

  const userControl = new UserControl({
    user: userFound.email,
  });
  await userControl.save();

  const token = jwt.sign({ id: userFound._id }, SECRET, {
    expiresIn: 86400, // 24 hours
  });

  res.status(200).json({ token });
};
