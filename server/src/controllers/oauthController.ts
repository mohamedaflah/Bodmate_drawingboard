import { NextFunction, Request, Response } from "express";
import { OAuth2Client } from "google-auth-library";
import { oAuth2Client } from "../config/oauth.config";



export const OauthController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/userinfo.profile", "openid"],
      prompt: "consent",
    });
    res.json({ url: authorizeUrl });
  } catch (error) {
    next(error);
  }
};
