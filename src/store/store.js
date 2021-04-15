import create from "zustand";

export const useStore = create((set) => ({
  boxPositionResetCounter: 0,
  increaseBoxPositionResetCounter: () =>
    set((state) => ({ boxPositionResetCounter: state.boxPositionResetCounter + 1 })),
}));
