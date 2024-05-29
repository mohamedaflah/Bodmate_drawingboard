import { Router } from "express";
import { OauthController } from "../controllers/oauthController";
const userRouter = Router();
userRouter.route("/oauth").post(OauthController);
export default userRouter;
