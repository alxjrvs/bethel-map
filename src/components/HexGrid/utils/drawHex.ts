import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions } from "../types"

type DrawHexOptions = {
  lineStyleWidth?: number
  lineStyleColor?: number
  fill?: number
  alpha?: number
}

type DrawHex = (
  corners: Point[],
  options?: DrawHexOptions,
  ...instructions: Array<DrawInstructions>
) => DrawInstructions

export const drawHex: DrawHex = (
  [firstCorner, ...otherCorners],
  options = {}
) => (g: Graphics) => {
  const { lineStyleWidth, lineStyleColor, fill, alpha } = options
  g.lineStyle(
    lineStyleWidth === undefined ? 1 : lineStyleWidth,
    lineStyleColor || 0x000000
  )
  g.beginFill(fill || 0xffffff)
  g.alpha = alpha === undefined ? 1 : alpha

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}
