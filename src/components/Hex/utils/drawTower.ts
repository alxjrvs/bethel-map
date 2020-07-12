import { Point } from "honeycomb-grid"
import { BaseHexConfig, DrawInstructions } from "../../../types"
import { lightenNumeric } from "../../../utils/numericColorUtils"

type DrawTower = (
  point: Point,
  hexConfig: Pick<BaseHexConfig, "fill">
) => DrawInstructions

export const drawTower: DrawTower = ({ x, y }, { fill }) => g => {
  g.beginFill(fill)
  g.lineStyle(1, lightenNumeric(fill))
  g.drawRect(x + 12.5, y + 3, 5, 28)
  g.endFill()
}
