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
      getSongById: builder.query<SongResponse, string>({
        query: (id: string) => `/song/${id}`,
        providesTags: [{ type: "Song" }],
      }),
      getSongByListId: builder.query<SongResponse, string[]>({
        query: (listId: string[]) => {
          return {
            url: "/song/getByListId",
            method: "POST",
            body: { listId },
          };
        },
        providesTags: [{ type: "Song" }],
        serializeQueryArgs: ({ endpointName, queryArgs }) =>
          `${endpointName}-${queryArgs.join(",")}`,
      }),
    };
  },
});

export const {
  useGetSongQuery,
  useGetSongByNameQuery,
  useGetSongByIdQuery,
  useGetSongByListIdQuery,
} = songApi;
