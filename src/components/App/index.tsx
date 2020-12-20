import React, { useState, FC, useMemo } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

import { HighlightedCoordinatesContext } from "../../state/HighlightedCoordinatesContext"

import { PlayerCurrentHex } from "../../MapData/PlayerDataLists"

import {
  CurrentCoordinatesContext,
  useCurrentCoordinates,
} from "../../state/CurrentCoordinatesContext"
import { useIsAdmin } from "../../hooks/useIsAdmin"
import { BaseGrid, rawHexConfig } from "../../constants"
import { coordsToKey } from "../../utils/coordsToKey"
import { defaultMapDataState } from "../../state/MapData"
import { lightenNumeric } from "../../utils/numericColorUtils"
import { calcFogType } from "../../utils/calcFogType"
import { getCorners } from "../../utils/getCorners"
import { calcFogTranformation } from "../../utils/calcFogTransformation"
import { Shape } from "../../types"

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
  const [currentCoords] = useCurrentCoordinates()
  const mapData = BaseGrid.map(hex => {
    const key = coordsToKey(hex.coordinates())
    const baseHexConfig = defaultMapDataState.terrain.all[key]
    const markerConfig = defaultMapDataState.locations.all[key]
    const currentLineFill = lightenNumeric(rawHexConfig.fill, 0.2)
    const fog = calcFogType(key, showAll, defaultMapDataState)

    return {
      ...baseHexConfig,
      ...markerConfig,
      point: hex.toPoint(),
      key: coordsToKey(hex.coordinates()),
      corners: getCorners(hex),
      style: {
        lineWidth: currentCoords === key ? 3 : 1,
        lineFill:
          currentCoords === key ? currentLineFill : baseHexConfig.lineFill,
        fill:
          baseHexConfig.shape === Shape.hex
            ? calcFogTranformation(fog, baseHexConfig.fill)
            : baseHexConfig.fill,
      },
      fog,
    }
  })

  const currentHex = useMemo(
    () => mapData.find(({ key }) => key === currentCoords),
    [mapData, currentCoords]
  )
  return (
    <Route path="*">
      <div className={styles.Presentation}>
        <HexStage mapData={mapData} />
      </div>
      <div className={styles.Presentation}>
        <DataDisplay currentHex={currentHex} />
      </div>
    </Route>
  )
}
