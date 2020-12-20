import React, { FC } from "react"

import { Stage } from "@inlet/react-pixi"

import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import { TerrainLayer } from "../TerrainLayer"
import { MarkerLayer } from "../MarkerLayer.tsx"
import { HighlightedLayer } from "../HighlightedLayer"

import { Grid } from "honeycomb-grid"
import { NewHexConfig } from "../../types"

interface Props {
  mapData: Grid<NewHexConfig>
}
export const HexStage: FC<Props> = ({ mapData }) => {
  const [highlightedCoords, setHighlightedCoords] = useHighlightedCoordinates()
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <TerrainLayer
        setHighlightedCoords={setHighlightedCoords}
        mapData={mapData}
      />
      <MarkerLayer mapData={mapData} />
      <HighlightedLayer highlightedCoords={highlightedCoords} />
    </Stage>
  )
}
