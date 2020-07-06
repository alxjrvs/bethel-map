import { Hex } from "honeycomb-grid"
import { Graphics } from "pixi.js"

type DrawCircle = (hex: Hex<{ size: number }>, fill?: number) => Graphics

export const drawCircle: DrawCircle = (hex, fill = 0x7532a8) => {
  const circle = new Graphics()
  const { x, y } = hex.toPoint()
  circle.lineStyle(2, 0xffffff)
  circle.beginFill(fill)
  circle.drawCircle(x + 15, y + 17, 5)
  circle.endFill()
  return circle
}
