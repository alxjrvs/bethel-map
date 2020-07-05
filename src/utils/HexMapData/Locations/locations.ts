import { assignHexList } from "../utils/assignHexList";
import { RestStopList, PointOfInterestList, ShrinesList } from ".";
import { baseHexConfig } from "../constants";

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
