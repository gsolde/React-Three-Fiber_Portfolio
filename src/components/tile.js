import React, { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const Tile = (props) => {
  let tile = useRef();
  let tileRotationY;
  let tileTargetRotationY;
  let tileScaleZ;
  let tileTargetScaleZ;
  let tilePositionZ;
  let tileTargetPositionZ;

  function handlePointerOver() {
    tileRotationY = tile.current.rotation.y;
    tileTargetRotationY = tileRotationY + Math.PI;
    tileScaleZ = tile.current.scale.z;
    tileTargetScaleZ = 5;
    tilePositionZ = tile.current.position.z;
    tileTargetPositionZ = tilePositionZ - 1.5;
  }

  function handlePointerOut() {
    tileScaleZ = tile.current.scale.z;
    tileTargetScaleZ = 1;
  }

  useFrame(() => {
    if (tileScaleZ) {
      tileScaleZ = THREE.MathUtils.lerp(tileScaleZ, tileTargetScaleZ, 0.1);
      tile.current.scale.set(1, 1, tileScaleZ);
      tilePositionZ = THREE.MathUtils.lerp(tilePositionZ, tileTargetPositionZ, 0.1);
      tile.current.position.set(tile.current.position.x, tile.current.position.y, tilePositionZ);
      tileRotationY = THREE.MathUtils.lerp(tileRotationY, tileTargetRotationY, 0.1);
      tile.current.rotation.set(0, tileRotationY, 0);
    }
  });

  return (
    <group>
      <RoundedBox
        ref={tile}
        position={props.tilePosition}
        args={[0.95, 0.95, 0.5]}
        radius={0.1}
        smoothness={10}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial attach="material" color={props.color} wireframe={false} />
      </RoundedBox>
    </group>
  );
};

export default Tile;
