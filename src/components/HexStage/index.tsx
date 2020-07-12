import React, { FC } from "react"

import { Stage, Container } from "@inlet/react-pixi"
import { TerrainHex, Markers } from "../Hex"

import { extendHex, defineGrid } from "honeycomb-grid"
import { mapToContextualizedHexConfigFactory } from "../../utils/mapToContextualizeHexConfigs"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"
import { mapToTerrainHexDataFactory } from "../../utils/mapToTerrainHexDataFactory"
import { coordsToKey } from "../../utils/coordsToKey"
import { Highlighted } from "../Hex/Highlighted"

const BaseHex = extendHex({ size: 17, offset: 1 })
const BaseGrid = defineGrid(BaseHex).rectangle({ width: 22, height: 28 })

export const HexStage: FC = () => {
  const [currentCoords] = useCurrentCoordinates()
  const [highlightedCoords, setHighlightedCoords] = useHighlightedCoordinates()
  const showAll = useIsAdmin()
  const TerrainHexGrid = BaseGrid.map(
    mapToTerrainHexDataFactory({ showAll, currentCoords })
  )
  const HexGrid = BaseGrid.map(
    mapToContextualizedHexConfigFactory({ showAll, currentCoords })
  )

  const HighlightedGrid = BaseGrid.map(hex => ({
    point: hex.toPoint(),
    key: coordsToKey(hex.coordinates()),
  })).filter(({ key }) => key === highlightedCoords)
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <Container sortableChildren>
        {TerrainHexGrid.map(hex => (
          <TerrainHex key={hex.key} hex={hex} {...{ setHighlightedCoords }} />
        ))}
      </Container>
      <Container sortableChildren>
        {HexGrid.map(hex => hex && <Markers key={hex.key} hex={hex} />)}
      </Container>
      <Container sortableChildren>
        {HighlightedGrid.map(
          hex => hex && <Highlighted key={hex.key} hex={hex} />
        )}
      </Container>
    </Stage>
  )
}
