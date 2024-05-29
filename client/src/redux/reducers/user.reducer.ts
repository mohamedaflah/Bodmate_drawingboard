import { createSlice } from "@reduxjs/toolkit";
import { UserReducer } from "../../types/user/reducer";
import { getUser } from "../actions/user/getUser";

const initialState: UserReducer = {
  loading: false,
  err: false,
  user: null,
};

const userRedcuer = createSlice({
  name: "userslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.err = false;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.err = (payload as { message: string }).message;
        state.user = null;
      });
  },
});
export default userRedcuer.reducer;
