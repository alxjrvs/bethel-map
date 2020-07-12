import { Weird } from "./Weird"
import { Sand } from "./Sand"
import { Chasm } from "./Chasm"
import { Water } from "./Water"
import { RockyTerrain } from "./RockyTerrain"
import { Tundra } from "./Tundra"
import { Forests } from "./Forest"
import { Lava } from "./Lava"

export * from "./Water"
export * from "./Chasm"
export * from "./RockyTerrain"
export * from "./Forest"
export * from "./Sand"
export * from "./Tundra"
export * from "./Weird"
export * from "./Lava"

export const Terrain = {
  ...Sand,
  ...Chasm,
  ...RockyTerrain,
  ...Lava,
  ...Weird,
  ...Tundra,
  ...Water,
  ...Forests,
}
