import React, { FC } from "react"

import { Stage } from "@inlet/react-pixi"

import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import { TerrainLayer } from "../TerrainLayer"
import { MarkerLayer } from "../MarkerLayer.tsx"
import { HighlightedLayer } from "../HighlightedLayer"

import { HexConfig } from "../../types"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"

interface Props {
  mapData: HexConfig[]
}
export const HexStage: FC<Props> = ({ mapData }) => {
  const [highlightedCoords, setHighlightedCoords] = useHighlightedCoordinates()
  const [currentCoords] = useCurrentCoordinates()
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <TerrainLayer
        setHighlightedCoords={setHighlightedCoords}
        mapData={mapData}
        currentCoords={currentCoords}
      />
      <MarkerLayer mapData={mapData} />
      <HighlightedLayer
        mapData={mapData}
        highlightedCoords={highlightedCoords}
      />
    </Stage>
  )
}
