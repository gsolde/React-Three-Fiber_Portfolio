import React from "react";
import { Canvas } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import Letters from "./containers/letters";
import Lights from "./components/lights";
import CameraController from "./components/cameraController";
import Controls from "./components/controls";

function App() {
  let cameraPosition = isMobile ? [-11, -8, 25] : [-5, -3.5, 19];

  return (
    <>
      <Canvas shadowMap camera={{ position: cameraPosition, fov: 90 }}>
        <CameraController />
        <Letters position={[0, 0, 19]} />
        <Lights />
        <fog attach="fog" args={["white", 5, 50]} />
      </Canvas>
      <Controls />
    </>
  );
}

export default App;
