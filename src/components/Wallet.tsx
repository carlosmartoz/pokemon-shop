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
  const [wallet, setWallet] = useWallet();

  // Return
  return (
    <>
      <div className="flex flex-col">
        <span className="text-button-green font-mono text-base font-semibold">
          {wallet.currency} {wallet.balance}
        </span>

        <button
          onClick={() =>
            setWallet((prev: Wallet) => {
              return {
                ...prev,
                balance: prev.balance + 1000,
              };
            })
          }
          className="border-b border-white font-sans text-sm font-normal text-black transition-all duration-300 ease-in-out hover:border-black"
        >
          Add funds
        </button>
      </div>

      <div aria-label="wallet" className="rounded-full border border-black p-2">
        <FaWallet className="text-2xl" />
      </div>
    </>
  );
}
