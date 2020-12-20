import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"
import isEqual from "lodash/isEqual"

import { coordsToKey, coordsToPoint } from "../../utils/coordsToKey"
import { Highlighted } from "./Highlighted"
import { HexConfig, Point } from "../../types"

type HighltedLayerProps = {
  highlightedCoords: Point
  mapData: HexConfig[]
}
export const HighlightedLayer: FC<HighltedLayerProps> = ({
  highlightedCoords,
  mapData,
}) => {
  const highlightedGrids = mapData.filter(({ coords }) =>
    isEqual(coordsToPoint(coords), highlightedCoords)
  )

  return (
    <Container sortableChildren>
      {highlightedGrids.map(hex => (
        <Highlighted key={coordsToKey(hex.coords)} hex={hex} />
      ))}
    </Container>
  )
}
