import { Fog } from "../types"
import { PlayerVisitedHexes, PlayerVisibleHexes } from "../PlayerDataLists"
import { VisibleWaterList, Tombs } from "./HexMapData"

const FoglessHexKeys = [
  ...PlayerVisitedHexes,
  ...VisibleWaterList,
  ...Object.keys(Tombs),
]
export const calcFogType = (key: string, showAll = false): Fog => {
  if (showAll) return Fog.none
  if (FoglessHexKeys.includes(key)) return Fog.none
  if (PlayerVisibleHexes.includes(key)) return Fog.soft
  return Fog.hard
}
