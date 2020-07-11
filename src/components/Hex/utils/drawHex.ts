import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions, HexConfig, Fog } from "../../../types"
import { calcFogTranformation } from "./calcFogTransform"

type DrawHex = (
  corners: Point[],
  hexConfig: Partial<HexConfig>,
  fog: Fog
) => DrawInstructions

export const drawHex: DrawHex = (
  [firstCorner, ...otherCorners],
  hexConfig = {},
  fog
) => (g: Graphics) => {
  const { lineWidth, lineFill, fill } = hexConfig
  g.lineStyle(lineWidth === undefined ? 1 : lineWidth, lineFill || 0)
  g.beginFill(calcFogTranformation(fog, fill || 0))

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}
