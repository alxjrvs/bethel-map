import React, { FC } from "react"

import { coordsToKey } from "../../utils/coordsToKey"
import { BaseHexConfigsMap, Terrain } from "../../utils/HexMapData"
import { drawHex } from "./utils/drawHex"
import { getCorners } from "./utils/getCorners"

import { drawCircle } from "./utils/drawCircle"
import { addInteractors } from "./utils/addInteractors"
import { Graphics as GraphicsComponent } from "@inlet/react-pixi"
import { DrawInstructions, Fog, HexGridProps, Shape } from "../../types"
import { calcFogType } from "../../utils/calcFogType"
import { Hex as HexType } from "honeycomb-grid"
import { baseBaseHexConfig } from "../../constants"

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

  const BaseHexConfig = BaseHexConfigsMap[hexKey]
  const terrainConfig = Terrain[hexKey]
  const fog = showAll ? Fog.none : calcFogType(hexKey)

  const instructions: Array<DrawInstructions> = []

  instructions.push(drawHex(hexCorners, terrainConfig, fog))

  if (BaseHexConfig.shape === Shape.hex) {
    instructions.push(drawHex(hexCorners, BaseHexConfig, fog))
  }

  if (BaseHexConfig.shape === Shape.circle) {
    instructions.push(drawCircle(hexPoint, BaseHexConfig, fog))
  }

  if (hexKey === currentCoords) {
    instructions.push(
      drawCircle(hexPoint, {
        ...BaseHexConfig,
        fill: fog === Fog.hard ? baseBaseHexConfig.fill : BaseHexConfig.fill,
      })
    )
  }

  if (hexKey === highlightedCoords) {
    instructions.push(
      drawCircle(hexPoint, {
        fill: 4095,
      })
    )
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
