import React, { FC, Dispatch, SetStateAction } from "react"

import { drawHex } from "./utils/drawHex"

import { drawCircle } from "./utils/drawCircle"
import { addInteractors } from "./utils/addInteractors"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Shape, HexConfig, Fog } from "../../types"

import { drawBang } from "./utils/drawBang"
import { drawTower } from "./utils/drawTower"

type HexProps = {
  hex: HexConfig
  highlightedCoords: string
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}

export const Hex: FC<HexProps> = ({
  hex: { key, corners, point, terrain, fog, ...hexConfig },
  highlightedCoords,
  setHighlightedCoords,
}) => {
  const instructions: Array<DrawInstructions> = []

  if (hexConfig.shape === Shape.hex) {
    instructions.push(drawHex(corners, hexConfig))
  } else {
    instructions.push(drawHex(corners, terrain))

    if (fog !== Fog.hard) {
      hexConfig.shape === Shape.circle &&
        instructions.push(drawCircle(point, hexConfig))

      hexConfig.shape === Shape.tower &&
        instructions.push(drawTower(point, hexConfig))

      hexConfig.shape === Shape.bang &&
        instructions.push(drawBang(point, hexConfig))
    }
  }
  key === highlightedCoords &&
    instructions.push(
      drawCircle(point, {
        fill: 4095,
      })
    )

  instructions.push(
    addInteractors({
      clickCallback: () => {
        console.log("click")
        setHighlightedCoords(key)
      },
    })
  )

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
