import React, { useEffect, FC } from "react"
import { useApp, Graphics as GraphicsClass } from "@inlet/react-pixi"
import { extendHex, defineGrid } from "honeycomb-grid"
import isEqual from "lodash.isequal"

import { HexGridProps } from "../../types"
import { coordsToKey } from "../../utils/coordsToKey"
import { drawVisualHex } from "./utils/drawVisualHex"
import { HexConfigsMap } from "../../utils/HexMapData"
import { drawCircle } from "./utils/drawCircle"
import { PlayerCurrentHex } from "../../PlayerDataLists"

const BaseHex = extendHex({ size: 17, offset: 1 })
const Grid = defineGrid(BaseHex)

export const HexGrid: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll = false,
}) => {
  const pixi = useApp()
  useEffect(() => {
    while (pixi.stage.children[0]) {
      pixi.stage.removeChild(pixi.stage.children[0])
    }
    Grid.rectangle({ width: 22, height: 28 }).forEach(hex => {
      const key = coordsToKey(hex.coordinates())
      const clickCallback = () => {
        console.log(key)
        setCoords(hex.coordinates())
      }

      const pixiHex = drawVisualHex({
        hex,
        key,
        showAll,
        hexConfig: HexConfigsMap[key],
        callbacks: { clickCallback },
      })

      if (key === PlayerCurrentHex) {
        pixiHex.addChild(drawCircle(hex))
      }

      if (isEqual(hex.coordinates(), currentCoords)) {
        pixiHex.addChild(drawCircle(hex, 0x000000))
      }

      pixi.stage.addChild(pixiHex)
    })
  }, [currentCoords, pixi.stage, setCoords, showAll])

  return <GraphicsClass />
}
