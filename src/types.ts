import { Dispatch, SetStateAction } from "react"

import { PointLike } from "honeycomb-grid"

export type HexConfig = {
  fill: number
  lineFill: number
  lineWidth?: number
}

export type HexConfigLookup = { [key: string]: HexConfig }
type DetailedHexConfigKey = [string, Partial<HexConfig>]
export type HexConfigKeyArray = Array<string | DetailedHexConfigKey>

export type HexGridProps = {
  setCoords: Dispatch<SetStateAction<PointLike>>
  currentCoords: PointLike
  showAll: boolean
}
