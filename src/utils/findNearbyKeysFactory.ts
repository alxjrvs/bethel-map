const shortModifiers = [-1, 0, 1]
const longModifiers = [...shortModifiers, -2, 2, -3, 3, 4, -4]

type FindNearbyKeys = (towers: string[]) => (key: string) => string[]
export const findNearbyKeysFactory: FindNearbyKeys = towers => key => {
  const [x, y] = key.split("-")
  const modifiers = towers.includes(key) ? longModifiers : shortModifiers
  return modifiers.flatMap(modx =>
    modifiers.map(mody => {
      return `${Number(x) + modx}-${Number(y) + mody}`
    })
  )
}
