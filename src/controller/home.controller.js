import User from "../schema/User.js";
import Role from "../schema/Role.js";

export const getHome = async (req, res) => {
  const user = await User.findById(req.userId);
  const roles = await Role.find({ _id: { $in: user.roles } });
  res.json("Hello " + roles.map((role) => role.name) + "!");
};
