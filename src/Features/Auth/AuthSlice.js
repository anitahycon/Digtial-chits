import { createSlice } from "@reduxjs/toolkit";
import { getUserFromStorage } from "./utils";

const initialState = {
  user: getUserFromStorage(),
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.user.isLoginIn = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    profilePicUrl: (state, action) => {
      state.user.profilePicUrl = action.payload;
    },
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
});

export const { login, profilePicUrl, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
