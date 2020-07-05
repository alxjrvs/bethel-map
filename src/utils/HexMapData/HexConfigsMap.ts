import { generateBaseHexConfigs } from "./generateBaseHexConfigs";
import {
  Water,
  RockyTerrain,
  Chasm,
  BorderOceans,
  Beaches,
  Forests,
  Tundra,
} from "./Terrain/terrain";
import { PointsOfInterest, RestStops, Shrines } from "./Locations/locations";

export const HexConfigsMap = {
  ...generateBaseHexConfigs(),
  ...Forests,
  ...RockyTerrain,
  ...Chasm,
  ...Tundra,
  ...Water,
  ...Beaches,
  ...BorderOceans,
  ...PointsOfInterest,
  ...Shrines,
  ...RestStops,
};
