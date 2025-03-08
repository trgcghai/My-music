import { useRegisterMutation } from "@services/rootApi";
import { useAppDispatch } from "./hooks";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { signIn } from "@libs/features/auth/authSlice";
import { auth, provider } from "@libs/firebase/config";

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
