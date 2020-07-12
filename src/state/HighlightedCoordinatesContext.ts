import { createContext, useContext } from "react"
import { CoordinatesState } from "./types"

export const HighlightedCoordinatesContext = createContext<CoordinatesState>([
  "",
  () => ({}),
])

export const useHighlightedCoordinates = (): CoordinatesState =>
  useContext(HighlightedCoordinatesContext)
