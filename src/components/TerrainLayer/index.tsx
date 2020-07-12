import React, { FC, Dispatch, SetStateAction } from "react"
import { Container } from "@inlet/react-pixi"
import { TerrainHex } from "./TerrainHex"
import { BaseGrid, rawHexConfig } from "../../constants"

import { Shape } from "../../types"
import { calcFogType } from "../../utils/calcFogType"
import { lightenNumeric } from "../../utils/numericColorUtils"
import { calcFogTranformation } from "../../utils/calcFogTransformation"
import { mapToContextualizedHexConfig } from "../../utils/mapToContextualizedHexConfig"
import { Terrain } from "../../Terrain"

type TerrainLayerProps = {
  showAll: boolean
  currentCoords: string
  setHighlightedCoords: Dispatch<SetStateAction<string>>
}
export const TerrainLayer: FC<TerrainLayerProps> = ({
  showAll,
  currentCoords,
  setHighlightedCoords,
}) => {
  const TerrainHexGrid = BaseGrid.map(mapToContextualizedHexConfig).map(
    ({ key, ...config }) => {
      const baseHexConfig = Terrain[key]
      const fog = calcFogType(key, showAll)
      const currentLineFill = lightenNumeric(rawHexConfig.fill, 0.2)

      return {
        ...baseHexConfig,
        ...config,
        lineWidth: currentCoords === key ? 3 : 1,
        lineFill:
          currentCoords === key ? currentLineFill : baseHexConfig.lineFill,
        fill:
          baseHexConfig.shape === Shape.hex
            ? calcFogTranformation(fog, baseHexConfig.fill)
            : baseHexConfig.fill,
        key,
        fog,
      }
    }
  )
  return (
    <Container sortableChildren>
      {TerrainHexGrid.map(hex => (
        <TerrainHex key={hex.key} hex={hex} {...{ setHighlightedCoords }} />
      ))}
    </Container>
  )
}
