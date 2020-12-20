import { Fog } from "../types"
import { MapDataState } from "../state/MapData"

export const calcFogType = (
  key: string,
  showAll: boolean,
  { players: { visible }, meta: { showFeature, fogless } }: MapDataState
): Fog => {
  if (showAll) return Fog.none
  if (fogless.includes(key)) return Fog.none
  if (showFeature.includes(key)) return Fog.showFeature
  if (visible.includes(key)) return Fog.soft
  return Fog.hard
}
