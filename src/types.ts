import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"

export enum Shape {
  circle = "circle",
  hex = "hex",
  tower = "tower",
  bang = "bang",
}

export type BaseHexConfig = {
  shape: Shape
  fill: number
  lineFill: number
  lineWidth?: number
  description?: string[]
  name?: string
}

export type BaseHexConfigLookup = { [key: string]: BaseHexConfig }
type DetailedBaseHexConfigKey = [string, Partial<BaseHexConfig>]
export type BaseHexConfigKeyArray = Array<string | DetailedBaseHexConfigKey>

export type DrawInstructions = (g: Graphics) => unknown

export enum Fog {
  hard = "hard",
  soft = "soft",
  showFeature = "showFeature",
  none = "none",
}

export type HexConfig = BaseHexConfig & {
  key: string
  fog: Fog
  point: Point
  corners: Point[]
}
