import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"
import { PlayerCurrentHex } from "../../PlayerDataLists"

export const App: FC = () => {
  const [currentCoords, setCurrentCoords] = useState(PlayerCurrentHex)
  const [highlightedCoords, setHighlightedCoords] = useState(PlayerCurrentHex)
  return (
    <div className={styles.Container}>
      <Router>
        <Switch>
          <Route path="*">
            <div className={styles.Presentation}>
              <HexStage
                {...{
                  currentCoords,
                  highlightedCoords,
                  setHighlightedCoords,
                }}
              />
            </div>
            <div className={styles.Presentation}>
              <DataDisplay
                {...{
                  setCurrentCoords,
                  highlightedCoords,
                }}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
