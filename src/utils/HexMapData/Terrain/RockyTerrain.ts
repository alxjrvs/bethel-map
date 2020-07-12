import { buildHexList } from "../utils/buildHexList"
import { baseBaseHexConfig } from "../../../constants"
import { BaseHexConfigKeyArray } from "../../../types"

export const RockyTerrainList: BaseHexConfigKeyArray = [
  "5-25",
  "5-26",
  "6-25",
  "8-21",
  "7-20",
  "7-22",
  "7-23",
  "6-24",
  "8-20",
  "9-10",
  "9-11",
  "9-12",
  "10-12",
  "11-11",
  "8-19",
  "9-19",
  "7-18",
  "18-1",
  "17-2",
  "17-1",
  "7-19",
  "7-17",
  "8-17",
  "8-18",
  "5-16",
  "6-16",
  "7-16",
  "8-16",
  "10-18",
  "11-17",
  "10-16",
  "11-15",
  "3-15",
  "4-15",
  "5-15",
  "6-15",
  "7-15",
  "8-15",
  "2-14",
  "3-14",
  "4-14",
  "5-14",
  "6-14",
  "7-14",
  "3-13",
  "4-13",
  "5-13",
  "6-13",
  "7-13",
  "17-14",
  "18-15",
  "19-15",
  "18-14",
  "19-14",
  "20-15",
  "20-14",
  "20-13",
  "20-12",
  "20-11",
  "19-10",
  "18-10",
  "17-10",
  "16-10",
  "16-11",
  "16-12",
  "17-11",
  "17-13",
  "11-14",
  "12-13",
  "12-12",
  "13-11",
  "12-10",
  "12-9",
  "12-8",
  "13-7",
  "19-9",
  "20-9",
  "19-8",
  "20-8",
  "20-7",
  "20-5",
  "6-10",
  "7-10",
  "7-9",
  "7-8",
  "5-8",
  "6-8",
  "6-9",
  "6-7",
  "7-7",
  "6-6",
  "5-6",
  "6-5",
  "7-5",
  "6-4",
  "7-3",
  "6-3",
  "6-2",
  "5-2",
  "6-1",
  "5-1",
  "4-2",
  "4-3",
  "3-4",
  "3-3",
  "2-4",
  "1-4",
  "3-6",
  "3-7",
  "2-8",
  "4-7",
  "3-8",
  "3-8",
  "3-9",
  "20-4",
  "19-4",
  "19-3",
  "20-3",
  "18-2",
  "19-2",
  "20-10",
  "10-10",
  "10-11",
]

export const RockyTerrain = buildHexList(RockyTerrainList, {
  ...baseBaseHexConfig,
  fill: 11370576,
  name: "Dry and Rocky",
  description: ["This area is humid and dry, with sparse plant life."],
})
