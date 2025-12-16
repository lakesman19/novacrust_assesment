import { create } from "zustand";

type View =
  | "all"
  | "bankDetails"
  | "recipientDetails"
  | "address"
  | "success";

interface ViewStore {
  currentView: View;
  setView: (view: View) => void;
  nextView: () => void;
  prevView: () => void;
}

const viewOrder: View[] = [
  "all",
  "bankDetails",
  "recipientDetails",
  "address",
  "success",
];

export const useViewStore = create<ViewStore>((set, get) => ({
  currentView: "all",
  setView: (view) => set({ currentView: view }),
  nextView: () => {
    const index = viewOrder.indexOf(get().currentView);
    if (index < viewOrder.length - 1) {
      set({ currentView: viewOrder[index + 1] });
    }
  },
  prevView: () => {
    const index = viewOrder.indexOf(get().currentView);
    if (index > 0) {
      set({ currentView: viewOrder[index - 1] });
    }
  },
}));
