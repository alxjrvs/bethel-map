import { FC } from "react"

import { extendHex, defineGrid } from "honeycomb-grid"

import { HexGridProps } from "../../types"
import { coordsToKey } from "../../utils/coordsToKey"

import { HexConfigsMap, VisibleWaterList, Tombs } from "../../utils/HexMapData"
import React from "react"

import { isEqual } from "lodash"
import { drawCircle } from "./utils/drawCircle"
import { PlayerVisitedHexes, PlayerVisibleHexes } from "../../PlayerDataLists"
import { drawHex } from "./utils/drawHex"
import { baseHexConfig } from "../../constants"
import { Graphics } from "@inlet/react-pixi"
import { DrawInstructions } from "./types"
import { addInteractors } from "./utils/addInteractors"
import { getCorners } from "./utils/getCorners"

const FoglessHexKeys = [
  ...PlayerVisitedHexes,
  ...VisibleWaterList,
  ...Object.keys(Tombs),
]
const BaseHex = extendHex({ size: 17, offset: 1 })
const Grid = defineGrid(BaseHex)

export const HexGrid: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll = false,
}) => {
  return (
    <>
      {Grid.rectangle({ width: 22, height: 28 }).flatMap(hex => {
        const key = coordsToKey(hex.coordinates())
        const hexConfig = HexConfigsMap[key]
        const clickCallback = () => {
          console.log(key)
          setCoords(hex.coordinates())
        }

        const instructions: Array<DrawInstructions> = []
        if (showAll) {
          instructions.push(
            drawHex(getCorners(hex), {
              lineStyleWidth: hexConfig.lineWidth,
              lineStyleColor: hexConfig.lineFill,
              fill: hexConfig.fill,
            })
          )
        } else if (PlayerVisibleHexes.includes(key)) {
          instructions.push(
            drawHex(getCorners(hex), {
              lineStyleWidth: hexConfig.lineWidth,
              lineStyleColor: hexConfig.lineFill,
              fill: hexConfig.fill,
            })
          )
          !FoglessHexKeys.includes(key) &&
            instructions.push(
              drawHex(getCorners(hex), {
                fill: baseHexConfig.fill,
                alpha: 0.7,
              })
            )
        } else {
          instructions.push(
            drawHex(getCorners(hex), {
              fill: baseHexConfig.fill,
            })
          )
        }

        isEqual(hex.coordinates(), currentCoords) &&
          instructions.push(drawCircle(hex.toPoint(), 0x000000))

        return (
          <Graphics
            key={key}
            draw={g => {
              g.clear()
              g.interactive = false
              instructions.forEach(fn => fn(g))
              addInteractors({ clickCallback })(g)
            }}
          />
        )
      })}
    </>
  )
}
