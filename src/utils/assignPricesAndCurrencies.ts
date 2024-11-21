// Types
import { type Pokemon, type PokemonWithPriceAndCurrency } from "@/types/types";

// Function to assign prices and currencies
export function assignPricesAndCurrencies(
  pokemonList: Pokemon[],
): PokemonWithPriceAndCurrency[] {
  // Currencies
  const currencies = ["MXN", "ARS", "USD", "EUR", "JPY"];

  // Return
  return pokemonList.map((pokemon) => ({
    // Add pokemon information to the object
    ...pokemon,

    // Add price
    price: (Math.random() * 100).toFixed(2),

    // Add currency
    currency: currencies[Math.floor(Math.random() * currencies.length)],
  }));
}
