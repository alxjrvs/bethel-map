import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"

export type HexConfigLookup = { [key: string]: Partial<HexConfig> }
export type HexConfigKeyArray = Array<string | [string, Partial<HexConfig>]>

export type DrawInstructions = (g: Graphics) => unknown

export enum Shape {
  circle = "circle",
  hex = "hex",
  tower = "tower",
  bang = "bang",
}

export enum Fog {
  hard = "hard",
  soft = "soft",
  showFeature = "showFeature",
  none = "none",
}

export enum Marker {
  PointOfInterest = "points_of_interest",
  RestStop = "rest_stop",
  Tomb = "tomb",
  Tower = "towers",
}

export enum Terrain {
  Chasm = "chasm",
  Forest = "forest",
  Lava = "lava",
  RockyTerrain = "rocky_terrain",
  Sand = "sand",
  Tundra = "tundra",
  Water = "water",
  Weird = "weird",
}

export type DerivedHexData = {
  key: string
  point: Point
  corners: Point[]
}

export type HexStyleData = {
  fill: number
  lineFill: number
  lineWidth?: number
}

export interface HexConfig extends DerivedHexData {
  fog: Fog
  marker?: Marker
  terrain?: Terrain
  description?: string[]
  name?: string
}
