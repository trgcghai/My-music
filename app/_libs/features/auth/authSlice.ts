import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  userInfo: {
    email: string;
    username: string;
  };
}

const initialState: AuthState = {
  isAuthenticated: false,
  userInfo: {
    email: "",
    username: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isAuthenticated = true;
      state.userInfo = action.payload.userInfo;
    },
    signOut: () => {
      return initialState;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { signIn, signOut, saveUserInfo } =
  authSlice.actions;
export default authSlice.reducer;
