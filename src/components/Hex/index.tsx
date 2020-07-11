import React, { FC } from "react"

import { coordsToKey } from "../../utils/coordsToKey"
import { HexConfigsMap, Terrain } from "../../utils/HexMapData"
import { drawHex } from "./utils/drawHex"
import { getCorners } from "./utils/getCorners"

import { drawCircle } from "./utils/drawCircle"
import { addInteractors } from "./utils/addInteractors"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Fog, HexGridProps, Shape } from "../../types"
import { calcFogType } from "./utils/calcFogType"
import { Hex as HexType } from "honeycomb-grid"
import { baseHexConfig } from "../../constants"

type HexProps = HexGridProps & {
  hex: HexType<{ size: number }>
}

export const Hex: FC<HexProps> = ({
  hex,
  showAll,
  setCoords,
  currentCoords,
}) => {
  const currentKey = coordsToKey(currentCoords)
  const key = coordsToKey(hex.coordinates())
  const hexConfig = HexConfigsMap[key] || baseHexConfig
  const terrainConfig = Terrain[key]
  const fog = showAll ? Fog.none : calcFogType(key)

  const instructions: Array<DrawInstructions> = []

  if (hexConfig.shape === Shape.hex) {
    instructions.push(drawHex(getCorners(hex), hexConfig, fog))
  }

  if (hexConfig.shape === Shape.circle) {
    instructions.push(
      drawHex(
        getCorners(hex),
        {
          ...hexConfig,
          fill: terrainConfig.fill,
        },
        fog
      )
    )
    instructions.push(drawCircle(hex.toPoint(), hexConfig, fog))
  }

  if (key === currentKey) {
    instructions.push(drawCircle(hex.toPoint(), { fill: 8388736 }))
  }

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
