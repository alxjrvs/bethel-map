export type HexConfig = {
  fill: number
  lineFill: number
  lineWidth?: number
}

export type HexConfigLookup = { [key: string]: HexConfig }
type DetailedHexConfigKey = [string, Partial<HexConfig>]
export type HexConfigKeyArray = Array<string | DetailedHexConfigKey>
