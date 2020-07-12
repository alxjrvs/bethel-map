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
  currentCoords,
  setHighlightedCoords,
  highlightedCoords,
}) => {
  const hexPoint = hex.toPoint()
  const hexCorners = getCorners(hex)
  const hexKey = coordsToKey(hex.coordinates())

  const hexConfig = HexConfigsMap[hexKey]
  const terrainConfig = Terrain[hexKey]
  const fog = showAll ? Fog.none : calcFogType(hexKey)

  const instructions: Array<DrawInstructions> = []

  if (hexConfig.shape === Shape.hex) {
    instructions.push(drawHex(hexCorners, hexConfig, fog))
  }

  if (hexConfig.shape === Shape.circle) {
    instructions.push(
      drawHex(
        hexCorners,
        {
          ...hexConfig,
          fill: terrainConfig.fill,
        },
        fog
      )
    )
    instructions.push(drawCircle(hexPoint, hexConfig, fog))
  }

  if (hexKey === highlightedCoords) {
    instructions.push(
      drawCircle(hexPoint, {
        ...hexConfig,
        fill: fog === Fog.hard ? baseHexConfig.fill : hexConfig.fill,
      })
    )
  }

  if (hexKey === currentCoords) {
    console.log()
    instructions.push(drawCircle(hexPoint, { fill: 8388736 }))
  }

  instructions.push(
    addInteractors({
      clickCallback: () => setHighlightedCoords(hexKey),
    })
  )

  return (
    <GraphicsComponent
      key={hexKey}
      draw={g => {
        g.clear()
        instructions.forEach(fn => fn(g))
      }}
    />
  )
}
