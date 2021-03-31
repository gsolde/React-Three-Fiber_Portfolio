import React from "react";

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1} position={[0, 2, 2]} castShadow />
    </>
  );
}

export default Lights;
