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
import { addInteractors } from "./addInteractors"

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
  const clickCallback = () => {
    console.log(key)
    setCoords(hex.coordinates())
  }

  const callbacks = { clickCallback }

  if (showAll) {
    return addInteractors(
      drawHex(hex, {
        lineStyleWidth: lineWidth,
        lineStyleColor: lineFill,
        fill,
      }),
      { clickCallback }
    )
  } else {
    if (PlayerVisibleHexes.includes(key)) {
      const visualHex = addInteractors(
        drawHex(hex, {
          lineStyleWidth: lineWidth,
          lineStyleColor: lineFill,
          fill,
        }),
        callbacks
      )

      if (!FoglessHexKeys.includes(key)) {
        const fogHex = drawHex(hex, {
          fill: baseHexConfig.fill,
          alpha: 0.7,
        })

        visualHex.addChild(fogHex)
      }
      return visualHex
    } else {
      return addInteractors(
        drawHex(hex, {
          fill: baseHexConfig.fill,
        }),
        callbacks
      )
    }
  }
}
