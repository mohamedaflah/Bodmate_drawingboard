import { NextFunction, Request, Response } from "express";

import { oAuth2Client } from "../../config/oauth.config";

export const OauthController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
   

    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/userinfo.profile", "https://www.googleapis.com/auth/userinfo.email", "openid"],
      prompt: "consent",
    });
    console.log("🚀 ~ authorizeUrl:", authorizeUrl)
    return res.status(200).json({ url: authorizeUrl });
  } catch (error) {
    next(error);
  }
};
