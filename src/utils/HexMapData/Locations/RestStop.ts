import { HexConfigKeyArray } from "../../../types"
import { buildHexList } from "../../buildHexList"
import { baseHexConfig } from "../../../constants"

export const RestStopList: HexConfigKeyArray = [
  ["10-10", {}],
  ["13-20", {}],
  ["15-6", {}],
  ["18-12", {}],
  ["19-26", {}],
  ["2-1", {}],
  ["2-26", {}],
  ["1-11", {}],
]

export const RestStops = buildHexList(RestStopList, {
  ...baseHexConfig,
  fill: 0xff0000,
})
