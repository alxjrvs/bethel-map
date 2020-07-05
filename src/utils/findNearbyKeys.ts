import { TowersList } from "../Locations";

const shortModifiers = [-1, 0, 1];
const longModifiers = [...shortModifiers, -2, 2, -3, 3, 4, -4];

export const findNearbyKeys = (key: string): string[] => {
  const [x, y] = key.split("-");
  const modifiers = TowersList.includes(key) ? longModifiers : shortModifiers;
  return modifiers.flatMap((modx) =>
    modifiers.map((mody) => {
      return `${Number(x) + modx}-${Number(y) + mody}`;
    })
  );
};
