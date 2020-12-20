import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "./TerrainHex"

import { HexConfig } from "../../types"

import { Grid } from "honeycomb-grid"

type TerrainLayerProps = {
  mapData: Grid<HexConfig>
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainLayer: FC<TerrainLayerProps> = ({
  mapData,
  setHighlightedCoords,
}) => (
  <Container sortableChildren>
    {mapData.map(hex => (
      <TerrainHex key={hex.key} hex={hex} {...{ setHighlightedCoords }} />
    ))}
  </Container>
)
