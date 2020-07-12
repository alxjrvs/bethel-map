import { Hex } from "honeycomb-grid"
import { HexConfig } from "../types"
import { getCorners } from "./getCorners"
import { coordsToKey } from "./coordsToKey"
import { Terrain } from "../HexMapData"
import { rawHexConfig } from "../constants"
import { calcFogType } from "./calcFogType"
import { lightenNumeric } from "./numericColorUtils"
import { calcFogTranformation } from "./calcFogTransformation"

export const mapToTerrainHexDataFactory = ({
  showAll,
  currentCoords,
}: {
  showAll: boolean
  currentCoords: string
}) => (hex: Hex<{ size: number }>): Omit<HexConfig, "terrain"> => {
  const point = hex.toPoint()
  const corners = getCorners(hex)
  const key = coordsToKey(hex.coordinates())
  const terrain = Terrain[key]
  const fog = calcFogType(key, showAll)
  const currentLineFill = lightenNumeric(rawHexConfig.fill, 0.2)

  const lineWidth = currentCoords === key ? 3 : 1
  const lineFill =
    currentCoords === key ? currentLineFill : rawHexConfig.lineFill

  return {
    ...terrain,
    lineWidth,
    lineFill,
    fill: calcFogTranformation(fog, terrain.fill),
    key,
    fog,
    point,
    corners,
  }
}
