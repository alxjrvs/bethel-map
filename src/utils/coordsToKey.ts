import { PointLike } from "honeycomb-grid"

type CoordsToKey = (points: PointLike) => string
export const coordsToKey: CoordsToKey = ({ x, y }) => `${x}-${y}`
