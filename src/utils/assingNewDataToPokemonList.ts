// Utils
import { shopCurrencies } from "@/utils/setttings";
import { addZerosToDexNumber } from "@/utils/addZerosToDexNumber";

// Types
import { type Pokemon, type PokemonWithNewData } from "@/types/pokemon";

// Function to assign new data to the pokemon list
export function assingNewDataToPokemonList(
  pokemonList: Pokemon[],
): PokemonWithNewData[] {
  // Return
  return pokemonList.map((pokemon) => ({
    // Add pokemon information
    ...pokemon,

    // Add number
    number: `#${addZerosToDexNumber(pokemon.id)}`,

    // Add price
    price: (Math.random() * 100).toFixed(2),

    // Add currency
    currency: shopCurrencies[Math.floor(Math.random() * shopCurrencies.length)],
  }));
}
