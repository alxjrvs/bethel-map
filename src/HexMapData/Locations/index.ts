import { Towers } from "./Towers"
import { RestStops } from "./RestStop"
import { PointsOfInterest } from "./PointOfInterest"
import { Tombs } from "./Tomb"

export * from "./Tomb"
export * from "./RestStop"
export * from "./PointOfInterest"
export * from "./Towers"

export const Locations = {
  ...Towers,
  ...RestStops,
  ...PointsOfInterest,
  ...Tombs,
}
