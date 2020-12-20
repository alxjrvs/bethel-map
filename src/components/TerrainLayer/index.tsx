import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "./TerrainHex"

import { Point, HexConfig } from "../../types"
import { coordsToKey } from "../../utils/coordsToKey"

type TerrainLayerProps = {
  mapData: HexConfig[]
  setHighlightedCoords: Dispatch<SetStateAction<Point>>
  currentCoords: Point
}
export const TerrainLayer: FC<TerrainLayerProps> = ({
  mapData,
  setHighlightedCoords,
  currentCoords,
}) => (
  <Container sortableChildren>
    {mapData.map(hex => (
      <TerrainHex
        key={coordsToKey(hex.coords)}
        hex={hex}
        currentCoords={currentCoords}
        setHighlightedCoords={setHighlightedCoords}
      />
    ))}
  </Container>
)
