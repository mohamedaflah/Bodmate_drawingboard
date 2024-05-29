import userModel from "../models/user.model";

export async function checkUser(email: string) {
  return await userModel.findOne({ email: email });
}
