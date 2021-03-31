import React, { useRef } from "react";
import { Plane } from "@react-three/drei";

const Tile = () => {
  let tile = useRef();

  return (
    <group>
      <Plane ref={tile} position={[0, 0, 0]} args={[1.5, 2]}>
        <meshBasicMaterial attach="material" wireframe={true} color={"black"} />
      </Plane>
    </group>
  );
};

export default Tile;
