import { assignHexList } from "../utils/assignHexList";
import { RestStopList, PointOfInterestList, ShrinesList, TowersList } from ".";
import { baseHexConfig } from "../constants";
import { Towers } from "./Towers";
import { RestStops } from "./RestStop";
import { PointsOfInterest } from "./PointOfInterest";
import { Shrines } from "./Shrine";

export * from "./Shrine";
export * from "./RestStop";
export * from "./PointOfInterest";
export * from "./Towers";

export const Locations = {
  ...Towers,
  ...RestStops,
  ...PointsOfInterest,
  ...Shrines,
};
