import React, { FC } from "react"
import { Container } from "@inlet/react-pixi"
import { BaseGrid } from "../../constants"
import { coordsToKey } from "../../utils/coordsToKey"
import { Highlighted } from "./Highlighted"

type HighltedLayerProps = {
  highlightedCoords: string
}
export const HighlightedLayer: FC<HighltedLayerProps> = ({
  highlightedCoords,
}) => {
  const HighlightedGrid = BaseGrid.map(hex => ({
    point: hex.toPoint(),
    key: coordsToKey(hex.coordinates()),
  })).filter(({ key }) => key === highlightedCoords)

  return (
    <Container sortableChildren>
      {HighlightedGrid.map(hex => (
        <Highlighted key={hex.key} hex={hex} />
      ))}
    </Container>
  )
}
