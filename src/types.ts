import { Graphics } from "pixi.js"

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

export type HexStyleData = {
  fill: number
  lineFill: number
  lineWidth?: number
}

export interface Point {
  x: number
  y: number
}
export interface PersistedHexConfig {
  borderVisible: boolean
  showFeature: boolean
  visible: boolean
  terrain: string
  marker?: string
  coords: Point
  graphics: {
    point: Point
    corners: [Point, Point, Point, Point, Point, Point]
  }
  name?: string
  description?: string[]
}
export interface HexConfig
  extends Pick<
    PersistedHexConfig,
    "coords" | "graphics" | "name" | "description"
  > {
  terrain: Terrain
  marker?: Marker
  fog: Fog
}
