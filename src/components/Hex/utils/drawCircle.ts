import { Point } from "honeycomb-grid"
import { Graphics } from "pixi.js"
import { DrawInstructions, HexConfig, Fog } from "../../../types"

type DrawCircle = (
  point: Point,
  hexConfig: Pick<HexConfig, "fill">,
  fog?: Fog
) => DrawInstructions

export const drawCircle: DrawCircle = (
  { x, y },
  { fill = 7680680 },
  fog = Fog.none
) => (g: Graphics) => {
  if (fog !== Fog.hard) {
    g.lineStyle(2, 16777215)
    g.beginFill(fill)
    g.drawCircle(x + 15, y + 17, 5)
    g.endFill()
  }
}
