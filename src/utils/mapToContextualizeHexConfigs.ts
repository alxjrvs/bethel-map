import { Hex } from "honeycomb-grid"
import { HexConfig, Shape } from "../types"
import { getCorners } from "./getCorners"
import { coordsToKey } from "./coordsToKey"

import { rawHexConfig } from "../constants"
import { calcFogType } from "./calcFogType"
import { lightenNumeric } from "./numericColorUtils"
import { calcFogTranformation } from "./calcFogTransformation"
import { Locations } from "../Locations"

export const mapToContextualizedHexConfigFactory = ({
  showAll,
  currentCoords,
}: {
  showAll: boolean
  currentCoords: string
}) => (hex: Hex<{ size: number }>): HexConfig | undefined => {
  const point = hex.toPoint()
  const corners = getCorners(hex)
  const key = coordsToKey(hex.coordinates())
  const baseHexConfig = Locations[key]
  const fog = calcFogType(key, showAll)
  const currentLineFill = lightenNumeric(rawHexConfig.fill, 0.2)

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
    fog,
    point,
    corners,
  }
}
