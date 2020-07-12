import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

import { HighlightedCoordinatesContext } from "../../state/HighlightedCoordinatesContext"
import { MapDataContext, defaultMapDataState } from "../../state/MapDataContext"
import { PlayerCurrentHex } from "../../MapData/PlayerDataLists"

import { CurrentCoordinatesContext } from "../../state/CurrentCoordinatesContext"

export const App: FC = () => {
  const currentCoordsState = useState(PlayerCurrentHex)
  const highlightedCoordsState = useState("")
  const [mapData] = useState(defaultMapDataState)
  return (
    <MapDataContext.Provider value={mapData}>
      <CurrentCoordinatesContext.Provider value={currentCoordsState}>
        <HighlightedCoordinatesContext.Provider value={highlightedCoordsState}>
          <div className={styles.Container}>
            <Router>
              <Switch>
                <Route path="*">
                  <div className={styles.Presentation}>
                    <HexStage />
                  </div>
                  <div className={styles.Presentation}>
                    <DataDisplay />
                  </div>
                </Route>
              </Switch>
            </Router>
          </div>
        </HighlightedCoordinatesContext.Provider>
      </CurrentCoordinatesContext.Provider>
    </MapDataContext.Provider>
  )
}
