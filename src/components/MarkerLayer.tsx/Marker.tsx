import React, { FC } from "react"

import { drawCircle } from "../../utils/drawCircle"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import {
  Marker as MarkerType,
  DrawInstructions,
  Fog,
  HexConfig,
} from "../../types"
import { drawBang } from "../../utils/drawBang"
import { drawTower } from "../../utils/drawTower"
import { coordsToKey } from "../../utils/coordsToKey"

type HexProps = {
  hex: HexConfig
}

export const Marker: FC<HexProps> = ({
  hex: {
    coords,
    graphics: { point },
    fog,
    marker,
  },
}) => {
  const instructions: Array<DrawInstructions> = []
  if (fog !== Fog.hard) {
    switch (marker) {
      case MarkerType.PointOfInterest:
        instructions.push(drawBang(point, { fill: 13565997 }))
        break
      case MarkerType.RestStop:
        instructions.push(
          drawCircle(point, {
            fill: 16711680,
            lineFill: 16777215,
          })
        )
        break
      case MarkerType.Tomb:
        instructions.push(drawCircle(point, { fill: 16117405, lineWidth: 6 }))
        break
      case MarkerType.Tower:
        instructions.push(drawTower(point, { fill: 11403519 }))
        break
    }
  }

  return (
    <GraphicsComponent
      key={coordsToKey(coords)}
      draw={g => {
        g.clear()
        instructions.forEach(fn => fn(g))
      }}
    />
  )
}
