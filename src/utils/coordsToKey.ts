type CoordsToKey = (points: [string, string]) => string
export const coordsToKey: CoordsToKey = ([x, y]) => `${x}-${y}`
