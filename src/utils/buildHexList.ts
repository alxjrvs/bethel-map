import {
  BaseHexConfigKeyArray,
  BaseHexConfig,
  BaseHexConfigLookup,
} from "../types"

type BuildHexList = (
  keys: BaseHexConfigKeyArray,
  config: BaseHexConfig
) => BaseHexConfigLookup

export const buildHexList: BuildHexList = (keys, config) =>
  keys.reduce<BaseHexConfigLookup>((lookup, currentValue) => {
    if (typeof currentValue === "string") {
      return { ...lookup, [currentValue]: config }
    }
    return { ...lookup, [currentValue[0]]: { ...config, ...currentValue[1] } }
  }, {})
