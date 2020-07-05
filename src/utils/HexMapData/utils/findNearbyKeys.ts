const modifiers = [-1, 0, 1];

export const findNearbyKeys = (key: string): string[] => {
  const [x, y] = key.split("-");
  return modifiers.flatMap((modx) =>
    modifiers.map((mody) => {
      return `${Number(x) + modx}-${Number(y) + mody}`;
    })
  );
};
