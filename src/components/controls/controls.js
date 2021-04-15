import React from "react";
import { useStore } from "../../store/store";
import "./controls.css";

const Controls = () => {
  const increaseResetBoxPositionCounter = useStore((state) => state.increaseBoxPositionResetCounter);

  return (
    <div className="buttonsContainer">
      <button className="button" onClick={increaseResetBoxPositionCounter}>
        Sort
      </button>
    </div>
  );
};

export default Controls;
