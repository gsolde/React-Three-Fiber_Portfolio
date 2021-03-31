import React from "react";
import { RoundedBox } from "@react-three/drei";

const Tile = (props) => {
  return (
    <group>
      <RoundedBox
        position={props.tilePosition}
        args={[1, 1.5, 0.14]} // Width, Height and Depth of the box
        radius={0.07} // Border-Radius of the box
        smoothness={10} // Optional, number of subdivisions
        castShadow
      >
        <meshStandardMaterial attach="material" color="white" wireframe={false} />
      </RoundedBox>
    </group>
  );
};

export default Tile;
