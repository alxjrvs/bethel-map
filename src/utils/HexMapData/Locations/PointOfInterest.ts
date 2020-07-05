import { PartialHexConfigLookup } from "../../../types"
import { assignHexList } from "../../assignHexList"
import { baseHexConfig } from "../../../constants"

export const PointOfInterestList: PartialHexConfigLookup[] = [
  ["11-20", {}],
  ["2-25", {}],
  ["4-16", {}],
  ["6-21", {}],
  ["7-15", {}],
  ["7-19", {}],
  ["9-22", {}],
  ["4-13", {}],
  ["12-22", {}],
  ["3-19", {}],
  ["1-21", {}],
]
export const PointsOfInterest = assignHexList(PointOfInterestList, {
  ...baseHexConfig,
  fill: 0x00ff04,
})
