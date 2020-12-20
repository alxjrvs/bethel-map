import { createContext, useContext } from "react"
import { CoordinatesState } from "./types"

export const HighlightedCoordinatesContext = createContext<CoordinatesState>([
  { x: 0, y: 0 },
  () => ({}),
])

export const useHighlightedCoordinates = (): CoordinatesState =>
  useContext(HighlightedCoordinatesContext)
