import React, { FC, Dispatch, SetStateAction } from "react"
import { HexConfig } from "../../types"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawHex } from "./utils/drawHex"
import { addInteractors } from "./utils/addInteractors"

type HexProps = {
  hex: Omit<HexConfig, "terrain">
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainHex: FC<HexProps> = ({
  hex: { key, corners, ...terrain },
  setHighlightedCoords,
}) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawHex(corners, terrain),
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
