import { HexConfigKeyArray } from "../../../types"
import { buildHexList } from "../../buildHexList"
import { baseHexConfig } from "../../../constants"

export const ShrinesList: HexConfigKeyArray = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  ["10-11", {}],
  ["12-20", {}],
  ["3-25", {}],
]

export const Shrines = buildHexList(ShrinesList, {
  ...baseHexConfig,
  fill: 0xf5ee9d,
  lineWidth: 3,
})
