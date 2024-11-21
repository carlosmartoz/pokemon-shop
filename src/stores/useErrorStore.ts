// Zustand
import { create } from "zustand";

// Types
import { type Error } from "@/types/types";

// Store
export const useErrorStore = create<Error>((set) => ({
  error: "",
  setError: (error: string) => set({ error }),
}));
