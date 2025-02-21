import { SongData, SongInPlaylist } from "_types/entity";

export const getPlaylistLength = (songs: SongData[] | SongInPlaylist[]) => {
  if (!songs) return 0;
  return songs.reduce((acc, song) => acc + song.duration, 0);
};
