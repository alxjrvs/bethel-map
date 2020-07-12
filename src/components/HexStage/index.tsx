import React, { FC } from "react"

import { Stage } from "@inlet/react-pixi"

import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import { TerrainLayer } from "../TerrainLayer"
import { MarkerLayer } from "../MarkerLayer.tsx"
import { HighlightedLayer } from "../HighlightedLayer"

export const HexStage: FC = () => {
  const [currentCoords] = useCurrentCoordinates()
  const [highlightedCoords, setHighlightedCoords] = useHighlightedCoordinates()
  const showAll = useIsAdmin()

  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <TerrainLayer {...{ showAll, currentCoords, setHighlightedCoords }} />
      <MarkerLayer {...{ showAll, currentCoords }} />
      <HighlightedLayer {...{ highlightedCoords }} />
    </Stage>
  )
}
