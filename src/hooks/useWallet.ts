// Shadcn
import { useToast } from "@/hooks/use-toast";

// React
import { useEffect, useState } from "react";

// Stores
import { useWalletStore } from "@/stores/useWalletStore";

// Hooks
export const useWallet = (): [boolean, () => void] => {
  // Toast
  const { toast } = useToast();

  // Wallet
  const { addBalance } = useWalletStore();

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Function to add balance
  function handleAddBalance() {
    // Add balance
    addBalance(1000);

    // Toast
    toast({
      title: "Funds added",
    });
  }

  // Effect
  useEffect(() => {
    // Get wallet from local storage
    const storedWallet = localStorage.getItem("wallet-storage");

    // If wallet is not stored, add initial balance
    if (!storedWallet) {
      // Random initial balance
      const initialBalance = Math.floor(Math.random() * 5000) + 1000;

      // Add balance
      addBalance(initialBalance);

      // Set loading
      setLoading(false);
    } else {
      // Set loading
      setLoading(false);
    }
  }, [addBalance]);

  // Return
  return [loading, handleAddBalance];
};
