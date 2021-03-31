import React, { useRef, useState, useEffect } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const Tile = (props) => {
  let tile = useRef();

  let tileRotationY;
  let tileTargetRotationY;

  function handlePointerOver() {
    tileRotationY = tile.current.rotation.y;
    tileTargetRotationY = tileRotationY + Math.PI;
  }
  function handlePointerOut() {
    tileRotationY = tile.current.rotation.y;
    tileTargetRotationY = tileRotationY - Math.PI;
  }

  useFrame(() => {
    if (tileRotationY) {
      tileRotationY = THREE.MathUtils.lerp(tileRotationY, tileTargetRotationY, 0.1);
      tile.current.rotation.set(0, tileRotationY, 0);
    }
  });

  useEffect(() => {
    tile.current.lookAt(0, 0, 16);
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
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
      >
        <meshStandardMaterial attach="material" color="white" wireframe={false} />
      </RoundedBox>
    </group>
  );
};

export default Tile;
