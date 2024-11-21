// Types
import { type Wallet } from "@/types/types";

// React
import { useEffect, useState } from "react";

// Hook
export const useWallet = (): [
  Wallet,
  (wallet: Wallet | ((prev: Wallet) => Wallet)) => void,
] => {
  // Effect
  useEffect(() => {
    // Set wallet
    setWallet({
      currency: "MX$",
      balance: Math.floor(Math.random() * 5000) + 1000,
    });
  }, []);

  // Wallet
  const [wallet, setWallet] = useState<Wallet>({ currency: "MX$", balance: 0 });

  // Return
  return [wallet, setWallet];
};
