import React, { useEffect, FC } from "react"
import { useApp, Graphics as GraphicsClass } from "@inlet/react-pixi"
import { extendHex, defineGrid } from "honeycomb-grid"
import { drawFullHex } from "./utils/drawFullHex"
import { HexGridProps } from "../../types"

const BaseHex = extendHex({ size: 17, offset: 1 })
const Grid = defineGrid(BaseHex)

export const HexGrid: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll,
}) => {
  const pixi = useApp()
  useEffect(() => {
    while (pixi.stage.children[0]) {
      pixi.stage.removeChild(pixi.stage.children[0])
    }
    Grid.rectangle({ width: 22, height: 28 }).forEach(hex => {
      const pixiHex = drawFullHex(hex, showAll, setCoords, currentCoords)
      pixi.stage.addChild(pixiHex)
    })
  }, [currentCoords, pixi.stage, setCoords, showAll])

  return <GraphicsClass />
}
