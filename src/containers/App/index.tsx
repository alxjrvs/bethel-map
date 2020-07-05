import React, { useState, FC } from "react"
import { Stage } from "@inlet/react-pixi"
import { HexGrid } from "../../components/HexGrid"
import { PointLike } from "honeycomb-grid"

export const App: FC = () => {
  const [currentCoords, setCoords] = useState<PointLike[]>([])
  return (
    <>
      <div>
        <div>
          {currentCoords.length
            ? currentCoords.map(({ x, y }) => `"${x}-${y}", `)
            : "no coords"}
        </div>
      </div>
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
