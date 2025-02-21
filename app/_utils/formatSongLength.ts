export const formatSongLength = (length: number) => {
  const roundedLength = Math.round(length);
  const minutes = Math.floor(roundedLength / 60);
  const seconds = roundedLength % 60;
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export const formatTotalLength = (length: number) => {
  const h = Math.floor(length / 3600);
  const m = Math.floor((length % 3600) / 60);
  const s = Math.floor(length % 60);

  let result = "";
  if (h > 0) result += `${h}h`;
  if (m > 0) result += `${m}m`;
  if (s > 0 || result === "") result += `${s}s`;

  return result;
};
