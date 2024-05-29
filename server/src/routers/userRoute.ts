import { Router } from "express";
import { OauthController } from "../controllers/oauthController";
import { OauthCallBackController } from "../controllers/oauthCallback.controller";
const userRouter = Router();
userRouter.route("/oauth").get(OauthController);
userRouter.route("/oauth/callback").get(OauthCallBackController);
export default userRouter;
