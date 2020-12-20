import { Fog } from "../types"
import { darkenNumeric } from "./numericColorUtils"

export const calcFogTranformation = (
  fog: Fog | undefined,
  fill: number
): number => {
  if (fog === Fog.hard || fog === Fog.showFeature) return 11252410
  if (fog === Fog.soft) return darkenNumeric(fill, 0.6)
  return fill
}
