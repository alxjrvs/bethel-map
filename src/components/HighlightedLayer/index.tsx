import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"

import { coordsToKey } from "../../utils/coordsToKey"
import { Highlighted } from "./Highlighted"
import { HexConfig } from "../../types"

type HighltedLayerProps = {
  highlightedCoords: string
  mapData: HexConfig[]
}
export const HighlightedLayer: FC<HighltedLayerProps> = ({
  highlightedCoords,
  mapData,
}) => {
  const highlightedGrids = mapData.filter(
    ({ coords }) => coordsToKey(coords) === highlightedCoords
  )

  return (
    <Container sortableChildren>
      {highlightedGrids.map(hex => (
        <Highlighted key={coordsToKey(hex.coords)} hex={hex} />
      ))}
    </Container>
  )
}
