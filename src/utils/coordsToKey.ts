import { PointLike } from "honeycomb-grid"

export const coordsToKey = ({ x, y }: PointLike): string => {
  return `${x}-${y}`
}
