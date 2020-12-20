import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions, HexStyleData, Terrain } from "../types"

type DrawHex = (corners: Point[], terrain?: Terrain) => DrawInstructions
type PaintHex = (
  g: Graphics,
  corners: Point[],
  style: Partial<HexStyleData>
) => void

export const paintHex: PaintHex = (
  g,
  [firstCorner, ...otherCorners],
  { lineWidth = 1, lineFill = 0, fill }
) => {
  g.zIndex = lineWidth
  g.lineStyle(lineWidth, lineFill || 0)
  g.beginFill(fill)

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}

export const drawTerrain: DrawHex = (corners, terrain) => (g: Graphics) => {
  switch (terrain) {
    case Terrain.Lava:
      paintHex(g, corners, { fill: 16751872 })
      break
    case Terrain.Forest:
      paintHex(g, corners, { fill: 957963 })
      break
    case Terrain.Chasm:
      paintHex(g, corners, { fill: 3683112 })
      break
    case Terrain.RockyTerrain:
      paintHex(g, corners, { fill: 11370576 })
      break
    case Terrain.Sand:
      paintHex(g, corners, { fill: 15726519 })
      break
    case Terrain.Tundra:
      paintHex(g, corners, { fill: 15856363 })
      break
    case Terrain.Water:
      paintHex(g, corners, { fill: 255, lineFill: 0 })
      break
    case Terrain.Weird:
      paintHex(g, corners, { fill: 16711935 })
      break
    default:
      paintHex(g, corners, { lineFill: 0, fill: 11252410 })
      break
  }
}
