import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions, BaseHexConfig, Fog } from "../../../types"
import { calcFogTranformation } from "./calcFogTransform"

type DrawHex = (
  corners: Point[],
  baseHexConfig: Partial<BaseHexConfig>,
  fog: Fog
) => DrawInstructions

export const drawHex: DrawHex = (
  [firstCorner, ...otherCorners],
  baseHexConfig = {},
  fog
) => (g: Graphics) => {
  const { lineWidth, lineFill, fill } = baseHexConfig
  const lineStyle = lineWidth === undefined ? 1 : lineWidth
  g.zIndex = 1
  g.lineStyle(lineStyle, lineFill || 0)
  g.beginFill(calcFogTranformation(fog, fill || 0))

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}
