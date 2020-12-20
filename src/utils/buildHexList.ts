import { HexConfigKeyArray, HexConfigLookup, HexConfig } from "../types"

type BuildHexList = (
  keys: HexConfigKeyArray,
  config: Partial<HexConfig>
) => HexConfigLookup

export const buildHexList: BuildHexList = (keys, config) =>
  keys.reduce<HexConfigLookup>((lookup, currentValue) => {
    if (typeof currentValue === "string") {
      return { ...lookup, [currentValue]: config }
    }
    return { ...lookup, [currentValue[0]]: { ...config, ...currentValue[1] } }
  }, {})
