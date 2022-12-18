import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerUser: () => {
      toast.success("Sign up successfully");
    },
    loginUser: () => {
      toast.success("Successfully Logged In");
    },
    logoutUser: () => {
      toast.success("Successfully Logged Out");
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
