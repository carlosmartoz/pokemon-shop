// Utils
import { addZerosToDexNumber } from "@/utils/addZerosToDexNumber";
import { addSymbolToPriceAndCurrency } from "./addSymbolToPriceAndCurrency";

// Types
import { type Pokemon, type PokemonWithPriceAndNumber } from "@/types/types";

// Function to assign prices and currencies
export function assingNewDataToPokemon(
  pokemonList: Pokemon[],
): PokemonWithPriceAndNumber[] {
  // Currencies
  const currencies = ["MXN", "ARS", "USD", "EUR", "JPY"];

  // Return
  return pokemonList.map((pokemon) => ({
    // Add pokemon information to the object
    ...pokemon,

    // Add number
    number: `#${addZerosToDexNumber(pokemon.id)}`,

    // Add price and currency
    priceAndCurrency: addSymbolToPriceAndCurrency(
      (Math.random() * 100).toFixed(2),
      currencies[Math.floor(Math.random() * currencies.length)],
    ),
  }));
}
