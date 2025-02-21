import { DeletePlaylistResponse, PlaylistResponse } from "_types/api";
import { rootApi } from "./rootApi";

export const playlistApi = rootApi.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    getPlaylist: builder.query<PlaylistResponse, void>({
      query: () => `/playlist`,
      providesTags: [{ type: "Playlist" }],
    }),
    getPlaylistByEmail: builder.query<PlaylistResponse, void>({
      query: (email) => `/playlist?email=${email}`,
      providesTags: [{ type: "Playlist" }],
    }),
    getPlaylistById: builder.query<PlaylistResponse, string>({
      query: (id: string) => {
        return `/playlist/${id}`;
      },
      providesTags: [{ type: "Playlist" }],
    }),
    createPlaylist: builder.mutation<
      void,
      { playlist: string; userInfo: { email: string; username: string } }
    >({
      query: ({ playlist, userInfo }) => {
        return {
          url: `/playlist`,
          method: "POST",
          body: { playlist, userInfo },
        };
      },
      invalidatesTags: [{ type: "Playlist" }],
    }),
    deletePlaylist: builder.mutation<DeletePlaylistResponse, string>({
      query: (id) => {
        return {
          url: `/playlist/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [{ type: "Playlist" }],
    }),
    addSongToPlaylist: builder.mutation({
      query: ({ listPlaylists, songId }) => {
        return {
          url: `/playlist/addSong`,
          method: "POST",
          body: { listPlaylists, songId },
        };
      },
      invalidatesTags: [{ type: "Playlist" }],
    }),
  }),
});

export const {
  useGetPlaylistQuery,
  useGetPlaylistByEmailQuery,
  useGetPlaylistByIdQuery,
  useCreatePlaylistMutation,
  useDeletePlaylistMutation,
  useAddSongToPlaylistMutation,
} = playlistApi;
