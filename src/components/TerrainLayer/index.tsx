import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "./TerrainHex"

import { NewHexConfig } from "../../types"

import { Grid } from "honeycomb-grid"

type TerrainLayerProps = {
  mapData: Grid<NewHexConfig>
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
