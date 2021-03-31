import React, { useRef } from "react";
import Tile from "../components/tile";

const Carousel = (props) => {
  let ref = useRef();

  const circleRadius = 20;
  const circleSegments = 60;
  const firstTilePosition = 31;

  return (
    <group ref={ref} position={props.position}>
      {props.activities.map((index) => {
        return (
          <group key={index}>
            <Tile
              args={[1.5, 2]}
              tilePosition={[
                Math.sin(((Math.PI * 2) / circleSegments) * (firstTilePosition - index)) * circleRadius,
                0,
                Math.cos(((Math.PI * 2) / circleSegments) * (firstTilePosition - index)) * circleRadius,
              ]}
            />
          </group>
        );
      })}
    </group>
  );
};

export default Carousel;
