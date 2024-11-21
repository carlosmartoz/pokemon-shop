// React
import { useState, useEffect } from "react";

// Types
import { PokemonWithPriceAndCurrency } from "@/types/types";

// Services
import { fetchPokemonList } from "@/services/fetchPokemonList";

// Utils
import { assignPricesAndCurrencies } from "@/utils/assignPricesAndCurrencies";

// Hook
export const useLoadPokemon = (): [
  PokemonWithPriceAndCurrency[],
  () => Promise<void>,
] => {
  // Use Effect
  useEffect(() => {
    // Load pokémon list
    loadPokemonList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Offset
  const [offset, setOffset] = useState(0);

  // Pokemon list
  const [pokemonList, setPokemonList] = useState<PokemonWithPriceAndCurrency[]>(
    [],
  );

  // Function to load pokémon list
  const loadPokemonList = async () => {
    // Fetch pokémon list
    const pokemonList = await fetchPokemonList(offset);

    // Assing prices and currencies to the pokemon list
    const pokemonListWithPriceAndCurrency =
      assignPricesAndCurrencies(pokemonList);

    // Set pokémon list
    setPokemonList((prev) => [...prev, ...pokemonListWithPriceAndCurrency]);

    // Set offset
    setOffset((prev) => prev + 20);
  };

  // Return
  return [pokemonList, loadPokemonList];
};
