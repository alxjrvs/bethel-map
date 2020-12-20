import React, { FC, useMemo } from "react"
import isEqual from "lodash/isEqual"

import { useCurrentCoordinates } from "../../state/CurrentCoordinatesContext"
import { useHighlightedCoordinates } from "../../state/HighlightedCoordinatesContext"

import styles from "./DataDisplay.module.scss"

import { HexConfig, Fog, Terrain } from "../../types"
import { coordsToPoint } from "../../utils/coordsToKey"

interface Props {
  mapData: HexConfig[]
}

const unknownDescription = "What waits for you on the Isle of Beth'el?"
const unknownName = "Unknown"

const terrainData = ({ terrain }: HexConfig) => {
  switch (terrain) {
    case Terrain.Lava:
      return {
        name: "Bubbling Lava",
        description:
          "Molten earth bubbles with heat on the ground, igniting all but the cooled obsidian ground.",
      }
    case Terrain.Chasm:
      return {
        name: "Large Chasm",
        description:
          "A crack in the earth spans days with of travel and has no obvious ground",
      }
    case Terrain.Forest:
      return {
        name: "Forest",
        description: "Thick woods cover the area, some dry, some wet",
      }
    case Terrain.RockyTerrain:
      return {
        name: "Scablands",
        description:
          "Dust kicks up as you walk in this orange, rock-laden wasteland",
      }
    case Terrain.Sand:
      return {
        name: "Sand",
        description: "Warm sand covers the ground and stretches out around you",
      }
    case Terrain.Tundra:
      return {
        name: "Tundra",
        description: "A never-ending blizzard covers this windswept plain.",
      }
    case Terrain.Water:
      return {
        name: "Water",
        description: "Water covers the area, opaque and deep.",
      }
    case Terrain.Weird:
      return { name: "Weird", description: "Ẇ̴̧̨̡̧̯͔̹͍̤̟̭̹͚̟͒̓̇͊͂͛̈̍̈́̐͐̿͝ͅH̶̡̻́͑͋́̂̈͂̽̈̃͠O̸̡̙̣̝̘͖̖͎͎̖̜̗̤̪̺̊͋̒̏͐͐̏͛͝͠ ̷̖̟̻͈̪̼̰͔̲̿͒͛̓̅̿̋͑̕ͅK̸̭̭̀̋̚ͅN̷̲͕̥͂̎̊́̈́̍̉̊͋̽́̈́̚͝Ȯ̷͖̠̳̗̫͗̃͝ͅͅẆ̸̡̝̩̗͔̦͇͍͌͛̋̈͋͌͠Ş̴̛̛̛͕͙̻̦̥̞̙̒̏̊̃̒̂̂͜͠͝" }
    default:
      return { name: unknownName, description: unknownDescription }
  }
}

const displayDescription = (hex?: HexConfig) => {
  if (!hex) return unknownDescription
  if (hex.fog === Fog.hard) return unknownDescription
  return hex.fog === Fog.soft || !hex.description
    ? terrainData(hex).description
    : hex.description
}

const displayName = (hex?: HexConfig) => {
  if (!hex) return unknownName
  if (hex.fog === Fog.hard) return unknownName
  return hex.fog === Fog.soft || !hex.name ? terrainData(hex).name : hex.name
}

export const DataDisplay: FC<Props> = ({ mapData }) => {
  const [, setCurrentCoords] = useCurrentCoordinates()
  const [highlightedCoords] = useHighlightedCoordinates()

  const currentHex = useMemo(
    () =>
      mapData.find(({ coords }) =>
        isEqual(coordsToPoint(coords), highlightedCoords)
      ),
    [highlightedCoords, mapData]
  )

  return (
    <div>
      <h1>{displayName(currentHex)}</h1>
      <p>{displayDescription(currentHex)}</p>
      <button onClick={() => setCurrentCoords(highlightedCoords)}>
        Move Here
      </button>
      <span className={styles.Coordinates}>
        {String(`${highlightedCoords.x}-${highlightedCoords.y}`)}
      </span>
    </div>
  )
}
