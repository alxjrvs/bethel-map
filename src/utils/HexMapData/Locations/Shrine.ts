import { PartialHexConfigLookup } from "../../../types";
import { assignHexList } from "../../assignHexList";
import { baseHexConfig } from "../../../constants";

export const ShrinesList: PartialHexConfigLookup[] = [
  ["1-1", {}],
  ["2-11", {}],
  ["16-5", {}],
  ["10-11", {}],
  ["12-20", {}],
  ["3-25", {}],
];

export const Shrines = assignHexList(ShrinesList, {
  ...baseHexConfig,
  fill: 0xf5ee9d,
  lineWidth: 3,
});
