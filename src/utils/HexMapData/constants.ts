import { HexConfig } from "./types";

export const height = 28;
export const width = 22;

export const yCoords: number[] = [];
for (let i = 0; i <= height; i += 1) {
  yCoords.push(i);
}

export const xCoords: number[] = [];
for (let i = 0; i <= width; i += 1) {
  xCoords.push(i);
}

export const baseHexConfig: HexConfig = {
  fill: 0xabb2ba,
  lineFill: 0x000000,
};

export const baseOceanHexConfig: HexConfig = {
  fill: 0x0000ff,
  lineFill: 0x000000,
};
