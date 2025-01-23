import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FileProps, PlaylistResponse, SongResponse } from "../define";

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
  useGetSongQuery,
  useLazyGetSongByNameQuery,
  useGetPlaylistQuery,
  useGetPlaylistByIdQuery,
  useCreatePlaylistMutation,
  useUploadFilesMutation,
} = rootApi;
