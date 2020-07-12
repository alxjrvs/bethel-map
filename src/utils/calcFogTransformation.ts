import { Fog } from "../types"
import { rawHexConfig } from "../constants"
import { darkenNumeric } from "./numericColorUtils"

export const calcFogTranformation = (
  fog: Fog | undefined,
  fill: number
): number => {
  if (fog === Fog.hard || fog === Fog.showFeature) return rawHexConfig.fill
  if (fog === Fog.soft) return darkenNumeric(fill, 0.6)
  return fill
}
