import { HexConfigKeyArray } from "../../../types"
import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"

export const TombsList: HexConfigKeyArray = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  ["10-11", {}],
  ["12-20", {}],
  ["3-25", {}],
]

export const Tombs = buildHexList(TombsList, {
  ...baseHexConfig,
  fill: 0xf5ee9d,
  lineWidth: 3,
})
