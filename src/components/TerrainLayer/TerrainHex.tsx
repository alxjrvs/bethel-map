import React, { FC, Dispatch, SetStateAction } from "react"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawTerrain } from "../../utils/drawTerrain"
import { addInteractors } from "../../utils/addInteractors"

import { HexConfig } from "../../types"

type HexProps = {
  hex: HexConfig
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainHex: FC<HexProps> = ({
  hex: { key, corners, terrain },
  setHighlightedCoords,
}) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawTerrain(corners, terrain),
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
