import { Fog } from "../types"
import { PlayerVisitedHexes, PlayerVisibleHexes } from "../PlayerDataLists"
import { VisibleWaterList, Tombs } from "../HexMapData"

const FoglessHexKeys = [...PlayerVisitedHexes, ...VisibleWaterList]

const ShowFeatureHexKeys = [...Object.keys(Tombs)]
export const calcFogType = (key: string, showAll = false): Fog => {
  if (showAll) return Fog.none
  if (FoglessHexKeys.includes(key)) return Fog.none
  if (ShowFeatureHexKeys.includes(key)) return Fog.showFeature
  if (PlayerVisibleHexes.includes(key)) return Fog.soft
  return Fog.hard
}
