import React, { FC, useMemo } from "react"

import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import styles from "./DataDisplay.module.scss"

import { Grid } from "honeycomb-grid"
import { HexConfig } from "../../types"

interface Props {
  mapData: Grid<HexConfig>
}

export const DataDisplay: FC<Props> = ({ mapData }) => {
  const [, setCurrentCoords] = useCurrentCoordinates()
  const [highlightedCoords] = useHighlightedCoordinates()

  const currentHex = useMemo(
    () => mapData.find(({ key }) => key === highlightedCoords),
    [highlightedCoords, mapData]
  )

  return (
    <div>
      <h1>{currentHex?.name || "UNKNOWN"}</h1>
      <p>{currentHex?.description || "UNKNOWN"}</p>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
      <span className={styles.Coordinates}>{highlightedCoords}</span>
    </div>
  )
}
