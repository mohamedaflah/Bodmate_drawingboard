import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleErrors } from "../../../utils/handleErr";
import { axiosInstance } from "../../../constants/axioInstance";

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/api/user`);
      return data;
    } catch (error) {
      return rejectWithValue(handleErrors(error));
    }
  }
);
