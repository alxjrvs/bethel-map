import React, { useEffect, Dispatch, SetStateAction, FC } from "react"
import { useApp, Graphics as GraphicsClass } from "@inlet/react-pixi"
import { extendHex, defineGrid, PointLike } from "honeycomb-grid"
import { drawFullHex } from "./utils/drawFullHex"

const BaseHex = extendHex({ size: 17, offset: 1 })
const Grid = defineGrid(BaseHex)

type HexGridProps = {
  setCoords: Dispatch<SetStateAction<PointLike[]>>
  currentCoords: PointLike[]
  showAll: boolean
}

export const HexGrid: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll,
}) => {
  const pixi = useApp()
  useEffect(() => {
    Grid.rectangle({ width: 22, height: 28 }).forEach((hex) => {
      const pixiHex = drawFullHex(hex, showAll, setCoords, currentCoords)
      pixi.stage.addChild(pixiHex)
    })
  }, [currentCoords, pixi.stage, setCoords, showAll])

  return <GraphicsClass />
}
