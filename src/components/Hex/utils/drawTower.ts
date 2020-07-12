import { Point } from "honeycomb-grid"
import { BaseHexConfig, DrawInstructions } from "../../../types"
import Color from "color"

type DrawTower = (
  point: Point,
  hexConfig: Pick<BaseHexConfig, "fill">
) => DrawInstructions

export const drawTower: DrawTower = ({ x, y }, { fill }) => g => {
  g.beginFill(fill)
  g.lineStyle(1, parseInt(Color(fill).lighten(0.5).hex().split("#")[1], 16))
  g.drawRect(x + 12.5, y + 8, 5, 20)
  g.endFill()
}
