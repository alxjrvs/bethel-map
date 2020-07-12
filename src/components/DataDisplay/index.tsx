import React, { FC } from "react"
import { calcFogType } from "../../utils/calcFogType"
import { BaseHexConfig, Fog } from "../../types"
import { rawHexConfig } from "../../constants"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"
import { useMapDataContext, MapDataState } from "../../state/MapDataContext"
import styles from "./DataDisplay.module.scss"

const displayConfig = (
  coords: string,
  showAll: boolean,
  mapData: MapDataState
): BaseHexConfig => {
  const terrainConfig = mapData.terrain.all[coords]
  const locationConfig = mapData.locations.all[coords]

  const fog = calcFogType(coords, showAll, mapData)
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
  const mapData = useMapDataContext()
  const showAll = useIsAdmin()

  const config = displayConfig(highlightedCoords, showAll, mapData)

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
