import { User } from "../models/user.model.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const curretUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: curretUserId } });
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
