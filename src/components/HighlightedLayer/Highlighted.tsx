import React, { FC } from "react"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawCircle } from "../../utils/drawCircle"
import { lightenNumeric } from "../../utils/numericColorUtils"
import { HexConfig } from "../../types"

type HexProps = {
  hex: Pick<HexConfig, "point">
}
export const Highlighted: FC<HexProps> = ({ hex: { point } }) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawCircle(point, {
          lineFill: lightenNumeric(11252410, 0.2),
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
