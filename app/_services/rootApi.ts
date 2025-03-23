import { baseQueryWithReauth } from "@libs/redux/baseQueryConfig";
import { createApi } from "@reduxjs/toolkit/query/react";
import {
  AuthResponse,
  RefreshTokenResponse,
  RegisterResponse,
  UploadResponse,
  VerifyTokenResponse,
} from "_types/api";
import { LoginFormData, RegisterFormData } from "_types/component";

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: baseQueryWithReauth,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  refetchOnMountOrArgChange: 20,
  tagTypes: ["Song", "Playlist"],
  endpoints: (builder) => {
    return {
      register: builder.mutation<RegisterResponse, RegisterFormData>({
        query: (formData: RegisterFormData) => {
          return {
            url: "/auth/register",
            method: "POST",
            body: {
              formData,
            },
          };
        },
      }),
      login: builder.mutation<AuthResponse, LoginFormData>({
        query: (formData: LoginFormData) => {
          return {
            url: "/auth/login",
            method: "POST",
            body: {
              formData,
            },
          };
        },
      }),
      verifyOtp: builder.mutation<AuthResponse, { email: string; otp: string }>(
        {
          query: ({ email, otp }) => {
            return {
              url: "/auth/verify-otp",
              method: "POST",
              body: {
                email,
                otp,
              },
            };
          },
        },
      ),
      reSendOtp: builder.mutation<AuthResponse, string>({
        query: (email: string) => {
          return {
            url: "/auth/send-otp",
            method: "POST",
            body: {
              email,
            },
          };
        },
      }),
      uploadFiles: builder.mutation<UploadResponse, FormData>({
        query: (formData) => {
          return {
            url: "/song",
            method: "POST",
            body: formData,
          };
        },
        invalidatesTags: [{ type: "Song" }],
      }),
      verifyToken: builder.query<VerifyTokenResponse, void>({
        query: () => "/auth/verify-token",
      }),
      refreshToken: builder.mutation<RefreshTokenResponse, void>({
        query: () => {
          return {
            url: "/auth/refresh-token",
            method: "POST",
          };
        },
      }),
      signOut: builder.mutation<AuthResponse, void>({
        query: () => {
          return {
            url: "/auth/logout",
            method: "POST",
          };
        },
      })
    };
  },
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useReSendOtpMutation,
  useUploadFilesMutation,
  useVerifyTokenQuery,
  useRefreshTokenMutation,
  useSignOutMutation,
} = rootApi;
