import { TowersList } from "../../utils/HexMapData"

const shortModifiers = [-1, 0, 1]
const longModifiers = [...shortModifiers, -2, 2, -3, 3, 4, -4]

type FindNearbyKeys = (key: string) => string[]
export const findNearbyKeys: FindNearbyKeys = key => {
  const [x, y] = key.split("-")
  const modifiers = TowersList.includes(key) ? longModifiers : shortModifiers
  return modifiers.flatMap(modx =>
    modifiers.map(mody => {
      return `${Number(x) + modx}-${Number(y) + mody}`
    })
  )
}
