import { BaseHexConfigKeyArray, Shape } from "../types"
import { buildHexList } from "../utils/buildHexList"
import { rawHexConfig } from "../constants"
import { lightenNumeric } from "../utils/numericColorUtils"

export const RestStopList: BaseHexConfigKeyArray = [
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

const fill = 16711680
export const RestStops = buildHexList(RestStopList, {
  ...rawHexConfig,
  fill,
  lineFill: lightenNumeric(fill),
  shape: Shape.circle,
  name: "A Felled Tree",
  description: ["It seems to be leaking Sap."],
})
