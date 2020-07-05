import { assignHexList } from "../../assignHexList"
import {
  baseOceanHexConfig,
  xCoords,
  height,
  yCoords,
  width,
} from "../../../constants"
import { HexConfigLookup } from "../../../types"

export const generateBorderOceans = (): HexConfigLookup => {
  const borderOceanHexConfigs: HexConfigLookup = {}
  xCoords.forEach((x) => {
    borderOceanHexConfigs[`${x}-0`] = baseOceanHexConfig
    borderOceanHexConfigs[`${x}-${height - 1}`] = baseOceanHexConfig
  })
  yCoords.forEach((y) => {
    borderOceanHexConfigs[`0-${y}`] = baseOceanHexConfig
    borderOceanHexConfigs[`${width - 1}-${y}`] = baseOceanHexConfig
  })

  return borderOceanHexConfigs
}
export const BorderOceans = generateBorderOceans()
export const VisibleWaterList = ["1-25", "1-26", "3-26", "4-26", "7-26"]
export const WaterList = [
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

export const Water = assignHexList(WaterList, baseOceanHexConfig)
