import { BaseHexConfigLookup } from "../types"
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

export type MapDataState = {
  players: {
    current: string
    visited: string[]
    visible: string[]
  }
  terrain: {
    borderOceans: BaseHexConfigLookup
    chasm: BaseHexConfigLookup
    forest: BaseHexConfigLookup
    lava: BaseHexConfigLookup
    rockyTerrain: BaseHexConfigLookup
    sand: BaseHexConfigLookup
    tundra: BaseHexConfigLookup
    water: BaseHexConfigLookup
    weird: BaseHexConfigLookup
    all: BaseHexConfigLookup
  }
  meta: {
    showFeature: string[]
    visibleWater: string[]
    fogless: string[]
  }
  locations: {
    pointOfInterest: BaseHexConfigLookup
    restStop: BaseHexConfigLookup
    tomb: BaseHexConfigLookup
    towers: BaseHexConfigLookup
    all: BaseHexConfigLookup
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
