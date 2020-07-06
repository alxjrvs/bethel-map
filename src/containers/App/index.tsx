import React, { useState, FC } from "react"
import { PointLike } from "honeycomb-grid"
import { HexStage } from "../HexStage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { isDev } from "../../utils/isDev"
import { Row, Col } from "react-bootstrap"
import { coordsToKey } from "../../utils/coordsToKey"

export const App: FC = () => {
  const [currentCoords, setCoords] = useState<PointLike>({ x: 9, y: 20 })
  return (
    <Router>
      <Switch>
        {isDev() && (
          <Route path="/sekret">
            <Row>
              <Col md="6">
                <HexStage
                  setCoords={setCoords}
                  currentCoords={currentCoords}
                  showAll={true}
                />
              </Col>
              <Col md="6">
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
            <Col md="6">
              <HexStage
                setCoords={setCoords}
                currentCoords={currentCoords}
                showAll={false}
              />
            </Col>
            <Col md="6">{coordsToKey(currentCoords)}</Col>
          </Row>
        </Route>
      </Switch>
    </Router>
  )
}
