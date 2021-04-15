import React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight intensity={0.3} position={[0, 2, 4]} castShadow />
      <directionalLight intensity={0.5} position={[4, 4, 4]} castShadow />
    </>
  );
}

export default Lights;
