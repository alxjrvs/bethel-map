import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "../Hex"

import { BaseGrid } from "../../constants"
import { mapToTerrainHexDataFactory } from "../../utils/mapToTerrainHexDataFactory"

type TerrainLayerProps = {
  showAll: boolean
  currentCoords: string
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainLayer: FC<TerrainLayerProps> = ({
  showAll,
  currentCoords,
  setHighlightedCoords,
}) => {
  const TerrainHexGrid = BaseGrid.map(
    mapToTerrainHexDataFactory({ showAll, currentCoords })
  )
  return (
    <Container sortableChildren>
      {TerrainHexGrid.map(hex => (
        <TerrainHex key={hex.key} hex={hex} {...{ setHighlightedCoords }} />
      ))}
    </Container>
  )
}
