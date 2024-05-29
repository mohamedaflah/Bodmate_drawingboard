import express from "express";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRoute";
import { IUser } from "./util/types/user.type";
import { errHandler } from "./middlewares/errMiddleware";
const app = express();
declare module "express-session" {
  interface SessionData {
    user?: {
      // Make user optional to handle cases where it might not exist
      [key: string]: any; // Allow for any user data structure
    };
  }
}
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN as string],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true if using HTTPS
      maxAge: 7 * 24 * 60 * 60 * 1000, // Session expiration time in milliseconds (1 week)
    },
  })
);
app.use("/api", userRouter);
app.use(errHandler);
export default app.listen(process.env.PORT, () => {
  console.log(`Server started`);
});
