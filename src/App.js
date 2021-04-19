import React from "react";
import { Canvas } from "@react-three/fiber";
import { isMobile } from "react-device-detect";
import Letters from "./containers/letters";
import Lights from "./components/lights/lights";
import CameraController from "./components/cameraController/cameraController";
import Controls from "./components/controls/controls";
import "./App.css";

function App() {
  let cameraPosition = isMobile ? [-11, -8, 25] : [-8, -6.5, 19];

  return (
    <>
      <Canvas shadowMap camera={{ position: cameraPosition, fov: 90 }}>
        <CameraController />
        <Letters position={[0, 0, 19]} />
        <Lights />
        <fog attach="fog" args={["white", 5, 50]} />
      </Canvas>
      <Controls />
      <p className="instructions">Click and drag, zoom in and out & point to boxes.</p>
    </>
  );
}

export default App;
