import React, { FC } from "react"
import { HexGridProps } from "../../types"
import { Stage } from "@inlet/react-pixi"
import { Hex } from "../../components/Hex"

import { HexGrid } from "../../constants"
import { coordsToKey } from "../../utils/coordsToKey"

export const HexStage: FC<HexGridProps> = props => {
  return (
    <Stage height={700} width={650} options={{ backgroundColor: 255 }}>
      {HexGrid.map(hex => (
        <Hex key={coordsToKey(props.currentCoords)} hex={hex} {...props} />
      ))}
    </Stage>
  )
}
