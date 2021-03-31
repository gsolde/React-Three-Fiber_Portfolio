import React from "react";
import { Canvas } from "react-three-fiber";
import Carousel from "./containers/carousel";
import Lights from "./components/lights";

function App() {
  let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  return (
    <Canvas shadowMap camera={{ position: [0, 0, 5], fov: 90 }}>
      <directionalLight />
      <Carousel activities={tiles} position={[0, 0, 19]} />
      <Lights />
      <fog attach="fog" args={["white", 0, 10]} />
    </Canvas>
  );
}

export default App;
