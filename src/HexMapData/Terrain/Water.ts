import { buildHexList } from "../utils/buildHexList"
import { xCoords, height, yCoords, width, rawHexConfig } from "../../constants"
import {
  BaseHexConfigLookup,
  BaseHexConfigKeyArray,
  BaseHexConfig,
} from "../../types"

const baseOceanBaseHexConfig: BaseHexConfig = {
  ...rawHexConfig,
  fill: 255,
  lineFill: 0,
  description: ["Who knows what secrets the Water of Beth'El provides?"],
  name: "Deep Water",
}
export const generateBorderOceans = (): BaseHexConfigLookup => {
  const borderOceanBaseHexConfigs: BaseHexConfigLookup = {}
  xCoords.forEach(x => {
    borderOceanBaseHexConfigs[`${x}-0`] = baseOceanBaseHexConfig
    borderOceanBaseHexConfigs[`${x}-${height - 1}`] = baseOceanBaseHexConfig
  })
  yCoords.forEach(y => {
    borderOceanBaseHexConfigs[`0-${y}`] = baseOceanBaseHexConfig
    borderOceanBaseHexConfigs[`${width - 1}-${y}`] = baseOceanBaseHexConfig
  })

  return borderOceanBaseHexConfigs
}
export const BorderOceans = generateBorderOceans()
export const VisibleWaterList = [
  "1-25",
  "1-26",
  "3-26",
  "4-26",
  "7-26",
  "6-26",
  ...Object.keys(BorderOceans),
]
export const WaterList: BaseHexConfigKeyArray = [
  ...Object.keys(BorderOceans),
  ...VisibleWaterList,
  "1-16",
  "1-14",
  "1-15",
  "2-15",
  "1-17",
  "1-13",
  "20-21",
  "15-8",
  "16-8",
  "17-9",
  "16-23",
  "15-24",
  "19-20",
  "10-4",
  "10-5",
  "9-4",
  "10-3",
  "9-2",
  "9-1",
  "20-22",
  "16-22",
  "20-6",
  "12-26",
  "20-1",
  "20-2",
  "14-26",
  "6-26",
  "19-1",
  "20-20",
  "14-22",
  "11-20",
  "12-20",
  "13-20",
  "8-26",
  "9-26",
  "10-26",
  "11-26",
  "9-25",
  "10-25",
  "14-24",
  "11-22",
  "11-18",
  "11-18",
  "12-18",
  "13-18",
  "13-17",
  "14-17",
  "14-16",
  "15-15",
  "15-14",
  "15-13",
  "15-12",
  "15-11",
  "15-10",
  "16-9",
  "11-19",
  "12-19",
  "13-19",
  "14-19",
  "11-21",
  "12-21",
  "13-21",
  "14-21",
  "14-20",
  "13-22",
  "15-21",
  "10-20",
  "14-23",
  "15-23",
  "15-22",
  "16-21",
  "15-20",
  "15-19",
  "12-22",
]

export const Water = buildHexList(WaterList, baseOceanBaseHexConfig)
