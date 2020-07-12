import React, { FC, Dispatch, SetStateAction } from "react"

import { Stage, Container } from "@inlet/react-pixi"
import { Hex } from "../Hex"

import { extendHex, defineGrid } from "honeycomb-grid"
import { mapToContextualizedHexConfigFactory } from "../../utils/contextualizeHexConfigs"
import { useIsAdmin } from "../hooks/useIsAdmin"

const BaseHex = extendHex({ size: 17, offset: 1 })

type HexStageProps = {
  setHighlightedCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
  currentCoords: string
}

export const HexStage: FC<HexStageProps> = ({ currentCoords, ...props }) => {
  const showAll = useIsAdmin()
  const HexGrid = defineGrid(BaseHex)
    .rectangle({ width: 22, height: 28 })
    .map(mapToContextualizedHexConfigFactory({ showAll, currentCoords }))
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      <Container sortableChildren>
        {HexGrid.map(hex => (
          <Hex key={hex.key} hex={hex} {...props} />
        ))}
      </Container>
    </Stage>
  )
}
