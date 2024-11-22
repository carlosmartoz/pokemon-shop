// Client Component
"use client";

// React icons
import { FaWallet } from "react-icons/fa";

// Types
import { type Wallet } from "@/types/wallet";

// Hooks
import { useWallet } from "@/hooks/useWallet";

// Stores
import { useWalletStore } from "@/stores/useWalletStore";

// Utils
import { addSymbolToPriceAndCurrency } from "@/utils/addSymbolToPriceAndCurrency";

// Component
export default function Wallet() {
  // Wallet store
  const { wallet } = useWalletStore();

  // Wallet
  const [loading, handleAddBalance] = useWallet();

  // Return
  return (
    <>
      <section className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <button
          onClick={() => handleAddBalance()}
          className="bg-blue hover:bg-blue-hover rounded px-3 py-1 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
        >
          Add funds
        </button>

        <span className="bg-green flex items-center gap-2 rounded px-3 py-1 font-sans text-base font-normal text-white">
          {loading
            ? "Loading..."
            : `${addSymbolToPriceAndCurrency(wallet.balance.toFixed(2), wallet.currency)}`}

          <FaWallet />
        </span>
      </section>
    </>
  );
}
