import React, { FC, Dispatch, SetStateAction } from "react"
import isEqual from "lodash/isEqual"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawTerrain } from "../../utils/drawTerrain"
import { addInteractors } from "../../utils/addInteractors"

import { Point, HexConfig } from "../../types"

type HexProps = {
  hex: HexConfig
  setHighlightedCoords: Dispatch<SetStateAction<Point>>
  currentCoords: Point
}
export const TerrainHex: FC<HexProps> = ({
  hex: {
    coords,
    graphics: { corners },
    terrain,
    fog,
  },
  setHighlightedCoords,
  currentCoords,
}) => (
  <GraphicsComponent
    draw={g => {
      g.clear()
      const instructions = [
        drawTerrain(corners, terrain, fog, isEqual(coords, currentCoords)),
        addInteractors({
          clickCallback: () => {
            setHighlightedCoords(coords)
          },
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
