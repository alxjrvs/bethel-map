import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"
import { HexConfigKeyArray } from "../../../types"

export const TowersList: HexConfigKeyArray = [
  "3-23",
  "17-8",
  "9-10",
  "15-23",
  "14-14",
  "3-11",
  "3-4",
]

export const Towers = buildHexList(TowersList, {
  ...baseHexConfig,
  fill: 11403519,
})
