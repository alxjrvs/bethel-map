import { assignHexList } from "../../assignHexList"
import { baseHexConfig } from "../../../constants"

export const ChasmList = [
  "1-9",
  "10-13",
  "10-15",
  "10-17",
  "10-19",
  "10-21",
  "10-22",
  "11-23",
  "11-24",
  "11-8",
  "11-9",
  "12-23",
  "12-24",
  "12-25",
  "12-6",
  "12-7",
  "13-23",
  "13-24",
  "13-25",
  "14-25",
  "2-10",
  "2-13",
  "2-9",
  "3-10",
  "3-12",
  "4-11",
  "2-12",
  "10-14",
  "11-13",
  "11-12",
  "12-11",
  "11-10",
  "10-9",
  "9-9",
  "8-10",
  "8-9",
  "8-8",
  "9-8",
  "10-8",
  "9-17",
  "5-11",
  "6-11",
  "7-11",
  "7-24",
  "7-25",
  "8-11",
  "8-22",
  "8-23",
  "9-14",
  "9-16",
  "9-18",
  "9-20",
  "9-21",
  "4-12",
  "5-12",
  "6-12",
  "7-12",
  "8-12",
  "8-13",
  "9-13",
  "8-14",
  "9-15",
]

export const Chasm = assignHexList(ChasmList, {
  ...baseHexConfig,
  fill: 0x383328,
})
