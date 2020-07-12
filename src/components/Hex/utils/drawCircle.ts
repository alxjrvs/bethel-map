import { Point } from "honeycomb-grid"
import { Graphics } from "pixi.js"
import { DrawInstructions, BaseHexConfig, Fog } from "../../../types"
import Color from "color"

type DrawCircle = (
  point: Point,
  hexConfig: Pick<BaseHexConfig, "fill">,
  fog?: Fog
) => DrawInstructions

export const drawCircle: DrawCircle = (
  { x, y },
  { fill = 7680680 },
  fog = Fog.none
) => (g: Graphics) => {
  if (fog !== Fog.hard) {
    g.lineStyle(3, parseInt(Color(fill).lighten(0.8).hex().split("#")[1], 16))
    g.beginFill(fill)
    g.drawCircle(x + 15, y + 17, 5)
    g.endFill()
  }
}
