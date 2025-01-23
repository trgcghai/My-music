export const formatSongLength = (length: number) => {
  const roundedLength = Math.round(length);
  const minutes = Math.floor(roundedLength / 60);
  const seconds = roundedLength % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};
