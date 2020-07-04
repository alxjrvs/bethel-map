import React, { useEffect, Dispatch, SetStateAction, FC } from "react";
import { useApp, Sprite } from "@inlet/react-pixi";
import { Graphics } from "pixi.js";
import { extendHex, defineGrid, Hex, PointLike } from "honeycomb-grid";
import {
  playerHexConfigs,
  playerVisitedTiles,
  playerVisibleTiles,
} from "./constants";
import { drawHex } from "./utils/drawHex";
import isEqual from "lodash.isequal";

const BaseHex = extendHex({ size: 17, offset: 1 });
const Grid = defineGrid(BaseHex);

const styleHex = (
  hex: Hex<{ size: number }>,
  showAll: boolean,
  setCoords: Dispatch<SetStateAction<PointLike>>
) => {
  const { x, y } = hex.coordinates();
  const key = `${x}-${y}`;
  const { lineWidth, fill, lineFill } = playerHexConfigs[key];

  const base = drawHex(hex);
  let visualHex: Graphics;
  if (showAll) {
    visualHex = drawHex(hex, {
      lineStyleWidth: lineWidth || 1,
      lineStyleColor: lineFill,
      fill: fill === 0x2c3e50 ? 0xabb2ba : fill,
    });
  } else {
    if (playerVisibleTiles.includes(key)) {
      visualHex = drawHex(hex, {
        lineStyleWidth: lineWidth || 1,
        lineStyleColor: lineFill,
        fill,
        alpha: playerVisitedTiles.includes(key) ? 1 : 0.4,
      });
    } else {
      visualHex = drawHex(hex, {
        fill: 0x2c3e50,
        alpha: 0.4,
      });
    }
  }

  visualHex.interactive = true;
  visualHex.on("click", () => {
    setCoords(hex.coordinates());
  });
  base.addChild(visualHex);
  return base;
};

type HexGridProps = {
  setCoords: Dispatch<SetStateAction<PointLike>>;
  currentCoords: PointLike;
  showAll: boolean;
};

export const HexGrid: FC<HexGridProps> = ({
  setCoords,
  currentCoords,
  showAll,
}) => {
  const pixi = useApp();
  useEffect(() => {
    Grid.rectangle({ width: 22, height: 28 }).forEach((hex) => {
      const pixiHex = styleHex(hex, showAll, setCoords);
      if (
        hex.coordinates().x === currentCoords.x &&
        hex.coordinates().y === currentCoords.y
      ) {
        const circle = new Graphics();
        const { x, y } = hex.toPoint();
        circle.lineStyle(1, 0x000000);
        circle.beginFill(0x2c3e50);
        circle.drawCircle(x + 15, y + 17, 5);
        circle.endFill();
        pixiHex.addChild(circle);
      }
      pixi.stage.addChild(pixiHex);
    });
  }, [currentCoords.x, currentCoords.y, pixi.stage, setCoords, showAll]);

  useEffect(() => {
    Grid.rectangle({ width: 22, height: 28 }).forEach((hex) => {
      console.log("there");
      if (
        hex.coordinates().x === currentCoords.x &&
        hex.coordinates().y === currentCoords.y
      ) {
      }
    });
  }, [currentCoords, pixi.stage, setCoords, showAll]);
  return <Sprite image="..bunny.png" />;
};
