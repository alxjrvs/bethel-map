import { Fog } from "../../../types"
import { PlayerVisibleHexes } from "../../../PlayerDataLists"
import { FoglessHexKeys } from "../../../constants"

export const calcFogType = (key: string): Fog => {
  if (FoglessHexKeys.includes(key)) return Fog.none
  if (PlayerVisibleHexes.includes(key)) return Fog.soft
  return Fog.hard
}
