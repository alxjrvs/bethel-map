import { BaseHexConfigKeyArray } from "../../../types"
import { buildHexList } from "../utils/buildHexList"
import { baseBaseHexConfig } from "../../../constants"

export const TombsList: BaseHexConfigKeyArray = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  ["10-11", {}],
  ["12-20", {}],
  [
    "3-25",
    {
      name: "Tomb of Beirut",
      description: ["Final resting place of Beirut, also known as Bier'Pohn."],
    },
  ],
]

export const Tombs = buildHexList(TombsList, {
  ...baseBaseHexConfig,
  fill: 16117405,
  name: "A Fallen God's Tomb.",
})
