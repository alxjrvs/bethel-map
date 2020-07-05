import React, { useState, FC } from "react"
import { Stage } from "@inlet/react-pixi"
import { HexGrid } from "../../components/HexGrid"
import { PointLike } from "honeycomb-grid"

export const App: FC = () => {
  const [currentCoords, setCoords] = useState<PointLike>({ x: 9, y: 20 })
  return (
    <>
      <Stage options={{ backgroundColor: 0xffffff }} height={800} width={700}>
        <HexGrid
          setCoords={setCoords}
          currentCoords={currentCoords}
          showAll={true}
        />
      </Stage>
      <Stage options={{ backgroundColor: 0xffffff }} height={800} width={700}>
        <HexGrid
          setCoords={setCoords}
          currentCoords={currentCoords}
          showAll={false}
        />
      </Stage>
    </>
  )
}
