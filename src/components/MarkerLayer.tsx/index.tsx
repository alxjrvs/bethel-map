import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { BaseGrid } from "../../constants"
import { Locations } from "../../Locations"
import { coordsToKey } from "../../utils/coordsToKey"

import { Fog } from "../../types"
import { Marker } from "./Marker"
import { mapToContextualizedHexConfig } from "../../utils/mapToContextualizedHexConfig"
import { calcFogType } from "../../utils/calcFogType"

type MarkerLayerProps = {
  showAll: boolean
}
export const MarkerLayer: FC<MarkerLayerProps> = ({ showAll }) => {
  const Markers = BaseGrid.filter(
    hex => Locations[coordsToKey(hex.coordinates())]
  )
    .map(mapToContextualizedHexConfig)
    .map(({ key, ...config }) => {
      const baseHexConfig = Locations[key]
      const fog = calcFogType(key, showAll)

      return {
        ...baseHexConfig,
        ...config,
        key,
        fog,
      }
    })
  return (
    <Container sortableChildren>
      {Markers.map(
        hex => hex && hex.fog !== Fog.hard && <Marker key={hex.key} hex={hex} />
      )}
    </Container>
  )
}
