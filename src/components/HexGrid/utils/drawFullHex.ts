import { Hex, PointLike } from "honeycomb-grid"
import { Dispatch, SetStateAction } from "react"
import { drawHex } from "./drawHex"
import { Graphics } from "pixi.js"
import isEqual from "lodash.isequal"
import { drawCircle } from "./drawCircle"
import {
  PlayerVisitedHexes,
  PlayerVisibleHexes,
} from "../../../PlayerDataLists"
import {
  HexConfigsMap,
  BorderOceans,
  VisibleWaterList,
} from "../../../utils/HexMapData"
import { HexConfig } from "../../../types"
import { baseHexConfig } from "../../../constants"
import { coordsToKey } from "../../../utils/coordsToKey"

const NonFogHexKeys = [
  ...PlayerVisitedHexes,
  ...Object.keys(BorderOceans),
  ...VisibleWaterList,
]

export const drawVisualHex = (
  hex: Hex<{ size: number }>,
  key: string,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike>>,
  { lineWidth, lineFill, fill }: HexConfig
): Graphics => {
  let visualHex: Graphics
  if (showAll) {
    visualHex = drawHex(hex, {
      lineStyleWidth: lineWidth,
      lineStyleColor: lineFill,
      fill,
    })
  } else {
    if (PlayerVisibleHexes.includes(key)) {
      visualHex = drawHex(hex, {
        lineStyleWidth: lineWidth,
        lineStyleColor: lineFill,
        fill,
      })

      if (!NonFogHexKeys.includes(key)) {
        const fogHex = drawHex(hex, {
          fill: baseHexConfig.fill,
          alpha: 0.7,
        })

        visualHex.addChild(fogHex)
      }
    } else {
      visualHex = drawHex(hex, {
        fill: baseHexConfig.fill,
      })
    }
  }

  visualHex.interactive = true
  visualHex.on("click", () => {
    console.log(key)
    setCoords(hex.coordinates())
  })
  return visualHex
}

export const drawFullHex = (
  hex: Hex<{ size: number }>,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike>>,
  currentCoords: PointLike
): Graphics => {
  const key = coordsToKey(hex.coordinates())

  const base = drawHex(hex)
  const visualHex = drawVisualHex(
    hex,
    key,
    showAll,
    setCoords,
    HexConfigsMap[key]
  )

  if (isEqual(currentCoords, hex.coordinates())) {
    const circle = drawCircle(hex)
    visualHex.addChild(circle)
  }
  base.addChild(visualHex)
  return base
}
