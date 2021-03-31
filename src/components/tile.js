import React from "react";
import { Plane } from "@react-three/drei";

const Tile = (props) => {
  return (
    <group>
      <Plane position={props.tilePosition} args={props.args}>
        <meshBasicMaterial attach="material" wireframe={true} color={"gray"} />
      </Plane>
    </group>
  );
};

export default Tile;
