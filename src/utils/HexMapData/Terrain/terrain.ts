import { assignHexList } from "../utils/assignHexList";
import {
  WaterList,
  RockyTerrainList,
  ChasmList,
  BeachList,
  ForestList,
  TundraList,
} from ".";
import {
  baseOceanHexConfig,
  baseHexConfig,
  xCoords,
  height,
  yCoords,
  width,
} from "../constants";
import { HexConfigLookup } from "../types";

export const Water = assignHexList(WaterList, baseOceanHexConfig);
export const Forests = assignHexList(ForestList, {
  ...baseHexConfig,
  fill: 0x0e9e0b,
});

export const Tundra = assignHexList(TundraList, {
  ...baseHexConfig,
  fill: 0xf1f2eb,
});

export const RockyTerrain = assignHexList(RockyTerrainList, {
  ...baseHexConfig,
  fill: 0xad8050,
});

export const Chasm = assignHexList(ChasmList, {
  ...baseHexConfig,
  fill: 0x383328,
});

export const Beaches = assignHexList(BeachList, {
  ...baseHexConfig,
  fill: 0xeff7b7,
});

const generateBorderOceans = () => {
  const borderOceanHexConfigs: HexConfigLookup = {};
  xCoords.forEach((x) => {
    borderOceanHexConfigs[`${x}-0`] = baseOceanHexConfig;
    borderOceanHexConfigs[`${x}-${height - 1}`] = baseOceanHexConfig;
  });
  yCoords.forEach((y) => {
    borderOceanHexConfigs[`0-${y}`] = baseOceanHexConfig;
    borderOceanHexConfigs[`${width - 1}-${y}`] = baseOceanHexConfig;
  });

  return borderOceanHexConfigs;
};

export const BorderOceans = generateBorderOceans();
