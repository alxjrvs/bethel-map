import React, { useState, FC } from "react"
import { PointLike } from "honeycomb-grid"
import { HexStage } from "./HexStage"

const showAdmin = false
export const App: FC = () => {
  const [currentCoords, setCoords] = useState<PointLike>({ x: 9, y: 20 })
  return showAdmin ? (
    <>
      <HexStage
        setCoords={setCoords}
        currentCoords={currentCoords}
        showAll={true}
      />
      <HexStage
        setCoords={setCoords}
        currentCoords={currentCoords}
        showAll={false}
      />
    </>
  ) : (
    <HexStage
      setCoords={setCoords}
      currentCoords={currentCoords}
      showAll={false}
    />
  )
}
