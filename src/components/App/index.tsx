import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import isEqual from "lodash/isEqual"

import flatten from "lodash/flatten"
import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

import { HighlightedCoordinatesContext } from "../../state/HighlightedCoordinatesContext"

import { CurrentCoordinatesContext } from "../../state/CurrentCoordinatesContext"
import { useIsAdmin } from "../../hooks/useIsAdmin"

import { Fog, Marker, Terrain } from "../../types"
import { persistedMapData } from "../../state/persistedMapData"
import { findNearbyCoords } from "../../utils/findNearbyCoords"

import { persistedPlayerData } from "../../state/persistedPlayerData"

export const App: FC = () => {
  const currentCoordsState = useState(persistedPlayerData.current)
  const highlightedCoordsState = useState(persistedPlayerData.current)

  return (
    <CurrentCoordinatesContext.Provider value={currentCoordsState}>
      <HighlightedCoordinatesContext.Provider value={highlightedCoordsState}>
        <div className={styles.Container}>
          <Router>
            <Switch>
              <InnerRouter />
            </Switch>
          </Router>
        </div>
      </HighlightedCoordinatesContext.Provider>
    </CurrentCoordinatesContext.Provider>
  )
}

const softHexes = flatten(
  persistedMapData
    .filter(({ visible, borderVisible }) => visible && !borderVisible)
    .map(findNearbyCoords)
)

const InnerRouter: FC = () => {
  const showAll = useIsAdmin()
  const mapData = persistedMapData.map(hex => {
    const calcFog = () => {
      if (
        showAll ||
        hex.visible ||
        hex.borderVisible ||
        persistedPlayerData.visited.includes(hex.coords)
      )
        return Fog.none
      if (hex.showFeature) return Fog.showFeature
      if (softHexes.find(coords => isEqual(hex.coords, coords))) return Fog.soft
      return Fog.hard
    }

    return {
      ...hex,
      terrain: hex.terrain as Terrain,
      marker: hex.marker ? (hex.marker as Marker) : undefined,
      fog: calcFog(),
    }
  })

  return (
    <Route path="*">
      <div className={styles.Presentation}>
        <HexStage mapData={mapData} />
      </div>
      <div className={styles.Presentation}>
        <DataDisplay mapData={mapData} />
      </div>
    </Route>
  )
}
