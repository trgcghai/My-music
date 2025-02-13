import { PlaylistResponse } from "_types/api";
import { rootApi } from "./rootApi";

export const playlistApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlaylist: builder.query<PlaylistResponse, void>({
      query: () => `/playlist`,
      providesTags: [{ type: "Playlist" }],
    }),
    getPlaylistById: builder.query<PlaylistResponse, string>({
      query: (id: string) => {
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
  }),
});

export const {
  useGetPlaylistQuery,
  useGetPlaylistByIdQuery,
  useCreatePlaylistMutation,
} = playlistApi;
