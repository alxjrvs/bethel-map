import { HexConfigKeyArray } from "../../../types"
import { buildHexList } from "../utils/buildHexList"
import { baseHexConfig } from "../../../constants"

export const RestStopList: HexConfigKeyArray = [
  ["10-10", {}],
  ["13-20", {}],
  ["15-6", {}],
  ["18-12", {}],
  ["19-26", {}],
  ["2-1", {}],
  [
    "2-26",
    {
      name: "The Fallen Tree Encampment",
      description: [
        "An established camp and rest site on the isle of Beth'el.",
        "Home to a felled tree, whose bright orange sap heals travelers to the island.",
        "The party first camped here after their arrival.",
      ],
    },
  ],
  ["1-11", {}],
]

export const RestStops = buildHexList(RestStopList, {
  ...baseHexConfig,
  fill: 0xff0000,
})
