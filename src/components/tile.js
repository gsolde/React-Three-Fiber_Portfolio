import React, { useRef, useEffect } from "react";
import { RoundedBox, Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

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
        args={[1, 1.5, 0.14]} // Width, Height and Depth of the box
        radius={0.07} // Border-Radius of the box
        smoothness={10} // Optional, number of subdivisions
        castShadow
      >
        <meshStandardMaterial attach="material" color="white" wireframe={false} />
      </RoundedBox>
      {/* <Plane ref={tile} position={props.tilePosition} args={[1, 1.5]}>
        <meshBasicMaterial attach="material" wireframe={false} color={"white"} />
      </Plane> */}
    </group>
  );
};

export default Tile;
