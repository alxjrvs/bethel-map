import { BaseHexConfigKeyArray, Shape } from "../../types"
import { buildHexList } from "../utils/buildHexList"
import { rawHexConfig } from "../../constants"

export const TombsList: BaseHexConfigKeyArray = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  [
    "10-11",
    {
      name: "The Dying God",
      description: ["According to the natives, a God lays here dying."],
    },
  ],
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
  ...rawHexConfig,
  fill: 16117405,
  name: "A Fallen God's Tomb",
  shape: Shape.circle,
  lineWidth: 6,
})
