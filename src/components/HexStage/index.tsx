import React, { FC } from "react"

import { Stage, Container } from "@inlet/react-pixi"
import { Hex } from "../Hex"

import { extendHex, defineGrid } from "honeycomb-grid"
import { mapToContextualizedHexConfigFactory } from "../../utils/contextualizeHexConfigs"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

const BaseHex = extendHex({ size: 17, offset: 1 })

export const HexStage: FC = () => {
  const [currentCoords] = useCurrentCoordinates()
  const [highlightedCoords, setHighlightedCoords] = useHighlightedCoordinates()
  const showAll = useIsAdmin()
  const HexGrid = defineGrid(BaseHex)
    .rectangle({ width: 22, height: 28 })
    .map(mapToContextualizedHexConfigFactory({ showAll, currentCoords }))
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <Container sortableChildren>
        {HexGrid.map(hex => (
          <Hex
            key={hex.key}
            hex={hex}
            {...{ highlightedCoords, setHighlightedCoords }}
          />
        ))}
      </Container>
    </Stage>
  )
}
