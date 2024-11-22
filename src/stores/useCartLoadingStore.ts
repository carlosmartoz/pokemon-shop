// Zustand
import { create } from "zustand";

// Types
import { type LoadingCart } from "@/types/cart";

// Store
export const useCartLoadingStore = create<LoadingCart>((set) => ({
  loading: true,
  setLoading: (loading) => set({ loading }),
}));
