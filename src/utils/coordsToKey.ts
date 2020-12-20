import { Point } from "../types"

type CoordsToKey = (points: Point) => string
export const coordsToKey: CoordsToKey = ({ x, y }) => `${x}-${y}`
