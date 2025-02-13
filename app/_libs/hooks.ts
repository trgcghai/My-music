import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, AppStore, RootState } from "./store";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth, provider } from "./firebase/config";
import { signIn } from "./features/auth/authSlice";
import { useLoginMutation, useRegisterMutation } from "@services/rootApi";
import { useState } from "react";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();

export const useGoogleRegister = () => {
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();
  const [data, setData] = useState(null);
  const signInGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      dispatch(
        signIn({
          accessToken: token,
          refreshToken:
            "stsTokenManager" in user &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (user.stsTokenManager as any).refreshToken,
          isAuthenticated: true,
          userInfo: {
            email: user.email,
            username: user.displayName,
          },
        }),
      );

      const data = await register({
        email: user.email,
        username: user.displayName,
        providerId: "google",
      });

      setData(data);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log({ errorCode, errorMessage, email, credential });
    }
  };

  return { signInGooglePopup, isLoading, data };
};

export const useGoogleLogin = () => {
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const [data, setData] = useState(null);
  const loginGooglePopup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      const user = result.user;
      dispatch(
        signIn({
          accessToken: token,
          refreshToken:
            "stsTokenManager" in user &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (user.stsTokenManager as any).refreshToken,
          isAuthenticated: true,
          userInfo: {
            email: user.email,
            username: user.displayName,
          },
        }),
      );

      const data = await login({
        email: user.email,
        providerId: "google",
      });

      setData(data);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log({ errorCode, errorMessage, email, credential });
    }
  };

  return { loginGooglePopup, isLoading, data };
};
