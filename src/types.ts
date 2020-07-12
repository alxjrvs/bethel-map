import { Dispatch, SetStateAction } from "react"

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
  setHighlightedCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
  currentCoords: string
  showAll?: boolean
}

export enum Fog {
  hard = "hard",
  soft = "soft",
  none = "none",
}
