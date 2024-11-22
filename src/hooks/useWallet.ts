// Types
import { type Wallet } from "@/types/types";

// React
import { useEffect, useState } from "react";

// Hooks
export const useWallet = (): [
  Wallet,
  (wallet: Wallet | ((prev: Wallet) => Wallet)) => void,
  boolean,
] => {
  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Wallet
  const [wallet, setWallet] = useState<Wallet>({ currency: "MX$", balance: 0 });

  // Effect
  useEffect(() => {
    // Set loading
    setLoading(true);

    // Get saved wallet
    const savedWallet = localStorage.getItem("wallet");

    // IF saved wallet
    if (savedWallet) {
      // Set wallet
      setWallet(JSON.parse(savedWallet));

      // Set loading
      setLoading(false);
    } else {
      // Set wallet
      setWallet({
        currency: "MX$",
        balance: Math.floor(Math.random() * 5000) + 1000,
      });

      // Set loading
      setLoading(false);
    }
  }, []);

  // Effect
  useEffect(() => {
    // Set wallet in local storage
    localStorage.setItem("wallet", JSON.stringify(wallet));
  }, [wallet]);

  // Return
  return [wallet, setWallet, loading];
};
