import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../constants/axioInstance";

export const getUser = createAsyncThunk(
  "user/getuser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/user`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
