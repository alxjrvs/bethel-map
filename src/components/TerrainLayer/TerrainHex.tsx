import React, { FC, Dispatch, SetStateAction } from "react"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawHex } from "../../utils/drawHex"
import { addInteractors } from "../../utils/addInteractors"

import { NewHexConfig } from "../../types"

type HexProps = {
  hex: NewHexConfig
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainHex: FC<HexProps> = ({
  hex: { key, corners, style },
  setHighlightedCoords,
}) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawHex(corners, style),
        addInteractors({
          clickCallback: () => {
            setHighlightedCoords(key)
          },
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
