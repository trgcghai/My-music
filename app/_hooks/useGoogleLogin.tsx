import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@libs/firebase/config";
import { signIn } from "@libs/features/auth/authSlice";
import { useLoginMutation } from "@services/rootApi";
import { useState } from "react";
import { useAppDispatch } from "./hooks";

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
