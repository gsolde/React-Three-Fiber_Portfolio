import create from "zustand";

export const useStore = create((set) => ({
  resetPosition: false,
  changeResetPosition: () => {
    console.log("reaching store");
    set((state) => ({ resetPosition: !state.resetPosition }));
  },
}));
