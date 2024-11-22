// Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types
import { type Wallet } from "@/types/wallet";

// Utils
import { userCurrency } from "@/utils/setttings";

// Store
export const useWalletStore = create(
  persist<Wallet>(
    (set) => ({
      wallet: { currency: userCurrency, balance: 0 },
      addBalance: (amount) =>
        set((state) => ({
          wallet: { ...state.wallet, balance: state.wallet.balance + amount },
        })),
      pay: (amount) =>
        set((state) => ({
          wallet: {
            ...state.wallet,
            balance: parseFloat((state.wallet.balance - amount).toFixed(2)),
          },
        })),
    }),
    {
      name: "wallet-storage",
    },
  ),
);
