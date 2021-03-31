import React from "react";
import { Canvas } from "@react-three/fiber";
import Carousel from "./containers/carousel";

function App() {
  let tiles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  return (
    <Canvas>
      <Carousel activities={tiles} position={[0, 0, 0]} />
    </Canvas>
  );
}

export default App;
