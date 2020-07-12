import { BaseHexConfig, Shape } from "./types"

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
}
