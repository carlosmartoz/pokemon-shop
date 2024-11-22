// Types
import { type Cart } from "@/types/cart";

// Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Store
export const useCartStore = create(
  persist<Cart>(
    (set) => ({
      cartList: [],
      addToCart: (item) =>
        set((state) => ({ cartList: [...state.cartList, item] })),
      removeFromCart: (id) =>
        set((state) => ({
          cartList: state.cartList.filter((item) => item.id !== id),
        })),
    }),
    {
      name: "cart-storage",
    },
  ),
);
