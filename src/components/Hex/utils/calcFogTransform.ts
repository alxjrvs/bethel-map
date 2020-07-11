import { Fog } from "../../../types"
import { baseHexConfig } from "../../../constants"
import Color from "color"

export const calcFogTranformation = (
  fog: Fog | undefined,
  fill: number
): number => {
  if (fog === Fog.hard) return baseHexConfig.fill
  if (fog === Fog.soft)
    return parseInt(Color(fill).darken(0.6).hex().split("#")[1], 16)
  return fill
}
