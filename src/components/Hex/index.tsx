import React, { FC, Dispatch, SetStateAction } from "react"

import { drawHex } from "./utils/drawHex"

import { drawCircle } from "./utils/drawCircle"
import { addInteractors } from "./utils/addInteractors"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Shape, HexConfig } from "../../types"

type HexProps = {
  hex: HexConfig
  setHighlightedCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
}

export const Hex: FC<HexProps> = ({
  hex: { key, corners, point, terrain, fog, ...hexConfig },
  setHighlightedCoords,
  highlightedCoords,
}) => {
  const instructions: Array<DrawInstructions> = []

  instructions.push(drawHex(corners, terrain, fog))

  if (hexConfig.shape === Shape.hex) {
    instructions.push(drawHex(corners, hexConfig, fog))
  }

  if (hexConfig.shape === Shape.circle) {
    instructions.push(drawCircle(point, hexConfig, fog))
  }

  if (key === highlightedCoords) {
    instructions.push(
      drawCircle(point, {
        fill: 4095,
      })
    )
  }

  instructions.push(
    addInteractors({
      clickCallback: () => setHighlightedCoords(key),
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
