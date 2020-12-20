import { HexConfigKeyArray, Marker } from "../../types"
import { buildHexList } from "../../utils/buildHexList"

export const PointOfInterestList: HexConfigKeyArray = [
  [
    "11-20",
    {
      name: "The Clam",
      description: [
        "A Giant, eldritch clam waits at the bottom of a whirlpool.",
      ],
    },
  ],
  [
    "2-25",
    {
      name: "Mursha's",
      description: [
        "A tavern run and operated by the divine Orc Bartender, Mursha",
      ],
    },
  ],
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
  [
    "7-14",
    {
      name: "Observation Post",
      description: [
        "The Sunny-side have been using this to investigate a strange new phenomena in the great rift.",
      ],
    },
  ],
  [
    "7-19",
    {
      name: "Stonework Graveyard",
      description: ["A graveyard made of stone"],
    },
  ],
  ["9-22", {}],
  [
    "4-13",
    {
      name: "A Rugged Sinner",
      description: [
        "Fenrik knows very little about this, but believes it may help you get to the western tomb.",
      ],
    },
  ],
  ["12-22", {}],
  ["3-19", {}],
  ["1-21", {}],
  ["6-25", {}],
  [
    "5-16",
    {
      name: "The Infinite Hive",
      description: ["A bizarre, non-euclidean maze full of sentient squirrels"],
    },
  ],
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
  marker: Marker.PointOfInterest,
})
