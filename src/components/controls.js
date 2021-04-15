import React from "react";
import { useStore } from "../store/store";

const Controls = () => {
  const increaseResetBoxPositionCounter = useStore((state) => state.increaseBoxPositionResetCounter);

  return (
    <div
      style={{
        position: "fixed",
        left: "50%",
        transform: "translateX(-50%)",
        bottom: "30px",
      }}
    >
      <button style={{ width: "120px", height: "60px" }} onClick={increaseResetBoxPositionCounter}>
        Sort
      </button>
    </div>
  );
};

export default Controls;
