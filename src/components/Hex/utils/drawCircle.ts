import { Point } from "honeycomb-grid"
import { Graphics } from "pixi.js"
import { DrawInstructions, BaseHexConfig } from "../../../types"
import Color from "color"

type DrawCircle = (
  point: Point,
  hexConfig: Pick<BaseHexConfig, "fill">
) => DrawInstructions

export const drawCircle: DrawCircle = ({ x, y }, { fill = 7680680 }) => (
  g: Graphics
) => {
  g.lineStyle(3, parseInt(Color(fill).lighten(0.8).hex().split("#")[1], 16))
  g.beginFill(fill)
  g.drawCircle(x + 15, y + 17, 5)
  g.endFill()
}
