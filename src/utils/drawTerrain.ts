import { Graphics } from "pixi.js"
import { Point } from "honeycomb-grid"
import { DrawInstructions, HexStyleData, Terrain, Fog } from "../types"
import { darkenNumeric } from "./numericColorUtils"

type DrawHex = (
  corners: Point[],
  terrain: Terrain,
  fog: Fog
) => DrawInstructions
type PaintHex = (
  g: Graphics,
  corners: Point[],
  style: Partial<HexStyleData>,
  fog: Fog
) => void

enum Fill {
  fog = 11252410,
  lava = 16751872,
  forest = 957963,
  chasm = 3683112,
  rockyTerrain = 11370576,
  sand = 15726519,
  tundra = 15856363,
  water = 255,
  weird = 16711935,
}

export const paintHex: PaintHex = (
  g,
  [firstCorner, ...otherCorners],
  { lineWidth = 1, lineFill = 0, fill = Fill.fog },
  fog
) => {
  g.zIndex = lineWidth
  g.lineStyle(lineWidth, lineFill || 0)
  if (fog === Fog.hard || fog === Fog.showFeature) {
    g.beginFill(Fill.fog)
  } else if (fog === Fog.soft) {
    g.beginFill(darkenNumeric(fill, 0.6))
  } else {
    g.beginFill(fill)
  }

  g.moveTo(firstCorner.x, firstCorner.y)
  otherCorners.forEach(({ x, y }) => g.lineTo(x, y))
  g.lineTo(firstCorner.x, firstCorner.y)
  g.endFill()
}

export const drawTerrain: DrawHex = (corners, terrain, fog) => (
  g: Graphics
) => {
  switch (terrain) {
    case Terrain.Lava:
      paintHex(g, corners, { fill: Fill.lava }, fog)
      break
    case Terrain.Forest:
      paintHex(g, corners, { fill: Fill.forest }, fog)
      break
    case Terrain.Chasm:
      paintHex(g, corners, { fill: Fill.chasm }, fog)
      break
    case Terrain.RockyTerrain:
      paintHex(g, corners, { fill: Fill.rockyTerrain }, fog)
      break
    case Terrain.Sand:
      paintHex(g, corners, { fill: Fill.sand }, fog)
      break
    case Terrain.Tundra:
      paintHex(g, corners, { fill: Fill.tundra }, fog)
      break
    case Terrain.Water:
      paintHex(g, corners, { fill: Fill.water, lineFill: 0 }, fog)
      break
    case Terrain.Weird:
      paintHex(g, corners, { fill: Fill.weird }, fog)
      break
  }
}
