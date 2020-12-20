import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { Fog, HexConfig } from "../../types"
import { Marker } from "./Marker"
import { Grid } from "honeycomb-grid"

type MarkerLayerProps = {
  mapData: Grid<HexConfig>
}
export const MarkerLayer: FC<MarkerLayerProps> = ({ mapData }) => (
  <Container sortableChildren>
    {mapData.map(hex => {
      return hex && hex.fog !== Fog.hard && <Marker key={hex.key} hex={hex} />
    })}
  </Container>
)
