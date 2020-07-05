import React, { FC } from "react"
import { HexGridProps } from "../../../types"
import { Stage } from "@inlet/react-pixi"
import { HexGrid } from "../../../components/HexGrid"

export const HexStage: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll,
}) => (
  <Stage options={{ backgroundColor: 0xffffff }} height={800} width={700}>
    <HexGrid
      setCoords={setCoords}
      currentCoords={currentCoords}
      showAll={showAll}
    />
  </Stage>
)
