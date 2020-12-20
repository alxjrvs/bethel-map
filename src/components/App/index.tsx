import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import flatten from "lodash/flatten"
import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

import { HighlightedCoordinatesContext } from "../../state/HighlightedCoordinatesContext"

import { PlayerCurrentHex } from "../../MapData/PlayerDataLists"

import { CurrentCoordinatesContext } from "../../state/CurrentCoordinatesContext"
import { useIsAdmin } from "../../hooks/useIsAdmin"

import { Fog, Marker, Terrain } from "../../types"
import { persistedMapData } from "../../state/persistedMapData"
import { findNearbyCoords } from "../../utils/findNearbyKeysFactory"
import { coordsToKey } from "../../utils/coordsToKey"

export const App: FC = () => {
  const currentCoordsState = useState(PlayerCurrentHex)
  const highlightedCoordsState = useState("")

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

const softHexes = persistedMapData
  .filter(({ visible, borderVisible }) => visible && !borderVisible)
  .map(findNearbyCoords)
const InnerRouter: FC = () => {
  const showAll = useIsAdmin()
  const mapData = persistedMapData.map(hex => {
    const calcFog = () => {
      if (showAll || hex.visible || hex.borderVisible) return Fog.none
      if (hex.showFeature) return Fog.showFeature
      if (flatten(softHexes).includes(coordsToKey(hex.coords))) return Fog.soft
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
