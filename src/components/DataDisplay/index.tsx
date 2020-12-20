import React, { FC, useMemo } from "react"

import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import styles from "./DataDisplay.module.scss"

import { Grid } from "honeycomb-grid"
import { HexConfig, Fog } from "../../types"

interface Props {
  mapData: Grid<HexConfig>
}

const displayDescription = (hex?: HexConfig) => {
  const unknownDescription = "What waits for you on the Isle of Beth'el?"
  if (!hex) return unknownDescription
  if (hex.fog === Fog.hard) return unknownDescription
  return hex.description
}

const displayName = (hex?: HexConfig) => {
  const unknownName = "Unknown"
  if (!hex) return unknownName
  if (hex.fog === Fog.hard) return unknownName
  return hex.name
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
      <h1>{displayName(currentHex)}</h1>
      <p>{displayDescription(currentHex)}</p>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
      <span className={styles.Coordinates}>{highlightedCoords}</span>
    </div>
  )
}
