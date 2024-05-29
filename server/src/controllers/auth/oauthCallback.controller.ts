import { NextFunction, Request, Response } from "express";
import { oAuth2Client } from "../../config/oauth.config";
import { userCreateService } from "../../services/userCreate.service";
import { generate } from "generate-password";
import bcrypt from "bcrypt";
import { checkUser } from "../../services/cheuser.service";
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
    const password = generate({
      length: 10,
      numbers: true,
    });

    console.log("🚀 ~ payload:", payload);
    if (!payload) {
      throw new Error(`Failed to get user information`);
    }
    const { name, picture, email } = payload;
    let user = await checkUser(String(email));
    if (!user) {
      user = await userCreateService({
        email: String(email),
        profile: String(picture),
        name: String(name),
        password: bcrypt.hashSync(password, 10),
      });
    }
    req.session.user = user;
    console.log("Session user set:", req.session.user);

    res.redirect(process.env.CLIENT_ORIGIN as string);
  } catch (error) {
    next(error);
  }
};
