export const shuffleFromIndex = (arr: string[], x: number) => {
  if (x < 0 || x >= arr.length) {
    return arr;
  }

  const subArray = arr.slice(x);

  for (let i = subArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [subArray[i], subArray[j]] = [subArray[j], subArray[i]];
  }

  return [...arr.slice(0, x), ...subArray];
};
