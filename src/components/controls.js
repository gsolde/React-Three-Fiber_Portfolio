import React from "react";
import { useStore } from "../store/store";

const Controls = (props) => {
  const resetPositionState = useStore((state) => state.resetPosition);
  const updateResetPosition = useStore((state) => state.changeResetPosition);

  return (
    <div
      style={{
        position: "fixed",
        left: "30px",
        bottom: "30px",
        display: "flex",
        justifyContent: "flex-start",
        width: "15vw",
      }}
    >
      <button style={{ width: "120px", height: "60px" }} onClick={updateResetPosition}>
        Sort
      </button>
      <button style={{ width: "120px", height: "60px", marginLeft: "30px" }}>Shuffle</button>
    </div>
  );
};

export default Controls;
