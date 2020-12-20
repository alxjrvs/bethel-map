import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { Fog, HexConfig } from "../../types"
import { Marker } from "./Marker"
import { coordsToKey } from "../../utils/coordsToKey"

type MarkerLayerProps = {
  mapData: HexConfig[]
}
export const MarkerLayer: FC<MarkerLayerProps> = ({ mapData }) => (
  <Container sortableChildren>
    {mapData.map(hex => {
      return (
        hex &&
        hex.fog !== Fog.hard && (
          <Marker key={coordsToKey(hex.coords)} hex={hex} />
        )
      )
    })}
  </Container>
)
