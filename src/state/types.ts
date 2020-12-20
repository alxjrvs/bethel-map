import { Dispatch, SetStateAction } from "react"
import { Point } from "../types"

export type CoordinatesState = [Point, Dispatch<SetStateAction<Point>>]
