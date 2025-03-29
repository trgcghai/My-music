import { SongRowProps } from "_types/component";

/**
 * Xáo trộn mảng từ chỉ mục `x` trở đi, đảm bảo phần tử tại `x` không bị thay đổi vị trí.
 * @param arr - Mảng cần xáo trộn.
 * @param x - Chỉ mục bắt đầu xáo trộn.
 * @returns Mảng đã xáo trộn.
 */
export const shuffleFromIndex = (arr: SongRowProps[], x: number) => {
  if (x < 0 || x >= arr.length) {
    return arr;
  }

  // Lấy phần tử tại chỉ mục `x` (bài hát hiện tại)
  const currentSong = arr[x];

  // Lấy các phần tử sau chỉ mục `x`
  const subArray = arr.slice(x + 1);

  // Xáo trộn các phần tử trong `subArray`
  for (let i = subArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [subArray[i], subArray[j]] = [subArray[j], subArray[i]];
  }

  // Kết hợp bài hát hiện tại với các phần tử đã xáo trộn
  return [...arr.slice(0, x), currentSong, ...subArray];
};
