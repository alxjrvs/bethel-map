import { Dispatch, SetStateAction } from "react"

import { PointLike } from "honeycomb-grid"
import { Graphics } from "pixi.js"

export enum Shape {
  circle = "circle",
  hex = "hex",
}

export type HexConfig = {
  shape: Shape
  fill: number
  lineFill: number
  lineWidth?: number
  description?: string | string[]
  name?: string
}

export type HexConfigLookup = { [key: string]: HexConfig }
type DetailedHexConfigKey = [string, Partial<HexConfig>]
export type HexConfigKeyArray = Array<string | DetailedHexConfigKey>

export type DrawInstructions = (g: Graphics) => unknown

export type HexGridProps = {
  setCoords: Dispatch<SetStateAction<PointLike>>
  currentCoords: PointLike
  showAll?: boolean
}

export enum Fog {
  hard = "hard",
  soft = "soft",
  none = "none",
}
