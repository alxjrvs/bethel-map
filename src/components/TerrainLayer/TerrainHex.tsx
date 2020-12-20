import React, { FC, Dispatch, SetStateAction } from "react"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawTerrain } from "../../utils/drawTerrain"
import { addInteractors } from "../../utils/addInteractors"

import { HexConfig } from "../../types"
import { coordsToKey } from "../../utils/coordsToKey"

type HexProps = {
  hex: HexConfig
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainHex: FC<HexProps> = ({
  hex: {
    coords,
    graphics: { corners },
    terrain,
    fog,
  },
  setHighlightedCoords,
}) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawTerrain(corners, terrain, fog),
        addInteractors({
          clickCallback: () => {
            setHighlightedCoords(coordsToKey(coords))
          },
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
