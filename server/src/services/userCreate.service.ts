import userModel from "../models/user.model";
import { v4 as uuid } from "uuid";
export const userCreateService = async ({
  name,
  email,
  profile,
  password,
}: {
  name: string;
  email: string;
  profile: string;
  password: string;
}) => {
  const newUser = new userModel({
    name: name,
    email: email,
    profile,
    uid: uuid(),
    password,
  });
  await newUser.save();
  return newUser;
};
