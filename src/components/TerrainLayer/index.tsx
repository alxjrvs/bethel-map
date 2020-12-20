import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "./TerrainHex"

import { HexConfig } from "../../types"
import { coordsToKey } from "../../utils/coordsToKey"

type TerrainLayerProps = {
  mapData: HexConfig[]
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainLayer: FC<TerrainLayerProps> = ({
  mapData,
  setHighlightedCoords,
}) => (
  <Container sortableChildren>
    {mapData.map(hex => (
      <TerrainHex
        key={coordsToKey(hex.coords)}
        hex={hex}
        {...{ setHighlightedCoords }}
      />
    ))}
  </Container>
)
