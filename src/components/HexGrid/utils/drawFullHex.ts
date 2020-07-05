import { Hex, PointLike } from "honeycomb-grid"
import { Dispatch, SetStateAction } from "react"
import { drawHex } from "./drawHex"
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
