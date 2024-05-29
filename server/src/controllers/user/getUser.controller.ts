import { NextFunction, Request, Response } from "express";
import { getUserService } from "../../services/userget.service";
import { IUser } from "../../util/types/user.type";

export const getUserController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userdata = req.session.user as IUser;
    console.log("🚀 ~ userdata:", req.session)
    if (!userdata) {
      throw new Error("Not autherized");
    }
    console.log("🚀 ~ userdata:", userdata);
    const user = await getUserService(String(userdata._id));
    res.status(200).json({ status: true, user });
  } catch (error) {
    next(error);
  }
};
