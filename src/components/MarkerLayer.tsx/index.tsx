import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { BaseGrid } from "../../constants"
import { Locations } from "../../Locations"
import { coordsToKey } from "../../utils/coordsToKey"
import { mapToContextualizedHexConfigFactory } from "../../utils/mapToContextualizeHexConfigs"
import { Fog } from "../../types"
import { Marker } from "./Marker"

type MarkerLayerProps = {
  showAll: boolean
  currentCoords: string
}
export const MarkerLayer: FC<MarkerLayerProps> = ({
  showAll,
  currentCoords,
}) => {
  const Markers = BaseGrid.filter(
    hex => Locations[coordsToKey(hex.coordinates())]
  ).map(mapToContextualizedHexConfigFactory({ showAll, currentCoords }))
  return (
    <Container sortableChildren>
      {Markers.map(
        hex => hex && hex.fog !== Fog.hard && <Marker key={hex.key} hex={hex} />
      )}
    </Container>
  )
}
