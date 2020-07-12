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
  const hexCoordinates = hex.coordinates()
  const hexPoint = hex.toPoint()
  const hexCorners = getCorners(hex)
  const currentKey = coordsToKey(currentCoords)
  const highlightedKey = coordsToKey(highlightedCoords)
  const key = coordsToKey(hexCoordinates)

  const hexConfig = HexConfigsMap[key] || baseHexConfig
  const terrainConfig = Terrain[key]
  const fog = showAll ? Fog.none : calcFogType(key)

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

  if (key === highlightedKey) {
    instructions.push(
      drawCircle(hexPoint, {
        ...hexConfig,
        fill: fog === Fog.hard ? baseHexConfig.fill : hexConfig.fill,
      })
    )
  }

  if (key === currentKey) {
    instructions.push(drawCircle(hexPoint, { fill: 8388736 }))
  }

  instructions.push(
    addInteractors({
      clickCallback: () => setHighlightedCoords(hexCoordinates),
    })
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
