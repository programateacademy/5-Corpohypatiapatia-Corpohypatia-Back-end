import jwt from "jsonwebtoken";
import User from "../schema/User.js";
import Role from "../schema/Role.js";

// setting environment variables -- password encryption key
import { config } from "dotenv";
config();
const SECRET = process.env.SECRET;

// check if token is valid
export const verifyToken = async (req, res, next) => {
  try {
    // extract the token provided by the request
    const token = req.headers["x-access-token"];

    if (!token)
      return res.status(204).json({ message: "No se proporcionó token." });

    // decodes the user id contained in the token
    const decode = jwt.verify(token, SECRET);
    req.userId = decode.id;

    // check that the user exists
    const user = await User.findById(req.userId, { password: 0 });
    if (!user)
      return res.status(404).json({ message: "Ningún usuario encontrado." });

    next();
  } catch (error) {
    return res.status(401).json({ message: "No autorizado." });
  }
};

export const isAdmin = async (req, res, next) => {
  // find user role
  const user = await User.findById(req.userId);
  const role = await Role.findOne({ _id: { $in: user.role } });

  // verify that the user is an administrator
  if (role.name === "admin") {
    next();
    return;
  }

  return res.status(204).json({ message: "Requerir rol de administrador" });
};
