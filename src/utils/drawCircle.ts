import { Point } from "honeycomb-grid"
import { Graphics } from "pixi.js"
import { DrawInstructions, BaseHexConfig } from "../types"
import { rawHexConfig } from "../constants"

type DrawCircle = (
  point: Point,
  hexConfig: Partial<Pick<BaseHexConfig, "fill" | "lineFill">>
) => DrawInstructions

export const drawCircle: DrawCircle = (
  { x, y },
  { fill = 7680680, lineFill = rawHexConfig.fill }
) => (g: Graphics) => {
  g.lineStyle(3, lineFill)
  g.beginFill(fill)
  g.drawCircle(x + 15, y + 17, 5)
  g.endFill()
}
