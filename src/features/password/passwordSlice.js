import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  passwordType: "password",
};

const passwordSlice = createSlice({
  name: "securePass",
  initialState,
  reducers: {
    togglePassword: (state) => {
      if (state.passwordType === "password") {
        state.passwordType = "text";
        return;
      }
      state.passwordType = "password";
    },
  },
});

export const { togglePassword } = passwordSlice.actions;

export default passwordSlice.reducer;
