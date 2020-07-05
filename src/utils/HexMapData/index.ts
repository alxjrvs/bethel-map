import { generateBaseHexConfigs } from "./generateBaseHexConfigs";
import {
  Forests,
  RockyTerrain,
  Chasm,
  Tundra,
  Water,
  Beaches,
  BorderOceans,
} from "../../Terrain";
import { PointsOfInterest, Shrines, RestStops, Towers } from "../../Locations";

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
  ...Towers,
};
