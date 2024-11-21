// React
import { useState, useEffect } from "react";

// Types
import { PokemonWithPriceAndNumber } from "@/types/types";

// Stores
import { useErrorStore } from "@/stores/useErrorStore";
import { useLoadingStore } from "@/stores/useLoadingStore";

// Services
import { fetchPokemonList } from "@/services/fetchPokemonList";

// Utils
import { assingNewDataToPokemon } from "@/utils/assingNewDataToPokemon";

// Hook
export const useLoadPokemon = (): [
  PokemonWithPriceAndNumber[],
  () => Promise<void>,
] => {
  // Use Effect
  useEffect(() => {
    // Load pokémon list
    loadPokemonList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Error store
  const { setError } = useErrorStore();

  // Offset
  const [offset, setOffset] = useState(0);

  // Loading store
  const { setLoading } = useLoadingStore();

  // Pokemon list
  const [pokemonList, setPokemonList] = useState<PokemonWithPriceAndNumber[]>(
    [],
  );

  // Function to load pokémon list
  const loadPokemonList = async () => {
    // Set loading
    setLoading(true);

    // Try to fetch pokémon list
    try {
      // Fetch pokémon list
      const pokemonList = await fetchPokemonList(offset);

      // Assing prices and currencies to the pokemon list
      const pokemonListWithPriceAndCurrency =
        assingNewDataToPokemon(pokemonList);

      // Set pokémon list
      setPokemonList((prev) => [...prev, ...pokemonListWithPriceAndCurrency]);

      // Set offset
      setOffset((prev) => prev + 20);
    } catch (error) {
      // Set loading
      setLoading(false);

      // Set Error
      setError("Failed to fetch Pokémon list");
    } finally {
      // Set loading
      setLoading(false);
    }
  };

  // Return
  return [pokemonList, loadPokemonList];
};
