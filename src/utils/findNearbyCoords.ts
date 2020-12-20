import { PersistedHexConfig, Marker, Point } from "../types"
import flatten from "lodash/flatten"

const shortModifiers = [-1, 0, 1]
const longModifiers = [...shortModifiers, -2, 2, -3, 3, 4, -4]

type FindNearbyCoords = (Hex: PersistedHexConfig) => Point[]
export const findNearbyCoords: FindNearbyCoords = ({
  marker,
  coords: { x, y },
}) => {
  const modifiers = marker === Marker.Tower ? longModifiers : shortModifiers
  return flatten(
    modifiers.flatMap(modx =>
      flatten(
        modifiers.map(mody => {
          return { x: x + modx, y: y + mody }
        })
      )
    )
  )
}
