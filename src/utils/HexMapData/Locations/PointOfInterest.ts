import { HexConfigKeyArray, Shape } from "../../../types"
import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"

export const PointOfInterestList: HexConfigKeyArray = [
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
export const PointsOfInterest = buildHexList(PointOfInterestList, {
  ...baseHexConfig,
  shape: Shape.circle,
  fill: 65284,
})
