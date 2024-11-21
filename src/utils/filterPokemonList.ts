// Types
import { type PokemonWithPriceAndNumber } from "@/types/types";

// Function to filter the pokemon list
export function filterPokemonList(
  pokemonList: PokemonWithPriceAndNumber[],
  search: string,
): PokemonWithPriceAndNumber[] {
  // Return
  return pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
      pokemon.id.toString().includes(search),
  );
}
