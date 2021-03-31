import React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight intensity={1} position={[0, 2, 2]} castShadow />
      <directionalLight intensity={1} position={[0, 0, 0]} castShadow />
    </>
  );
}

export default Lights;
