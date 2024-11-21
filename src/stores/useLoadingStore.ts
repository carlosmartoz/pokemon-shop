// Zustand
import { create } from "zustand";

// Types
import { type Loading } from "@/types/types";

// Store
export const useLoadingStore = create<Loading>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));
