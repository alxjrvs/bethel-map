import { Hex } from "honeycomb-grid"
import { Graphics } from "pixi.js"

import {
  PlayerVisitedHexes,
  PlayerVisibleHexes,
} from "../../../PlayerDataLists"
import { VisibleWaterList } from "../../../utils/HexMapData"
import { HexConfig } from "../../../types"
import { drawHex } from "./drawHex"
import { baseHexConfig } from "../../../constants"
import { addInteractors } from "./addInteractors"

const FoglessHexKeys = [...PlayerVisitedHexes, ...VisibleWaterList]

type Callbacks = {
  clickCallback: () => void
}
type DrawViualHexParams = {
  hex: Hex<{ size: number }>
  key: string
  showAll: boolean
  hexConfig: HexConfig
  callbacks: Callbacks
}
type DrawVisualHex = (paras: DrawViualHexParams) => Graphics

export const drawVisualHex: DrawVisualHex = ({
  hex,
  key,
  showAll,
  hexConfig: { lineWidth, lineFill, fill },
  callbacks,
}) => {
  if (showAll) {
    return addInteractors(
      drawHex(hex, {
        lineStyleWidth: lineWidth,
        lineStyleColor: lineFill,
        fill,
      }),
      callbacks
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
