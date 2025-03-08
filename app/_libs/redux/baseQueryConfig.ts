import { signOut } from "@libs/features/auth/authSlice";
import {
  BaseQueryApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include"
});

export const baseQueryWithReauth = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    try {
      const refreshResult = await baseQuery(
        { url: "/auth/refresh-token", method: "POST" },
        api,
        extraOptions,
      );

      if (refreshResult) {
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(signOut());
      }
    } catch (error) {
      api.dispatch(signOut());
      window.location.href = "/login";
      return error;
    }
  }
  return result;
};
