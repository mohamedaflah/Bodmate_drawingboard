import mongoose from "mongoose";
import { IUser } from "../util/types/user.type";

const userModel = new mongoose.Schema<IUser>(
  {
    name: String,
    email: {
      unique: true,
      type: String,
    },
    password: String,
    profile: String,
    uid: {
      type: String,
      unique: true,
    },
    status: {
      type: Boolean,
    },
    profilestatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Users", userModel);
// id            String   @id @unique @default(dbgenerated("uuid_generate_v4()"))
// name          String
// email         String   @unique
// profile       String
// status        Boolean
// profilestatus Boolean
// createdAt     DateTime @default(now())
// updatedAt     DateTime @updatedAt
