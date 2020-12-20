import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

import { HighlightedCoordinatesContext } from "../../state/HighlightedCoordinatesContext"

import { PlayerCurrentHex } from "../../MapData/PlayerDataLists"

import { CurrentCoordinatesContext } from "../../state/CurrentCoordinatesContext"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { BaseGrid } from "../../constants"
import { coordsToKey } from "../../utils/coordsToKey"
import { defaultMapDataState } from "../../state/MapData"

import { calcFogType } from "../../utils/calcFogType"
import { getCorners } from "../../utils/getCorners"

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

const InnerRouter: FC = () => {
  const showAll = useIsAdmin()
  const mapData = BaseGrid.map(hex => {
    const key = coordsToKey(hex.coordinates())
    const terrainConfig = defaultMapDataState.terrain.all[key]
    const markerConfig = defaultMapDataState.locations.all[key]
    const fog = calcFogType(key, showAll, defaultMapDataState)

    return {
      ...terrainConfig,
      ...markerConfig,
      point: hex.toPoint(),
      key: coordsToKey(hex.coordinates()),
      corners: getCorners(hex),
      fog,
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
