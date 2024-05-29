import { createSlice } from "@reduxjs/toolkit";
import { UserReducer } from "../../types/user/reducer";
import { getUser } from "../actions/user/getUser";
import { logoutUser } from "../actions/user/logoutUser";
import { ErrorPayload } from "../../types/Errpayload";

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
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.err = false;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.loading = false;
        state.err = (payload as ErrorPayload).message;
      });
  },
});
export default userRedcuer.reducer;
