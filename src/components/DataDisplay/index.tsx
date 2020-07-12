import React, { FC } from "react"
import { calcFogType } from "../../utils/calcFogType"
import { BaseHexConfig, Fog } from "../../types"
import { rawHexConfig } from "../../constants"
import styles from "./DataDisplay.module.scss"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"
import { Locations } from "../../Locations"
import { Terrain } from "../../Terrain"

const displayConfig = (coords: string, showAll = false): BaseHexConfig => {
  const terrainConfig = Terrain[coords]
  const locationConfig = Locations[coords]

  const fog = calcFogType(coords, showAll)
  switch (fog) {
    case Fog.hard:
      return rawHexConfig
    case Fog.soft:
      return terrainConfig
    default:
      return locationConfig || terrainConfig
  }
}

export const DataDisplay: FC = () => {
  const [, setCurrentCoords] = useCurrentCoordinates()
  const [highlightedCoords] = useHighlightedCoordinates()
  const showAll = useIsAdmin()

  const config = displayConfig(highlightedCoords, showAll)

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
