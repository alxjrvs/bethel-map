import { Hex } from "honeycomb-grid"
import { HexConfig, Fog } from "../types"
import { calcFogType } from "./calcFogType"
import { getCorners } from "../components/Hex/utils/getCorners"
import { coordsToKey } from "./coordsToKey"
import { BaseHexConfigsMap, Terrain } from "./HexMapData"
import Color from "color"
import { rawHexConfig } from "../constants"

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

  return {
    ...baseHexConfig,
    lineWidth: currentCoords === key ? 3 : 1,
    lineFill: currentCoords === key ? currentLineFill : baseHexConfig.lineFill,
    key,
    terrain,
    fog,
    point,
    corners,
  }
}
