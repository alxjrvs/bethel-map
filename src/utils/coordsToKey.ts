import { Point } from "../types"

type CoordsToKey = (points: [string, string]) => string
export const coordsToKey: CoordsToKey = ([x, y]) => `${x}-${y}`

type CoordsToPoint = (points: [string, string]) => Point
export const coordsToPoint: CoordsToPoint = ([x, y]) => ({
  x: Number(x),
  y: Number(y),
})
