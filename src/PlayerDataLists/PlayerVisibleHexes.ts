import { VisibleWaterList, BorderOceans, Tombs } from "../utils/HexMapData"
import { PlayerVisitedHexes } from "."
import { findNearbyKeys } from "./utils/findNearbyKeys"

export const PlayerVisibleHexes = [
  ...VisibleWaterList,
  ...Object.keys(BorderOceans),
  ...Object.keys(Tombs),
  ...PlayerVisitedHexes.flatMap(findNearbyKeys),
]
