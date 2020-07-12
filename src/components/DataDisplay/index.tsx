import React, { FC } from "react"
import { BaseHexConfigsMap, Terrain } from "../../HexMapData"
import { calcFogType } from "../../utils/calcFogType"
import { BaseHexConfig, Fog } from "../../types"
import { rawHexConfig } from "../../constants"
import styles from "./DataDisplay.module.scss"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

export const DataDisplay: FC = () => {
  const [, setCurrentCoords] = useCurrentCoordinates()
  const [highlightedCoords] = useHighlightedCoordinates()
  const showAll = useIsAdmin()
  const terrainConfig = Terrain[highlightedCoords]
  const baseHexConfig = BaseHexConfigsMap[highlightedCoords] || terrainConfig
  const fog = calcFogType(highlightedCoords, showAll)

  let config: BaseHexConfig
  switch (fog) {
    case Fog.hard:
      config = rawHexConfig
      break
    case Fog.soft:
      config = terrainConfig
      break
    case Fog.showFeature:
      config = baseHexConfig
      break
    case Fog.none:
      config = baseHexConfig
      break
  }

  return (
    <div>
      <h1>{config.name}</h1>
      <p>{config.description}</p>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
      <span className={styles.Coordinates}>{highlightedCoords}</span>
    </div>
  )
}
