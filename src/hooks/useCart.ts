// Shadcn
import { useToast } from "@/hooks/use-toast";

// React
import { useEffect, useState } from "react";

// Utils
import { userCurrency } from "@/utils/setttings";

// Stores
import { useCartStore } from "@/stores/useCartStore";
import { useWalletStore } from "@/stores/useWalletStore";
import { useOpenCartStore } from "@/stores/useOpenCartStore";
import { useCartLoadingStore } from "@/stores/useCartLoadingStore";
import { usePokemonOwnedStore } from "@/stores/usePokemonOwnedStore";

// Services
import { fetchConvertCurrency } from "@/services/fetchConvertCurrency";

// Hooks
export const useCart = (): [() => void, number, boolean, boolean] => {
  // Toast
  const { toast } = useToast();

  // Wallet store
  const { pay } = useWalletStore();

  // Open cart store
  const { setOpenCart } = useOpenCartStore();

  // Total
  const [total, setTotal] = useState<number>(0);

  // Pokémon owned store
  const { addPokemonOwned } = usePokemonOwnedStore();

  // Error
  const [error, setError] = useState<boolean>(false);

  // Cart store
  const { cartList, removeFromCart } = useCartStore();

  // Cart loading
  const { loading, setLoading } = useCartLoadingStore();

  // Effect
  useEffect(() => {
    // Function to convert prices
    async function convertPrices() {
      // Set loading
      setLoading(true);

      // Total amount
      let totalAmount = 0;

      // Iterate over the cart list
      for (const item of cartList) {
        // Converted price
        let convertedPrice;

        // Check if the item already has a converted price
        if (item.convertedPrice && item.convertedCurrency === userCurrency) {
          // Use the converted price
          convertedPrice = item.convertedPrice;
        } else {
          // Try to convert the currency
          try {
            // Convert currency
            convertedPrice = await fetchConvertCurrency(
              parseFloat(item.price),
              item.currency,
              userCurrency,
            );
          } catch (error) {
            // Error log
            console.log(error);

            // Set Error
            setError(true);
          }

          // Add converted price to cart item
          item.convertedPrice = convertedPrice;

          // Add converted currency to cart item
          item.convertedCurrency = userCurrency;
        }

        // Get total amount
        if (convertedPrice !== undefined) {
          totalAmount += convertedPrice;
        }
      }

      // Set total
      setTotal(totalAmount);

      // Set loading
      setLoading(false);
    }

    // Convert prices
    convertPrices();
  }, [cartList]);

  // Function to handle pay
  function handlePayment() {
    // Pay
    pay(total);

    // Close cart
    setOpenCart(false);

    // Clear cart
    cartList.forEach((item) => removeFromCart(item.id));

    // Add to owned list
    cartList.forEach((item) => addPokemonOwned(item.id));

    toast({
      title: "Payment successful",
    });
  }

  // Return
  return [handlePayment, total, loading, error];
};
