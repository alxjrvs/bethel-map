import React, { FC, Dispatch, SetStateAction } from "react"

import { Stage } from "@inlet/react-pixi"
import { Hex } from "../Hex"

import { extendHex, defineGrid } from "honeycomb-grid"
import { mapToContextualizedHexConfigFactory } from "../../utils/contextualizeHexConfigs"

const BaseHex = extendHex({ size: 17, offset: 1 })

type HexStageProps = {
  setHighlightedCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
  currentCoords: string
  showAll: boolean
}

export const HexStage: FC<HexStageProps> = ({ showAll, ...props }) => {
  const HexGrid = defineGrid(BaseHex)
    .rectangle({ width: 22, height: 28 })
    .map(mapToContextualizedHexConfigFactory(showAll))
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      {HexGrid.map(hex => (
        <Hex key={hex.key} hex={hex} {...props} />
      ))}
    </Stage>
  )
}
