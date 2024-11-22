// Client Component
"use client";

// Components
import Aside from "@/components/Aside";

// React icons
import { FaShoppingCart } from "react-icons/fa";

// Stores
import { useCartStore } from "@/stores/useCartStore";
import { useOpenCartStore } from "@/stores/useOpenCartStore";
import { useCartLoadingStore } from "@/stores/useCartLoadingStore";

// Component
export default function Cart() {
  // Cart store
  const { cartList } = useCartStore();

  // Cart loading
  const { loading } = useCartLoadingStore();

  // Open cart store
  const { setOpenCart } = useOpenCartStore();

  // Return
  return (
    <>
      <button
        title="cart"
        type="button"
        aria-label="cart"
        disabled={loading}
        onClick={() => setOpenCart(true)}
        className="hover:bg-blue-hover bg-blue disabled:hover:bg-blue relative rounded border p-2 text-white transition-all duration-300 ease-in-out disabled:opacity-70"
      >
        {cartList.length > 0 && (
          <span
            aria-label="cart items count"
            className="bg-orange absolute -right-2 -top-2 rounded-full px-2 py-1 text-xs text-white"
          >
            {cartList.length}
          </span>
        )}

        <FaShoppingCart className="text-2xl" />
      </button>

      <Aside />
    </>
  );
}
