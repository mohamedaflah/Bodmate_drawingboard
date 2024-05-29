import mongoose, { Document } from "mongoose";

// Define the TypeScript interface
export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  profile: string;
  uid: string;
  status: boolean;
  profilestatus: boolean;
  createdAt: Date;
  updatedAt: Date;
}
