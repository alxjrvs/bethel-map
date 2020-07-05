import { Hex } from "honeycomb-grid";
import { Graphics } from "pixi.js";

export const drawCircle = (hex: Hex<{ size: number }>) => {
  const circle = new Graphics();
  const { x, y } = hex.toPoint();
  circle.lineStyle(2, 0xffffff);
  circle.beginFill(0x7532a8);
  circle.drawCircle(x + 15, y + 17, 5);
  circle.endFill();
  return circle;
};
