import { signOut, updateTokens } from "@libs/features/auth/authSlice";
import { RootState } from "@libs/store";
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import {
  AuthResponse,
  RefreshTokenResponse,
  RegisterResponse,
  UploadResponse,
  VerifyTokenResponse,
} from "_types/api";
import { LoginFormData, RegisterFormData } from "_types/component";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === 401) {
    try {
      const refreshResult = await baseQuery(
        "/auth/refresh-token",
        api,
        extraOptions,
      );

      if (refreshResult?.data) {
        const { accessToken, refreshToken } =
          refreshResult?.data as RefreshTokenResponse;

        api.dispatch(updateTokens({ accessToken, refreshToken }));

        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(signOut());
        throw refreshResult.error;
      }
    } catch (error) {
      api.dispatch(signOut());
      window.location.href = "/login";
      return { error };
    }
  }
  return result;
};

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
      refreshToken: builder.mutation<RefreshTokenResponse, string>({
        query: (refreshToken: string) => {
          return {
            url: "/auth/refresh-token",
            method: "POST",
            body: {
              refreshToken,
            },
          };
        },
      }),
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
} = rootApi;
