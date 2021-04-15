import create from "zustand";

export const useStore = create((set) => ({
  resetPosition: false,
  changeResetPosition: () => set((state) => ({ resetPosition: !state.resetPosition })),
}));
