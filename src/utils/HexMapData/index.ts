import { generateBaseHexConfigs } from "./generateBaseHexConfigs";
import { Terrain } from "../../Terrain";
import { Locations } from "../../Locations";

export const HexConfigsMap = {
  ...generateBaseHexConfigs(),
  ...Terrain,
  ...Locations,
};
