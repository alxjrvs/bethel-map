import { buildHexList } from "../utils/buildHexList"
import { rawHexConfig } from "../../../constants"
import { BaseHexConfigKeyArray, Shape } from "../../../types"

export const TowersList: BaseHexConfigKeyArray = [
  "3-23",
  "17-8",
  "9-10",
  "15-23",
  "14-14",
  "3-11",
  "3-4",
]

export const Towers = buildHexList(TowersList, {
  ...rawHexConfig,
  shape: Shape.tower,
  fill: 11403519,
  name: "Observation Tower",
  description: [
    "This tower reaches high above the terrain, allowing you to see a greater distance away.",
  ],
})
