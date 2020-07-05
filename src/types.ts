export type HexConfig = {
  fill: number;
  lineFill: number;
  lineWidth?: number;
};

export type HexConfigLookup = { [key: string]: HexConfig };

export type PartialHexConfigLookup = [string, Partial<HexConfig>];
