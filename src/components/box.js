import React, { useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const Box = (props) => {
  let box = useRef();
  let boxRotationY;
  let boxTargetRotationY;
  let boxScaleZ;
  let boxTargetScaleZ;
  let boxPositionZ;
  let boxTargetPositionZ;

  function handlePointerOver() {
    boxRotationY = box.current.rotation.y;
    boxTargetRotationY = boxRotationY + Math.PI;
    boxScaleZ = box.current.scale.z;
    boxTargetScaleZ = 5;
    boxPositionZ = box.current.position.z;
    boxTargetPositionZ = boxPositionZ - 1.5;
  }

  function handlePointerOut() {
    boxScaleZ = box.current.scale.z;
    boxTargetScaleZ = 1;
  }

  useFrame(() => {
    if (boxScaleZ) {
      boxScaleZ = THREE.MathUtils.lerp(boxScaleZ, boxTargetScaleZ, 0.1);
      box.current.scale.set(1, 1, boxScaleZ);
      boxPositionZ = THREE.MathUtils.lerp(boxPositionZ, boxTargetPositionZ, 0.1);
      box.current.position.set(box.current.position.x, box.current.position.y, boxPositionZ);
      boxRotationY = THREE.MathUtils.lerp(boxRotationY, boxTargetRotationY, 0.1);
      box.current.rotation.set(0, boxRotationY, 0);
    }
  });

  return (
    <group>
      <RoundedBox
        ref={box}
        position={props.boxPosition}
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

export default Box;
