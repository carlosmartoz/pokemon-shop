// Client Component
"use client";

// React
import { useEffect, useState } from "react";

// Types
import { Wallet } from "@/types/types";

// React Icons
import { FaSearch } from "react-icons/fa";

// Hooks
import { useSearch } from "@/hooks/useSearch";

// React icons
import { FaWallet, FaShoppingCart } from "react-icons/fa";

// Component
export default function Header() {
  // Search
  const [inputRef, handleSearch] = useSearch();

  // Wallet
  const [wallet, setWallet] = useState<Wallet>({ currency: "MX$", balance: 0 });

  // Effect
  useEffect(() => {
    // Set wallet
    setWallet({
      currency: "MX$",
      balance: Math.floor(Math.random() * 5000) + 1000,
    });
  }, []);

  // Return
  return (
    <>
      <header className="flex w-full items-center justify-between">
        <form
          className="flex h-full gap-2"
          onSubmit={(event) => handleSearch(event)}
        >
          <input
            type="text"
            ref={inputRef}
            autoComplete="off"
            placeholder="Name or Number"
            aria-label="search input by name or id"
            className="rounded border border-black p-2 font-sans text-base font-normal text-black"
          />

          <button
            type="submit"
            title="search button"
            aria-label="search button"
            className="bg-button-orange hover:bg-button-orange-hover rounded px-3 py-2 text-2xl text-white transition-all duration-300 ease-in-out"
          >
            <FaSearch />
          </button>
        </form>

        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-button-green font-mono text-base font-semibold">
                {wallet.currency} {wallet.balance}
              </span>

              <button
                onClick={() =>
                  setWallet((prev) => ({
                    ...prev,
                    balance: prev.balance + 1000,
                  }))
                }
                className="border-b border-white font-sans text-sm font-normal text-black transition-all duration-300 ease-in-out hover:border-black"
              >
                Add funds
              </button>
            </div>

            <div
              aria-label="wallet"
              className="rounded-full border border-black p-2"
            >
              <FaWallet className="text-2xl" />
            </div>
          </li>

          <li>
            <button
              type="button"
              className="rounded-full border border-black p-2"
            >
              <FaShoppingCart className="text-2xl" />
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
