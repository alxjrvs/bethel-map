import { Hex, PointLike } from "honeycomb-grid";
import { Dispatch, SetStateAction } from "react";
import { drawHex } from "./drawHex";
import { Graphics } from "pixi.js";
import isEqual from "lodash.isequal";
import { drawCircle } from "./drawCircle";
import {
  PlayerVisitedHexes,
  PlayerVisibleHexes,
} from "../../../PlayerDataLists";
import { BorderOceans, VisibleWaterList } from "../../../Terrain";
import { HexConfigsMap } from "../../../utils/HexMapData";
import { HexConfig } from "../../../types";
import { baseHexConfig } from "../../../constants";

const NonFogHexKeys = [
  ...PlayerVisitedHexes,
  ...Object.keys(BorderOceans),
  ...VisibleWaterList,
];

export const drawVisualHex = (
  hex: Hex<{ size: number }>,
  key: string,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike[]>>,
  { lineWidth, lineFill, fill }: HexConfig
) => {
  let visualHex: Graphics;
  if (showAll) {
    visualHex = drawHex(hex, {
      lineStyleWidth: lineWidth,
      lineStyleColor: lineFill,
      fill,
    });
  } else {
    if (PlayerVisibleHexes.includes(key)) {
      visualHex = drawHex(hex, {
        lineStyleWidth: lineWidth,
        lineStyleColor: lineFill,
        fill,
      });

      if (!NonFogHexKeys.includes(key)) {
        const fogHex = drawHex(hex, {
          fill: baseHexConfig.fill,
          alpha: 0.7,
        });

        visualHex.addChild(fogHex);
      }
    } else {
      visualHex = drawHex(hex, {
        fill: baseHexConfig.fill,
      });
    }
  }

  visualHex.interactive = true;
  visualHex.on("click", () => {
    setCoords((coords) => {
      return [...coords, hex.coordinates()];
    });
  });

  return visualHex;
};

export const drawFullHex = (
  hex: Hex<{ size: number }>,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike[]>>,
  currentCoords: PointLike[]
) => {
  const { x, y } = hex.coordinates();
  const key = `${x}-${y}`;

  const foo = HexConfigsMap[key];
  if (!foo) {
    console.log(HexConfigsMap);
    debugger;
  }
  const base = drawHex(hex);
  const visualHex = drawVisualHex(
    hex,
    key,
    showAll,
    setCoords,
    HexConfigsMap[key]
  );

  if (currentCoords.some((coord) => isEqual(coord, hex.coordinates()))) {
    const circle = drawCircle(hex);
    visualHex.addChild(circle);
  }
  base.addChild(visualHex);
  return base;
};
