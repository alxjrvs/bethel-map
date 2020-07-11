import React, { useState, FC } from "react"
import { PointLike } from "honeycomb-grid"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { isDev } from "../../utils/isDev"
import { Row, Col } from "react-bootstrap"
import { coordsToKey } from "../../utils/coordsToKey"
import styles from "./App.module.scss"
import { HexStage } from "../HexStage"

export const App: FC = () => {
  const [currentCoords, setCoords] = useState<PointLike>({ x: 9, y: 20 })
  const key = coordsToKey(currentCoords)
  return (
    <div className={styles.Container}>
      <Router>
        <Switch>
          {isDev() && (
            <Route path="/sekret">
              <Row>
                <Col lg="6">
                  <HexStage
                    setCoords={setCoords}
                    currentCoords={currentCoords}
                    showAll
                  />
                </Col>
                <Col lg="6">
                  <HexStage
                    setCoords={setCoords}
                    currentCoords={currentCoords}
                    showAll={false}
                  />
                </Col>
              </Row>
            </Route>
          )}

          <Route path="*">
            <Row>
              <Col style={{ background: "red" }} lg="6">
                <HexStage
                  setCoords={setCoords}
                  currentCoords={currentCoords}
                  showAll={false}
                />
              </Col>
              <Col lg="6">{key}</Col>
            </Row>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
