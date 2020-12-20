import React, { FC, Dispatch, SetStateAction } from "react"
import isEqual from "lodash/isEqual"

import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { drawTerrain } from "../../utils/drawTerrain"
import { addInteractors } from "../../utils/addInteractors"

import { Point, HexConfig } from "../../types"
import { coordsToPoint } from "../../utils/coordsToKey"

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
        drawTerrain(
          corners,
          terrain,
          fog,
          isEqual(coordsToPoint(coords), currentCoords)
        ),
        addInteractors({
          clickCallback: () => {
            const point = coordsToPoint(coords)
            setHighlightedCoords(point)
          },
        }),
      ]

      instructions.forEach(fn => fn(g))
    }}
  />
)
