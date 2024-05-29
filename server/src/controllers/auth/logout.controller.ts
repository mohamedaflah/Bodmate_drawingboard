import { NextFunction, Request, Response } from "express";

export const logoutController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userSession = req.session.user;
    if (userSession) {
      delete req.session.user;
    }
    return res.status(200).json({ status: true, user: null });
  } catch (error) {
    next(error);
  }
};
