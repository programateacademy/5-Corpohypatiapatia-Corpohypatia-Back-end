import User from "../schema/User.js";
import Role from "../schema/Role.js";

export const getHome = async (req, res) => {
  const user = await User.findById(req.userId);

  const role = await Role.find({ _id: { $in: user.role } });
  return res.status(200).json({ message: "¡Hola! " + user.firstNames + " " + user.lastNames });
};
