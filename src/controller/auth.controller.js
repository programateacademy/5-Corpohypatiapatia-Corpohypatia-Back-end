import User from "../schema/User.js";
import jwt from "jsonwebtoken";
import Role from "../schema/Role.js";
import UserControl from "../schema/UserControl.js";

import { config } from "dotenv";
config();
const SECRET = process.env.SECRET

export const signUp = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }

  const savedUser = await newUser.save();

  const token = jwt.sign({ id: savedUser._id }, SECRET, {
    expiresIn: 7200, // 2 hours
  });

  res.status(200).json({ token });
};

export const signIn = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate("roles");

  if (!userFound) return res.status(200).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(req.body.password, userFound.password);

  if(!matchPassword) return res.status(200).json({token: null, message: "Invalid password"})

  const userControl = new UserControl({
    user: userFound.email
  });
  await userControl.save()

  const token = jwt.sign({ id: userFound._id }, SECRET, {
    expiresIn: 7200, // 2 hours
  });


  res.status(200).json({ token });
};
