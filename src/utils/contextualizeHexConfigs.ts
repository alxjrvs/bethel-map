import { Hex } from "honeycomb-grid"
import { HexConfig, Fog } from "../types"
import { calcFogType } from "./calcFogType"
import { getCorners } from "../components/Hex/utils/getCorners"
import { coordsToKey } from "./coordsToKey"
import { BaseHexConfigsMap, Terrain } from "./HexMapData"

export const mapToContextualizedHexConfigFactory = (showAll: boolean) => (
  hex: Hex<{ size: number }>
): HexConfig => {
  const point = hex.toPoint()
  const corners = getCorners(hex)
  const key = coordsToKey(hex.coordinates())
  const baseHexConfig = BaseHexConfigsMap[key]
  const terrain = Terrain[key]
  const fog = showAll ? Fog.none : calcFogType(key)

  return {
    ...baseHexConfig,
    key,
    terrain,
    fog,
    point,
    corners,
  }
}
