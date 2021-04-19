import create from "zustand";

export const useStore = create((set) => ({
  boxPositionResetCounter: 0,
  moveCameraToInitialPosition: false,
  increaseBoxPositionResetCounter: () =>
    set((state) => ({ boxPositionResetCounter: state.boxPositionResetCounter + 1 })),
  setMoveCameraToInitialPosition: () =>
    set((state) => ({ moveCameraToInitialPosition: !state.moveCameraToInitialPosition })),
}));
