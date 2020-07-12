import { Hex } from "honeycomb-grid"
import { HexConfig, Fog, Shape } from "../types"
import { getCorners } from "./getCorners"
import { coordsToKey } from "./coordsToKey"
import { BaseHexConfigsMap, Terrain } from "./HexMapData"
import Color from "color"
import { rawHexConfig } from "../constants"
import { calcFogType } from "./calcFogType"

const calcFogTranformation = (fog: Fog | undefined, fill: number): number => {
  if (fog === Fog.hard) return rawHexConfig.fill
  if (fog === Fog.soft)
    return parseInt(Color(fill).darken(0.6).hex().split("#")[1], 16)
  return fill
}

export const mapToContextualizedHexConfigFactory = ({
  showAll,
  currentCoords,
}: {
  showAll: boolean
  currentCoords: string
}) => (hex: Hex<{ size: number }>): HexConfig => {
  const point = hex.toPoint()
  const corners = getCorners(hex)
  const key = coordsToKey(hex.coordinates())
  const baseHexConfig = BaseHexConfigsMap[key]
  const terrain = Terrain[key]
  const fog = showAll ? Fog.none : calcFogType(key)
  const currentLineFill = parseInt(
    Color(rawHexConfig.fill).lighten(0.2).hex().split("#")[1],
    16
  )
  const fill =
    baseHexConfig.shape === Shape.hex
      ? calcFogTranformation(fog, baseHexConfig.fill)
      : baseHexConfig.fill
  const lineWidth = currentCoords === key ? 3 : 1
  const lineFill =
    currentCoords === key ? currentLineFill : baseHexConfig.lineFill

  return {
    ...baseHexConfig,
    lineWidth,
    lineFill,
    fill,
    key,
    terrain: {
      ...terrain,
      fill: calcFogTranformation(fog, terrain.fill),
    },
    fog,
    point,
    corners,
  }
}
