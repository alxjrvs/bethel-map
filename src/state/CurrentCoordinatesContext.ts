import { createContext, useContext } from "react"
import { CoordinatesState } from "./types"

export const CurrentCoordinatesContext = createContext<CoordinatesState>([
  "",
  () => ({}),
])

export const useCurrentCoordinates = (): CoordinatesState =>
  useContext(CurrentCoordinatesContext)
