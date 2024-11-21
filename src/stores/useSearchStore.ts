// Zustand
import { create } from "zustand";

// Types
import { type Search } from "@/types/types";

// Store
export const useSearchStore = create<Search>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));
