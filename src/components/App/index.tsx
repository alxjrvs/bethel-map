import React, { useState, FC } from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { isDev } from "../../utils/isDev"

import styles from "./App.module.scss"
import { HexStage } from "../HexStage"
import { DataDisplay } from "../DataDisplay"

export const App: FC = () => {
  const [currentCoords, setCurrentCoords] = useState("9-20")
  const [highlightedCoords, setHighlightedCoords] = useState("9-20")
  return (
    <div className={styles.Container}>
      <Router>
        <Switch>
          {isDev() && (
            <Route path="/sekret">
              {highlightedCoords}
              <HexStage
                {...{
                  currentCoords,
                  highlightedCoords,
                  setHighlightedCoords,
                }}
                showAll
              />
              <HexStage
                {...{
                  currentCoords,
                  highlightedCoords,
                  setHighlightedCoords,
                }}
                showAll={false}
              />
            </Route>
          )}

          <Route path="*">
            <div className={styles.Presentation}>
              <HexStage
                {...{
                  currentCoords,
                  highlightedCoords,
                  setHighlightedCoords,
                }}
                showAll={false}
              />
            </div>
            <div className={styles.Presentation}>
              <DataDisplay
                {...{ setCurrentCoords, highlightedCoords, currentCoords }}
              />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
