import { Terrain } from "./Terrain"
import { Locations } from "./Locations"
export * from "./Terrain"
export * from "./Locations"

export const HexConfigsMap = {
  ...Terrain,
  ...Locations,
}