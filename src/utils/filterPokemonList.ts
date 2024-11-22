// Types
import { type PokemonWithNewData } from "@/types/pokemon";

// Function to filter the Pokémon list
export function filterPokemonList(
  pokemonList: PokemonWithNewData[],
  search: string,
): PokemonWithNewData[] {
  // Return
  return pokemonList.filter(
    (pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()) ||
      pokemon.id.toString().includes(search),
  );
}
