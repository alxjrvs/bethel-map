import { BaseHexConfig, Shape } from "./types"
import { extendHex, defineGrid } from "honeycomb-grid"

export const height = 28
export const width = 22

export const yCoords: number[] = []
for (let i = 0; i <= height; i += 1) {
  yCoords.push(i)
}

export const xCoords: number[] = []
for (let i = 0; i <= width; i += 1) {
  xCoords.push(i)
}

export const rawHexConfig: BaseHexConfig = {
  shape: Shape.hex,
  fill: 11252410,
  lineFill: 0,
  name: "Unknown...",
  description: ["Who knows what mysteries might lay here..."],
}

const BaseHex = extendHex({ size: 17, offset: 1 })
export const BaseGrid = defineGrid(BaseHex).rectangle({ width: 22, height: 28 })
