import { Dispatch, SetStateAction } from "react"

import { Graphics } from "pixi.js"

export enum Shape {
  circle = "circle",
  hex = "hex",
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
