import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions, HexStyleData } from "../types"

type DrawHex = (corners: Point[], style: HexStyleData) => DrawInstructions

export const drawHex: DrawHex = (
  [firstCorner, ...otherCorners],
  { lineWidth = 1, lineFill, fill }
) => (g: Graphics) => {
  g.zIndex = lineWidth
  g.lineStyle(lineWidth, lineFill || 0)
  g.beginFill(fill)

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}
