import React, { FC, Dispatch, SetStateAction } from "react"
import { BaseHexConfigsMap, Terrain } from "../../utils/HexMapData"
import { calcFogType } from "../../utils/calcFogType"
import { BaseHexConfig, Fog } from "../../types"
import { baseBaseHexConfig } from "../../constants"

type DataDisplayProps = {
  setCurrentCoords: Dispatch<SetStateAction<string>>
  highlightedCoords: string
}
export const DataDisplay: FC<DataDisplayProps> = ({
  setCurrentCoords,
  highlightedCoords,
}) => {
  const BaseHexConfig = BaseHexConfigsMap[highlightedCoords]
  const terrainConfig = Terrain[highlightedCoords]
  const fog = calcFogType(highlightedCoords)
  let config: BaseHexConfig

  switch (fog) {
    case Fog.hard:
      config = baseBaseHexConfig
      break
    case Fog.soft:
      config = terrainConfig
      break
    case Fog.none:
      config = BaseHexConfig
      break
  }
  return (
    <div>
      <h1>{config.name}</h1>
      <p>{config.description}</p>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
      <h3>{highlightedCoords}</h3>
    </div>
  )
}
