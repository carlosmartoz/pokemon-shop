// Client Component
"use client";

// React icons
import { FaWallet } from "react-icons/fa";

// Types
import { type Wallet } from "@/types/types";

// Hooks
import { useWallet } from "@/hooks/useWallet";

// Component
export default function Wallet() {
  // Wallet
  const [wallet, setWallet, loading] = useWallet();

  // Return
  return (
    <>
      <section className="flex flex-col">
        <span className="text-button-green font-mono text-base font-semibold">
          {loading ? "Loading..." : `${wallet.currency} ${wallet.balance}`}
        </span>

        <button
          disabled={loading}
          onClick={() =>
            setWallet((prev: Wallet) => {
              return {
                ...prev,
                balance: prev.balance + 1000,
              };
            })
          }
          className="border-b border-white font-sans text-sm font-normal text-black transition-all duration-300 ease-in-out hover:border-black disabled:opacity-70 disabled:hover:border-white"
        >
          Add funds
        </button>
      </section>

      <section
        aria-label="wallet"
        className="rounded-full border border-black p-2"
      >
        <FaWallet className="text-2xl" />
      </section>
    </>
  );
}
