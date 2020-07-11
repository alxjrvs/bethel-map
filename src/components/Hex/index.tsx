import React, { FC } from "react"

import { coordsToKey } from "../../utils/coordsToKey"
import { HexConfigsMap } from "../../utils/HexMapData"
import { drawHex } from "./utils/drawHex"
import { getCorners } from "./utils/getCorners"

import isEqual from "lodash.isequal"
import { drawCircle } from "./utils/drawCircle"
import { addInteractors } from "./utils/addInteractors"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Fog, HexGridProps } from "../../types"
import { calcFogType } from "./utils/calcFogType"
import { Hex as HexType } from "honeycomb-grid"

type HexProps = HexGridProps & {
  hex: HexType<{ size: number }>
}

export const Hex: FC<HexProps> = ({
  hex,
  showAll,
  setCoords,
  currentCoords,
}) => {
  const key = coordsToKey(hex.coordinates())
  const hexConfig = HexConfigsMap[key]

  const instructions: Array<DrawInstructions> = []
  const fog = showAll ? Fog.none : calcFogType(key)

  instructions.push(drawHex(getCorners(hex), hexConfig, fog))

  isEqual(hex.coordinates(), currentCoords) &&
    instructions.push(drawCircle(hex.toPoint(), 0))

  instructions.push(
    addInteractors({ clickCallback: () => setCoords(hex.coordinates()) })
  )

  return (
    <GraphicsComponent
      key={key}
      draw={g => {
        g.clear()
        instructions.forEach(fn => fn(g))
      }}
    />
  )
}
