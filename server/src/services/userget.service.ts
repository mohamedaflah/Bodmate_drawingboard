import userModel from "../models/user.model";

export const getUserService = async (id: string) => {
  return await userModel.findById(id);
};
