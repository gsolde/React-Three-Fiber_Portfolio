import React from "react";
import Tile from "../components/tile";
import { Plane } from "@react-three/drei";

const Carousel = (props) => {
  const circleRadius = 16;
  const circleSegments = 80;
  const firstTilePosition = 51;

  return (
    <group position={props.position}>
      {props.activities.map((index) => {
        return (
          <group key={index}>
            <Tile
              args={[1, 1]}
              tilePosition={[
                Math.sin(((Math.PI * 2) / circleSegments) * (firstTilePosition - index)) * circleRadius,
                0,
                Math.cos(((Math.PI * 2) / circleSegments) * (firstTilePosition - index)) * circleRadius,
              ]}
            />
          </group>
        );
      })}
      <Plane receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.85, 0]} args={[2000, 2000]}>
        <meshStandardMaterial attach="material" color="white" />
      </Plane>
    </group>
  );
};

export default Carousel;
