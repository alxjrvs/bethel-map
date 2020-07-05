import { Hex, PointLike } from "honeycomb-grid"
import { Dispatch, SetStateAction } from "react"

import { Graphics } from "pixi.js"
import isEqual from "lodash.isequal"
import { drawCircle } from "./drawCircle"
import { HexConfigsMap } from "../../../utils/HexMapData"
import { coordsToKey } from "../../../utils/coordsToKey"
import { drawVisualHex } from "./drawVisualHex"

type DrawFullHex = (
  hex: Hex<{ size: number }>,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike>>,
  currentCoords: PointLike
) => Graphics

export const drawFullHex: DrawFullHex = (
  hex,
  showAll,
  setCoords,
  currentCoords
) => {
  const key = coordsToKey(hex.coordinates())

  const visualHex = drawVisualHex(
    hex,
    key,
    showAll,
    setCoords,
    HexConfigsMap[key]
  )

  if (isEqual(currentCoords, hex.coordinates())) {
    visualHex.addChild(drawCircle(hex))
  }
  return visualHex
}
