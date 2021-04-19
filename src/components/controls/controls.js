import React from "react";
import { useStore } from "../../store/store";
import "./controls.css";

const Controls = () => {
  const increaseResetBoxPositionCounter = useStore((state) => state.increaseBoxPositionResetCounter);
  const setMoveCameraToInitialPosition = useStore((state) => state.setMoveCameraToInitialPosition);

  function resetParams() {
    increaseResetBoxPositionCounter();
    setMoveCameraToInitialPosition();
  }

  return (
    <div className="buttonsContainer">
      <button className="button" onClick={resetParams}>
        Reset
      </button>
    </div>
  );
};

export default Controls;
