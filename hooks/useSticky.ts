import { create } from "zustand";

interface StickyState {
  showSticky: boolean;
  setShowSticky: (value: boolean) => void;
}

export const useSticky = create<StickyState>((set) => ({
  showSticky: false,
  setShowSticky: (value) => set({ showSticky: value }),
}));
