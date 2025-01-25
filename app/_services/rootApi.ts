import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AuthResponse,
  PlaylistResponse,
  RegisterResponse,
  SongResponse,
} from "_types/api";
import { LoginFormData, RegisterFormData } from "_types/component";
import { FileProps } from "_types/entity";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_API_URL,
  prepareHeaders: (headers, { getState }) => {
    // const token = getState().auth.token;
    // if (token) {
    //     headers.set("authorization", `Bearer ${token}`);
    // }
    return headers;
  },
});

export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery,
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
      getSong: builder.query<SongResponse, void>({
        query: () => "/song",
        providesTags: [{ type: "Song" }],
      }),
      getSongByName: builder.query<SongResponse, string>({
        query: (name: string) => {
          const params = new URLSearchParams({ name });
          return `/song?${params.toString()}`;
        },
        providesTags: [{ type: "Song" }],
      }),
      getPlaylist: builder.query<PlaylistResponse, void>({
        query: () => `/playlist`,
        providesTags: [{ type: "Playlist" }],
      }),
      getPlaylistById: builder.query<PlaylistResponse, string>({
        query: (id: string) => {
          console.log(">> check id", id);
          return `/playlist/${id}`;
        },
        providesTags: [{ type: "Playlist" }],
      }),
      createPlaylist: builder.mutation<void, string>({
        query: (name) => {
          return {
            url: `/playlist`,
            method: "POST",
            body: { playlist: name },
          };
        },
        invalidatesTags: [{ type: "Playlist" }],
      }),
      uploadFiles: builder.mutation<void, FileProps[]>({
        query: (files) => {
          return {
            url: "/song",
            method: "POST",
            body: { songs: files },
          };
        },
        invalidatesTags: [{ type: "Song" }],
      }),
    };
  },
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useVerifyOtpMutation,
  useGetSongQuery,
  useLazyGetSongByNameQuery,
  useGetPlaylistQuery,
  useGetPlaylistByIdQuery,
  useCreatePlaylistMutation,
  useUploadFilesMutation,
} = rootApi;
