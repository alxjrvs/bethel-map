import { assignHexList } from "../../assignHexList";
import { baseHexConfig } from "../../../constants";

export const TowersList = [
  "3-23",
  "17-8",
  "9-10",
  "15-23",
  "14-14",
  "3-11",
  "5-2",
];

export const Towers = assignHexList(TowersList, {
  ...baseHexConfig,
  fill: 0xae00ff,
});
