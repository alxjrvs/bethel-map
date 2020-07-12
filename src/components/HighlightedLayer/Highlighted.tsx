import React, { FC } from "react"
import { HexConfig } from "../../types"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawCircle } from "../../utils/drawCircle"
import { lightenNumeric } from "../../utils/numericColorUtils"
import { rawHexConfig } from "../../constants"

type HexProps = {
  hex: Pick<HexConfig, "point">
}
export const Highlighted: FC<HexProps> = ({ hex: { point } }) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawCircle(point, {
          lineFill: lightenNumeric(rawHexConfig.fill, 0.2),
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
