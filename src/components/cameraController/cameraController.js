import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useStore } from "../../store/store";
import { isMobile } from "react-device-detect";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraController = () => {
  const resetPositionCounter = useStore((state) => state.boxPositionResetCounter);
  const setMoveCameraToInitialPosition = useStore((state) => state.setMoveCameraToInitialPosition);
  const moveCameraToInitialPosition = useStore((state) => state.moveCameraToInitialPosition);

  const { camera, gl } = useThree();

  let cameraPosX = camera.position.x;
  let cameraPosY = camera.position.y;
  let cameraPosZ = camera.position.z;

  let cameraQuaternionW = camera.quaternion.w;
  let cameraQuaternionX = camera.quaternion.x;
  let cameraQuaternionY = camera.quaternion.y;
  let cameraQuaternionZ = camera.quaternion.z;

  let cameraRotationX = camera.rotation.x;
  let cameraRotationY = camera.rotation.y;
  let cameraRotationZ = camera.rotation.z;

  let targetCameraPosX = isMobile ? -11 : -8;
  let targetCameraPosY = isMobile ? -8 : -6.5;
  let targetCameraPosZ = isMobile ? 25 : 19;

  let targetCameraQuaternionW = isMobile ? 0.969 : 0.969;
  let targetCameraQuaternionX = isMobile ? 0.139 : 0.149;
  let targetCameraQuaternionY = isMobile ? -0.204 : 0.196;
  let targetCameraQuaternionZ = isMobile ? 0.029 : 0.03;

  let targetCameraRotationX = isMobile ? 0.309 : 0.3296;
  let targetCameraRotationY = isMobile ? -0.397 : -0.379;
  let targetCameraRotationZ = isMobile ? 0.123 : 0.126;

  useFrame(() => {
    if (resetPositionCounter > 0 && moveCameraToInitialPosition) {
      cameraPosX = THREE.MathUtils.lerp(cameraPosX, targetCameraPosX, 0.1);
      cameraPosY = THREE.MathUtils.lerp(cameraPosY, targetCameraPosY, 0.1);
      cameraPosZ = THREE.MathUtils.lerp(cameraPosZ, targetCameraPosZ, 0.1);
      cameraQuaternionW = THREE.MathUtils.lerp(cameraQuaternionW, targetCameraQuaternionW, 0.1);
      cameraQuaternionX = THREE.MathUtils.lerp(cameraQuaternionX, targetCameraQuaternionX, 0.1);
      cameraQuaternionY = THREE.MathUtils.lerp(cameraQuaternionY, targetCameraQuaternionY, 0.1);
      cameraQuaternionZ = THREE.MathUtils.lerp(cameraQuaternionZ, targetCameraQuaternionZ, 0.1);
      cameraRotationX = THREE.MathUtils.lerp(cameraRotationX, targetCameraRotationX, 0.1);
      cameraRotationY = THREE.MathUtils.lerp(cameraRotationY, targetCameraRotationY, 0.1);
      cameraRotationZ = THREE.MathUtils.lerp(cameraRotationZ, targetCameraRotationZ, 0.1);
      camera.position.set(cameraPosX, cameraPosY, cameraPosZ);
      camera.quaternion.set(cameraQuaternionX, cameraQuaternionY, cameraQuaternionZ);
      camera.rotation.set(cameraRotationX, cameraRotationY, cameraRotationZ);
    }
  });

  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 4;
    controls.maxDistance = 25;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

  useEffect(() => {
    moveCameraToInitialPosition &&
      setTimeout(() => {
        setMoveCameraToInitialPosition();
      }, 1000);
  }, [moveCameraToInitialPosition]);

  return null;
};

export default CameraController;
