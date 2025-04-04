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
    updatePlaylist: builder.mutation({
      query: ({ playlist, id }) => {
        return {
          url: `/playlist/${id}`,
          method: "PUT",
          body: { playlist },
        };
      },
      invalidatesTags: [{ type: "Playlist" }],
    }),
    removeSongFromPlaylist: builder.mutation({
      query: ({ playlistId, songId }) => {
        return {
          url: `/playlist/removeSong`,
          method: "POST",
          body: { playlistId, songId },
        };
      },
      invalidatesTags: [{ type: "Playlist" }],
    }),
    createPlaylistWithSong: builder.mutation({
      query: ({ playlist, userInfo, songId }) => {
        return {
          url: `/playlist/createPlaylistWithSong`,
          method: "POST",
          body: { playlist, userInfo, songId },
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
  useUpdatePlaylistMutation,
  useRemoveSongFromPlaylistMutation,
  useCreatePlaylistWithSongMutation,
} = playlistApi;
