import {
  PlayerVisitedHexes,
  PlayerVisibleHexes,
} from "../../../PlayerDataLists"
import { BorderOceans, VisibleWaterList } from "../../../utils/HexMapData"
import { Hex, PointLike } from "honeycomb-grid"
import { Dispatch, SetStateAction } from "react"
import { HexConfig } from "../../../types"
import { Graphics } from "pixi.js"
import { drawHex } from "./drawHex"
import { baseHexConfig } from "../../../constants"

const FoglessHexKeys = [
  ...PlayerVisitedHexes,
  ...Object.keys(BorderOceans),
  ...VisibleWaterList,
]

type DrawVisualHex = (
  hex: Hex<{ size: number }>,
  key: string,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike>>,
  { lineWidth, lineFill, fill }: HexConfig
) => Graphics

export const drawVisualHex: DrawVisualHex = (
  hex,
  key,
  showAll,
  setCoords,
  { lineWidth, lineFill, fill }: HexConfig
) => {
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

      if (!FoglessHexKeys.includes(key)) {
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
