import { NextFunction, Request, Response } from "express";
import { oAuth2Client } from "../config/oauth.config";

export const OauthCallBackController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { code } = req.query;
    if (!code) {
      throw new Error("Missing code");
    }

    const { tokens } = await oAuth2Client.getToken(code as string);
    oAuth2Client.setCredentials(tokens);

    const ticket = await oAuth2Client.verifyIdToken({
      idToken: tokens.id_token!,
      audience: process.env.GOOGLE_CLIENTID,
    });

    const payload = ticket.getPayload();
    console.log("🚀 ~ payload:", payload);
    if (!payload) {
      throw new Error(`Failed to get user information`);
    }
    const { name, picture, email } = payload;
    req.session.user = payload;
    console.log("Calling Callback");

    res.redirect(process.env.CLIENT_ORIGIN as string);
  } catch (error) {
    next(error);
  }
};
