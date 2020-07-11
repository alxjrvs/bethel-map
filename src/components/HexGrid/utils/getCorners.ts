import { Hex } from "honeycomb-grid"

export const getCorners = (hex: Hex<{ size: number }>) => {
  const point = hex.toPoint()
  return hex.corners().map(corner => corner.add(point))
}
