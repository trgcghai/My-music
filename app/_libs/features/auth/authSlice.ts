import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  accessToken: string;
  refreshToken: string;
  isAuthenticated: boolean;
  userInfo: {
    email: string;
    username: string;
  };
}

const initialState: AuthState = {
  accessToken: "",
  refreshToken: "",
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
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.isAuthenticated = true;
      state.userInfo = action.payload.userInfo;
    },
    signOut: () => {
      return initialState;
    },
    saveUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
    updateTokens: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

export const { signIn, signOut, saveUserInfo, updateTokens } =
  authSlice.actions;
export default authSlice.reducer;
