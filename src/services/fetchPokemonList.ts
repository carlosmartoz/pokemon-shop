// Axios
import axios from "axios";

// Types
import { type Pokemon } from "@/types/types";

// Service
export const fetchPokemonList = async (
  offset = 0,
  limit = 20,
): Promise<Pokemon[]> => {
  // Try to fetch the Pokemon list
  try {
    // Get Pokemon list
    const pokemonList = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
    );

    // Get Pokemon detail
    const pokemonDetail = await Promise.all(
      pokemonList.data.results.map(async (pokemon: { url: string }) => {
        // Try to fetch the Pokemon detail
        try {
          // Detail
          const detail = await axios.get(pokemon.url);

          // Return
          return {
            id: detail.data.id,
            name: detail.data.name,
            types: detail.data.types,
            image: detail.data.sprites.other["official-artwork"].front_default,
          };
        } catch (error) {
          // Return null if the request fails
          return null;
        }
      }),
    );

    // Filter out any null values from failed requests
    return pokemonDetail.filter(
      (pokemon): pokemon is Pokemon => pokemon !== null,
    );
  } catch (error) {
    // Throw an error with a message if the request fails
    throw new Error("Failed to fetch Pokemon list");
  }
};
