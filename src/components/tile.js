import React, { useRef, useEffect } from "react";
import { RoundedBox } from "@react-three/drei";

const Tile = (props) => {
  let tile = useRef();

  useEffect(() => {
    if (tile.current) tile.current.lookAt(0, 0, 16);
  });

  return (
    <group>
      <RoundedBox
        ref={tile}
        position={props.tilePosition}
        args={[1, 1.5, 0.14]}
        radius={0.07}
        smoothness={10}
        onClick={() => console.log("clicked")}
        castShadow
      >
        <meshStandardMaterial attach="material" color="white" wireframe={false} />
      </RoundedBox>
    </group>
  );
};

export default Tile;
