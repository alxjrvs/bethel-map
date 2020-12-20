import { createContext, useContext } from "react"
import { CoordinatesState } from "./types"

export const CurrentCoordinatesContext = createContext<CoordinatesState>([
  { x: 0, y: 0 },
  () => ({}),
])

export const useCurrentCoordinates = (): CoordinatesState =>
  useContext(CurrentCoordinatesContext)
