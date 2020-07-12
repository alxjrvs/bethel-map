import { coordsToKey } from "./coordsToKey"
import { Hex } from "honeycomb-grid"
import { getCorners } from "./getCorners"
import { HexConfig } from "../types"

export const mapToContextualizedHexConfig = (
  hex: Hex<{ size: number }>
): Pick<HexConfig, "point" | "key" | "corners"> => {
  return {
    point: hex.toPoint(),
    key: coordsToKey(hex.coordinates()),
    corners: getCorners(hex),
  }
}
