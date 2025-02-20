import { SongResponse } from "_types/api";
import { rootApi } from "./rootApi";

export const songApi = rootApi.injectEndpoints({
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
    };
  },
});

export const { useGetSongQuery, useGetSongByNameQuery } = songApi;
