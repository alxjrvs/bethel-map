import React, { FC } from "react"

import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import styles from "./DataDisplay.module.scss"

import { NewHexConfig } from "../../types"

interface Props {
  currentHex?: NewHexConfig
}

export const DataDisplay: FC<Props> = ({ currentHex }) => {
  const [, setCurrentCoords] = useCurrentCoordinates()
  const [highlightedCoords] = useHighlightedCoordinates()

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
