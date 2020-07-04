import React, { useState } from "react";
import { Stage } from "@inlet/react-pixi";
import { HexGrid } from "../../components/HexGrid";
import { PointLike } from "honeycomb-grid";

export const App = () => {
  const [{ x, y }, setCoords] = useState<PointLike>({ x: 0, y: 0 });
  return (
    <>
      <div>
        <div>
          X: {x} y: {y}
        </div>
      </div>
      <Stage options={{ backgroundColor: 0xffffff }} height={800} width={700}>
        <HexGrid
          setCoords={setCoords}
          currentCoords={{ x, y }}
          showAll={true}
        />
      </Stage>
      <Stage options={{ backgroundColor: 0xffffff }} height={800} width={700}>
        <HexGrid
          setCoords={setCoords}
          currentCoords={{ x, y }}
          showAll={false}
        />
      </Stage>
    </>
  );
};
