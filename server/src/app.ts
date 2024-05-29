import express from "express";
import dotenv from "dotenv";
dotenv.config();
import session from "express-session";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/userRoute";
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: [process.env.CLIENT_ORIGIN as string],
  })
);

declare module 'express-session' {
  interface SessionData {
    user?: { // Make user optional to handle cases where it might not exist
      [key: string]: any; // Allow for any user data structure
    };
  }
}

app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true },
  })
);
app.use(cookieParser());
app.use("/api", userRouter);
export default app.listen(process.env.PORT, () => {
  console.log(`Server started`);
});
