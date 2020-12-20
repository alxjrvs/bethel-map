import { Point } from "honeycomb-grid"
import { DrawInstructions, HexStyleData } from "../types"

type DrawBang = (point: Point, style: Partial<HexStyleData>) => DrawInstructions

export const drawBang: DrawBang = ({ x, y }, { fill }) => g => {
  g.beginFill(fill)
  g.lineStyle(0)
  g.drawCircle(x + 15, y + 26, 3)
  g.endFill()
  g.beginFill(fill)
  g.lineStyle(0)
  g.drawRect(x + 12.5, y + 5, 5, 15)
  g.endFill()
}
