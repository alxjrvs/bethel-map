import { HexConfigLookup } from "./types";
import { xCoords, yCoords, baseHexConfig } from "./constants";

export const generateBaseHexConfigs = () => {
  const baseHexConfigs: HexConfigLookup = {};
  xCoords.forEach((x) =>
    yCoords.forEach((y) => (baseHexConfigs[`${x}-${y}`] = baseHexConfig))
  );
  return baseHexConfigs;
};
