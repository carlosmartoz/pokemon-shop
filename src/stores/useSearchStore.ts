// Zustand
import { create } from "zustand";

// Types
import { type Search } from "@/types/search";

// Store
export const useSearchStore = create<Search>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));
