import React from "react";
import { Canvas } from "@react-three/fiber";
import Letters from "./containers/letters";
import Lights from "./components/lights";
import CameraController from "./components/cameraController";

function App() {
  return (
    <Canvas shadowMap camera={{ position: [-5, -3.5, 19], fov: 90 }}>
      <CameraController />
      <Letters position={[0, 0, 19]} />
      <Lights />
      <fog attach="fog" args={["white", 5, 50]} />
    </Canvas>
  );
}

export default App;
