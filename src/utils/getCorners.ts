import { Hex, Point } from "honeycomb-grid"

export const getCorners = (hex: Hex<{ size: number }>): Point[] => {
  const point = hex.toPoint()
  return hex.corners().map(corner => corner.add(point))
}
