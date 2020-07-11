import React, { FC } from "react"
import { HexGridProps } from "../../types"
import { Stage } from "@inlet/react-pixi"
import { HexGrid } from "../../components/HexGrid"

export const HexStage: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll = false,
}) => (
  <Stage height={700} width={650} options={{ backgroundColor: 0x0000ff }}>
    <HexGrid
      setCoords={setCoords}
      currentCoords={currentCoords}
      showAll={showAll}
    />
  </Stage>
)
