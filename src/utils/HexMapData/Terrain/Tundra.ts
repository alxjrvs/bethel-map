import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"
import { HexConfigKeyArray } from "../../../types"

export const TundraList: HexConfigKeyArray = [
  "14-7",
  "15-7",
  "13-6",
  "14-8",
  "15-9",
  "14-6",
  "16-7",
  "17-7",
  "16-6",
  "18-9",
  "18-8",
  "15-2",
  "16-1",
  "16-2",
  "14-2",
  "18-7",
  "19-6",
  "18-6",
  "17-6",
  "18-5",
  "17-4",
  "18-4",
  "18-3",
  "17-3",
  "13-26",
  "1-12",
  "3-11",
  "1-10",
  "16-4",
  "17-5",
  "16-3",
  "15-3",
  "15-3",
  "14-3",
  "15-4",
  "15-5",
  "14-5",
  "13-3",
  "19-5",
  "19-7",
  "17-8",
  "1-11",
  "2-11",
  "16-5",
  "15-6",
]

export const Tundra = buildHexList(TundraList, {
  ...baseHexConfig,
  fill: 15856363,
})
