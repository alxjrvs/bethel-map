import Color from "color"

export const darkenNumeric = (fill: number, ratio = 0.5): number =>
  parseInt(Color(fill).darken(ratio).hex().split("#")[1], 16)

export const lightenNumeric = (fill: number, ratio = 0.5): number =>
  parseInt(Color(fill).lighten(ratio).hex().split("#")[1], 16)
