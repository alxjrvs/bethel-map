import { PlayerVisitedHexes } from "./PlayerVisitedHexes"
import { findNearbyKeys } from "./utils/findNearbyKeys"
import { VisibleWaterList, BorderOceans, Tombs } from "../utils/HexMapData"

export const PlayerVisibleHexes = [
  ...VisibleWaterList,
  ...Object.keys(BorderOceans),
  ...Object.keys(Tombs),
  ...PlayerVisitedHexes.flatMap(findNearbyKeys),
]
