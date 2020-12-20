import React, { FC } from "react"

import { drawCircle } from "../../utils/drawCircle"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Shape, Fog, NewHexConfig } from "../../types"
import { drawBang } from "../../utils/drawBang"
import { drawTower } from "../../utils/drawTower"

type HexProps = {
  hex: NewHexConfig
}

export const Marker: FC<HexProps> = ({
  hex: { key, point, fog, style, ...hexConfig },
}) => {
  const instructions: Array<DrawInstructions> = []
  if (fog !== Fog.hard) {
    hexConfig.shape === Shape.circle &&
      instructions.push(drawCircle(point, style))

    hexConfig.shape === Shape.tower &&
      instructions.push(drawTower(point, style))

    hexConfig.shape === Shape.bang && instructions.push(drawBang(point, style))
  }

  return (
    <GraphicsComponent
      key={key}
      draw={g => {
        g.clear()
        instructions.forEach(fn => fn(g))
      }}
    />
  )
}
