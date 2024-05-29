import { Router } from "express";
import { OauthController } from "../controllers/auth/oauthController";
import { OauthCallBackController } from "../controllers/auth/oauthCallback.controller";
import { getUserController } from "../controllers/user/getUser.controller";
const userRouter = Router();
userRouter.route("/oauth").get(OauthController);
userRouter.route("/oauth/callback").get(OauthCallBackController);
userRouter.route("/user").get(getUserController);
export default userRouter;
