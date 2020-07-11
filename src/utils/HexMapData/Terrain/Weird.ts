import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"
import { HexConfigKeyArray } from "../../../types"

export const WeirdList: HexConfigKeyArray = [
  "14-4",
  "13-4",
  "12-4",
  "13-5",
  "17-12",
  "18-11",
  "19-11",
  "19-12",
  "19-13",
  "20-26",
  "1-3",
  "1-2",
  "2-3",
  "2-2",
  "3-2",
  "4-1",
  "3-1",
  "18-13",
  "9-14",
  "18-12",
  "1-1",
  "2-1",
]

export const Weird = buildHexList(WeirdList, {
  ...baseHexConfig,
  fill: 16711935,
})
