import React, { useState, FC } from "react"
import { PointLike } from "honeycomb-grid"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { isDev } from "../../utils/isDev"

import { coordsToKey } from "../../utils/coordsToKey"
import styles from "./App.module.scss"
import { HexStage } from "../HexStage"

export const App: FC = () => {
  const [currentCoords] = useState<PointLike>({ x: 9, y: 20 })
  const [highlightedCoords, setHighlightedCoords] = useState<PointLike>({
    x: 9,
    y: 20,
  })
  const highlightedKey = coordsToKey(highlightedCoords)
  return (
    <div className={styles.Container}>
      <Router>
        <Switch>
          {isDev() && (
            <Route path="/sekret">
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
            <div className={styles.Presentation}>{highlightedKey}</div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
