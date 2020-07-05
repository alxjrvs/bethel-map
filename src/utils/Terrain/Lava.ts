import { assignHexList } from "../../assignHexList"
import { baseHexConfig } from "../../../constants"

export const LavaList = [
  "5-5",
  "4-4",
  "5-4",
  "4-6",
  "5-7",
  "4-8",
  "5-9",
  "5-10",
  "5-3",
  "4-9",
  "4-5",
  "3-5",
  "2-6",
  "2-7",
  "1-8",
  "2-5",
  "2-5",
  "1-5",
  "4-10",
]

export const Lava = assignHexList(LavaList, {
  ...baseHexConfig,
  fill: 0xff9d00,
})
