import { PartialHexConfigLookup, HexConfig, HexConfigLookup } from "../types";

export const assignHexList = (
  keys: Array<string | PartialHexConfigLookup>,
  config: HexConfig
): HexConfigLookup =>
  keys.reduce<HexConfigLookup>((lookup, currentValue) => {
    if (typeof currentValue === "string") {
      return { ...lookup, [currentValue]: config };
    }
    return { ...lookup, [currentValue[0]]: { ...config, ...currentValue[1] } };
  }, {});
