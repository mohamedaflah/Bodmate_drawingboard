import { NextFunction, Request, Response } from "express";

export const errHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ message: err.message, user: null });
};
