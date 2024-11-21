// Axios
import axios from "axios";

// Types
import { type Pokemon } from "@/types/types";

// Service
export const fetchPokemonList = async (
  offset = 0,
  limit = 20,
): Promise<Pokemon[]> => {
  // Get Pokemon list
  const pokemonList = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
  );

  // Get Pokemon detail
  const pokemonDetail = await Promise.all(
    pokemonList.data.results.map(async (pokemon: { url: string }) => {
      // Detail
      const detail = await axios.get(pokemon.url);

      // Return
      return {
        id: detail.data.id,
        name: detail.data.name,
        types: detail.data.types,
        image: detail.data.sprites.other["official-artwork"].front_default,
      };
    }),
  );

  // Return
  return pokemonDetail;
};
