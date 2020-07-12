import { BaseHexConfigKeyArray, Shape } from "../../../types"
import { buildHexList } from "../utils/buildHexList"
import { rawHexConfig } from "../../../constants"

export const PointOfInterestList: BaseHexConfigKeyArray = [
  ["11-20", {}],
  [
    "2-25",
    {
      name: "Mursha's",
      description: [
        "A tavern run and operated by the divine Orc Bartender, Mursha",
      ],
    },
  ],
  ["4-16", {}],
  [
    "6-21",
    {
      name: "Curious Sculpture",
      description: [
        "A curious sculpture depicts two large stone constructs at a forge.  ",
        "It seems to have a place for a large stone orb.",
      ],
    },
  ],
  ["7-15", {}],
  ["7-19", {}],
  ["9-22", {}],
  ["4-13", {}],
  ["12-22", {}],
  ["3-19", {}],
  ["1-21", {}],
  ["6-25", {}],
  [
    "1-24",
    {
      name: "Beirut's Flock",
      description: [
        "The Party-loving former host of divine assistants of Beirut call this place home.",
      ],
    },
  ],
  [
    "2-24",
    {
      name: "Dude's Cage",
      description: [
        "Dude, the Kenku, transforms into a demonic beast when let out of his cage.",
      ],
    },
  ],
]
export const PointsOfInterest = buildHexList(PointOfInterestList, {
  ...rawHexConfig,
  shape: Shape.bang,
  fill: 16711680,
})
