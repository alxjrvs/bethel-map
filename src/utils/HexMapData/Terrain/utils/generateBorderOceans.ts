import { HexConfigLookup } from "../../../../types"
import {
  xCoords,
  baseOceanHexConfig,
  height,
  yCoords,
  width,
} from "../../../../constants"

export const generateBorderOceans = (): HexConfigLookup => {
  const borderOceanHexConfigs: HexConfigLookup = {}
  xCoords.forEach((x) => {
    borderOceanHexConfigs[`${x}-0`] = baseOceanHexConfig
    borderOceanHexConfigs[`${x}-${height - 1}`] = baseOceanHexConfig
  })
  yCoords.forEach((y) => {
    borderOceanHexConfigs[`0-${y}`] = baseOceanHexConfig
    borderOceanHexConfigs[`${width - 1}-${y}`] = baseOceanHexConfig
  })

  console.log("WTF")

  return borderOceanHexConfigs
}
