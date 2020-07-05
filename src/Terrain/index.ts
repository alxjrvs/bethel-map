import { assignHexList } from "../utils/assignHexList";
import {
  WaterList,
  RockyTerrainList,
  ChasmList,
  BeachList,
  ForestList,
  TundraList,
} from ".";
import { baseOceanHexConfig, baseHexConfig } from "../constants";

export * from "./WaterList";
export * from "./ChasmList";
export * from "./RockyTerrainList";
export * from "./ForestList";
export * from "./BeachList";
export * from "./TundraList";

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
