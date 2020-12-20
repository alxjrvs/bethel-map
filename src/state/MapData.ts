import {
  PlayerCurrentHex,
  PlayerVisitedHexes,
} from "../MapData/PlayerDataLists"
import {
  RockyTerrain,
  Chasm,
  Lava,
  Tundra,
  Water,
  Weird,
  Forest,
  Sand,
  VisibleWaterList,
  BorderOceans,
} from "../MapData/Terrain"
import {
  PointsOfInterest,
  RestStops,
  Towers,
  Tombs,
} from "../MapData/Locations"
import { findNearbyKeysFactory } from "../utils/findNearbyKeysFactory"
import { HexConfigLookup } from "../types"

export type MapDataState = {
  players: {
    current: string
    visited: string[]
    visible: string[]
  }
  terrain: {
    borderOceans: HexConfigLookup
    chasm: HexConfigLookup
    forest: HexConfigLookup
    lava: HexConfigLookup
    rockyTerrain: HexConfigLookup
    sand: HexConfigLookup
    tundra: HexConfigLookup
    water: HexConfigLookup
    weird: HexConfigLookup
    all: HexConfigLookup
  }
  meta: {
    showFeature: string[]
    visibleWater: string[]
    fogless: string[]
  }
  locations: {
    pointOfInterest: HexConfigLookup
    restStop: HexConfigLookup
    tomb: HexConfigLookup
    towers: HexConfigLookup
    all: HexConfigLookup
  }
}

export const defaultMapDataState: MapDataState = {
  players: {
    current: PlayerCurrentHex,
    visible: [
      ...VisibleWaterList,
      ...Object.keys(BorderOceans),
      ...Object.keys(Tombs),
      ...PlayerVisitedHexes.flatMap(findNearbyKeysFactory(Object.keys(Towers))),
    ],
    visited: PlayerVisitedHexes,
  },
  locations: {
    pointOfInterest: PointsOfInterest,
    restStop: RestStops,
    tomb: Tombs,
    towers: Towers,
    all: { ...PointsOfInterest, ...RestStops, ...Tombs, ...Towers },
  },
  meta: {
    showFeature: [...Object.keys(Tombs)],
    visibleWater: VisibleWaterList,
    fogless: [...PlayerVisitedHexes, ...VisibleWaterList],
  },
  terrain: {
    borderOceans: BorderOceans,
    chasm: Chasm,
    forest: Forest,
    lava: Lava,
    rockyTerrain: RockyTerrain,
    sand: Sand,
    tundra: Tundra,
    water: Water,
    weird: Weird,
    all: {
      ...BorderOceans,
      ...Chasm,
      ...Forest,
      ...Lava,
      ...RockyTerrain,
      ...Sand,
      ...Tundra,
      ...Water,
      ...Weird,
    },
  },
}
