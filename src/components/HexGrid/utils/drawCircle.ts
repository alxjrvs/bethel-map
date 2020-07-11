import { Point } from "honeycomb-grid"
import { Graphics } from "pixi.js"
import { DrawInstructions } from "../types"

type DrawCircle = (point: Point, fill?: number) => DrawInstructions

export const drawCircle: DrawCircle = ({ x, y }, fill = 0x7532a8) => (
  g: Graphics
) => {
  g.lineStyle(2, 0xffffff)
  g.beginFill(fill)
  g.drawCircle(x + 15, y + 17, 5)
  g.endFill()
}
