import React, { useEffect, useRef } from "react";
import { RoundedBox } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import { useStore } from "../../store/store";
import * as THREE from "three";

const Box = (props) => {
  const resetPositionCounter = useStore((state) => state.boxPositionResetCounter);

  let isFirstAnimationDone = false;

  let box = useRef();

  let boxRotationY;
  let boxTargetRotationY;
  let boxScaleZ;
  let boxTargetScaleZ;
  let boxPositionZ;
  let boxTargetPositionZ;

  function initialPositioning(initialBoxPosition, resetPositionCounter) {
    boxRotationY = box.current.rotation.y;
    boxTargetRotationY = resetPositionCounter > 0 ? 0 : boxRotationY + Math.PI;
    boxScaleZ = box.current.scale.z;
    boxTargetScaleZ = 5;
    boxPositionZ = box.current.position.z;
    boxTargetPositionZ = initialBoxPosition;
  }

  function handlePointerOver() {
    if (isFirstAnimationDone) {
      boxRotationY = box.current.rotation.y;
      boxTargetRotationY = boxRotationY + Math.PI;
      boxScaleZ = box.current.scale.z;
      boxTargetScaleZ = 5;
      boxPositionZ = box.current.position.z;
      boxTargetPositionZ = Math.random() > 0.5 ? boxPositionZ - 2 : boxPositionZ + 2;
    }
  }

  function handlePointerOut() {
    if (isFirstAnimationDone) {
      boxScaleZ = box.current.scale.z;
      boxTargetScaleZ = 1;
    }
  }

  useFrame(() => {
    if (box && boxScaleZ) {
      boxScaleZ = THREE.MathUtils.lerp(boxScaleZ, boxTargetScaleZ, !isFirstAnimationDone ? 0.0005 : 0.1);
      box.current.scale.set(1, 1, boxScaleZ);
      boxPositionZ = THREE.MathUtils.lerp(boxPositionZ, boxTargetPositionZ, !isFirstAnimationDone ? 0.0005 : 0.1);
      box.current.position.set(box.current.position.x, box.current.position.y, boxPositionZ);
      boxRotationY = THREE.MathUtils.lerp(boxRotationY, boxTargetRotationY, !isFirstAnimationDone ? 0.0005 : 0.1);
      box.current.rotation.set(0, boxRotationY, 0);
    }
  });

  useEffect(() => {
    setTimeout(
      () => {
        initialPositioning(props.boxPosition[2], resetPositionCounter);
      },
      !resetPositionCounter ? 750 : 100
    );
    setTimeout(
      () => {
        isFirstAnimationDone = true;
        handlePointerOut();
      },
      !resetPositionCounter ? 900 : 350
    );
  });

  return (
    <group>
      <RoundedBox
        ref={box}
        position={[props.boxPosition[0], props.boxPosition[1], Math.random() * isMobile ? 30 : 20]}
        args={[0.95, 0.95, 0.5]}
        radius={0.1}
        smoothness={10}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        castShadow
        receiveShadow
      >
        <meshPhongMaterial attach="material" color={"#2E86C1"} wireframe={false} />
      </RoundedBox>
    </group>
  );
};

export default Box;
