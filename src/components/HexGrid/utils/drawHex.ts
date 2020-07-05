import { Graphics } from "pixi.js"
import { Hex } from "honeycomb-grid"

type drawHexOptions = {
  lineStyleWidth?: number
  lineStyleColor?: number
  fill?: number
  alpha?: number
}
export const drawHex = (
  hex: Hex<{ size: number }>,
  { lineStyleWidth, lineStyleColor, fill, alpha }: drawHexOptions = {}
): Graphics => {
  const point = hex.toPoint()
  const corners = hex.corners().map((corner) => corner.add(point))
  const [firstCorner, ...otherCorners] = corners

  const graphicalHex = new Graphics()
  graphicalHex.lineStyle(
    lineStyleWidth === undefined ? 1 : lineStyleWidth,
    lineStyleColor || 0x000000
  )
  graphicalHex.beginFill(fill || 0xffffff)
  graphicalHex.alpha = alpha === undefined ? 1 : alpha

  graphicalHex.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => graphicalHex.lineTo(x, y))
  graphicalHex.lineTo(firstCorner.x, firstCorner.y)
  graphicalHex.endFill()
  return graphicalHex
}
