import { SongData } from "_types/entity";

export const getPlaylistLength = (songs: SongData[]) => {
  if (!songs) return 0;
  return songs.reduce((acc, song) => acc + song.duration, 0);
};
