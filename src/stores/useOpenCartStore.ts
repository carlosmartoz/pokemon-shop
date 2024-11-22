// Zustand
import { create } from "zustand";

// Types
import { type OpenCart } from "@/types/cart";

// Store
export const useOpenCartStore = create<OpenCart>((set) => ({
  openCart: false,
  setOpenCart: (openCart) => set({ openCart }),
}));
