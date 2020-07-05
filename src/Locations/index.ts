import { assignHexList } from "../utils/assignHexList";
import { RestStopList, PointOfInterestList, ShrinesList, TowersList } from ".";
import { baseHexConfig } from "../constants";

export * from "./ShrineList";
export * from "./RestStopList";
export * from "./PointOfInterestList";
export * from "./TowersList";

export const RestStops = assignHexList(RestStopList, {
  ...baseHexConfig,
  fill: 0xff0000,
});

export const PointsOfInterest = assignHexList(PointOfInterestList, {
  ...baseHexConfig,
  fill: 0xff4500,
});

export const Shrines = assignHexList(ShrinesList, {
  ...baseHexConfig,
  fill: 0xf5ee9d,
  lineWidth: 3,
});

export const Towers = assignHexList(TowersList, {
  ...baseHexConfig,
  fill: 0x2d7aa1,
});
