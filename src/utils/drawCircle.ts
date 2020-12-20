import { Graphics } from "pixi.js"
import { Point, DrawInstructions, HexStyleData } from "../types"

type DrawCircle = (
  point: Point,
  style: Partial<HexStyleData>
) => DrawInstructions

export const drawCircle: DrawCircle = (
  { x, y },
  { fill = 7680680, lineFill = 11252410 }
) => (g: Graphics) => {
  g.lineStyle(3, lineFill)
  g.beginFill(fill)
  g.drawCircle(x + 15, y + 17, 5)
  g.endFill()
}
