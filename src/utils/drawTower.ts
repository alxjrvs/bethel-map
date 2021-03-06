import { Point, DrawInstructions, HexStyleData } from "../types"
import { lightenNumeric } from "./numericColorUtils"

type DrawTower = (
  point: Point,
  style: Pick<HexStyleData, "fill">
) => DrawInstructions

export const drawTower: DrawTower = ({ x, y }, { fill }) => g => {
  g.beginFill(fill)
  g.lineStyle(1, lightenNumeric(fill))
  g.drawRect(x + 12.5, y + 3, 5, 28)
  g.endFill()
}
