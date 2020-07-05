import { PlayerVisitedHexes } from "./PlayerVisitedHexes";
import { findNearbyKeys } from "../utils/findNearbyKeys";
import { VisibleWaterList, BorderOceans, Shrines } from "../utils/HexMapData";

export const PlayerVisibleHexes = [
  ...VisibleWaterList,
  ...Object.keys(BorderOceans),
  ...Object.keys(Shrines),
  ...PlayerVisitedHexes.flatMap(findNearbyKeys),
  "11-21",
  "11-19",
  "10-20",
];
