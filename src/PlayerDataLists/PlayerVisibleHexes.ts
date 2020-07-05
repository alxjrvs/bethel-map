import { PlayerVisitedHexes } from "./PlayerVisitedHexes";
import { findNearbyKeys } from "../utils/findNearbyKeys";
import { VisibleWaterList, BorderOceans } from "../Terrain";
import { Shrines } from "../Locations";

export const PlayerVisibleHexes = [
  ...VisibleWaterList,
  ...Object.keys(BorderOceans),
  ...Object.keys(Shrines),
  "11-21",
  "11-19",
  "10-20",
  ...PlayerVisitedHexes.flatMap(findNearbyKeys),
];
