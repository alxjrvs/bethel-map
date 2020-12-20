import { buildHexList } from "../../utils/buildHexList"
import { HexConfigKeyArray, Terrain } from "../../types"

export const ForestList: HexConfigKeyArray = [
  "1-18",
  "1-19",
  "1-21",
  "1-22",
  "1-23",
  "1-24",
  "2-17",
  "5-16",
  "2-21",
  "2-22",
  "2-23",
  "2-24",
  "2-25",
  "2-18",
  "3-18",
  "4-18",
  "5-18",
  "14-1",
  "8-7",
  "9-7",
  "10-7",
  "11-7",
  "11-6",
  "12-5",
  "11-4",
  "11-3",
  "12-3",
  "12-2",
  "13-2",
  "15-1",
  "10-2",
  "10-1",
  "8-1",
  "8-2",
  "9-3",
  "8-4",
  "9-5",
  "9-6",
  "10-6",
  "11-5",
  "7-1",
  "8-3",
  "7-2",
  "8-5",
  "8-6",
  "7-6",
  "7-4",
  "3-17",
  "3-21",
  "3-22",
  "3-23",
  "18-24",
  "19-24",
  "20-25",
  "19-26",
  "18-26",
  "18-25",
  "20-24",
  "17-26",
  "13-8",
  "13-9",
  "14-9",
  "14-10",
  "13-10",
  "14-11",
  "14-12",
  "13-12",
  "13-13",
  "14-13",
  "14-14",
  "13-14",
  "12-14",
  "12-15",
  "13-15",
  "14-15",
  "13-16",
  "12-16",
  "11-16",
  "12-17",
  "3-24",
  "4-17",
  "4-21",
  "4-22",
  "4-23",
  "4-24",
  "4-25",
  "5-17",
  "5-21",
  "5-22",
  "5-23",
  "5-24",
  "6-17",
  "6-18",
  "6-20",
  "6-21",
  "6-22",
  "6-23",
  "7-21",
  "2-19",
  "3-19",
  "4-19",
  "5-19",
  "6-19",
  "1-20",
  "19-25",
  "14-18",
  "15-17",
  "15-16",
  "16-15",
  "16-14",
  "17-15",
  "16-16",
  "16-13",
  "2-20",
  "3-20",
  "4-20",
  "5-20",
  "3-25",
  "2-26",
]

export const Forest = buildHexList(ForestList, {
  terrain: Terrain.Forest,
  name: "Forest",
  description: ["A Dense forest of thick trees"],
})
