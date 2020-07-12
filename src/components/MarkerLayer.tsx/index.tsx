import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { BaseGrid } from "../../constants"
import { coordsToKey } from "../../utils/coordsToKey"

import { Fog } from "../../types"
import { Marker } from "./Marker"
import { mapToContextualizedHexConfig } from "../../utils/mapToContextualizedHexConfig"
import { calcFogType } from "../../utils/calcFogType"
import { MapDataState } from "../../state/MapDataContext"

type MarkerLayerProps = {
  showAll: boolean
  mapData: MapDataState
}
export const MarkerLayer: FC<MarkerLayerProps> = ({ showAll, mapData }) => {
  const Markers = BaseGrid.filter(
    hex => mapData.locations.all[coordsToKey(hex.coordinates())]
  )
    .map(mapToContextualizedHexConfig)
    .map(({ key, ...config }) => {
      const baseHexConfig = mapData.locations.all[key]
      const fog = calcFogType(key, showAll, mapData)

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
