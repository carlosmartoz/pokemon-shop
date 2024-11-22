// React
import { useState, useEffect } from "react";

// Types
import { PokemonWithPriceAndNumber } from "@/types/types";

// Services
import { fetchPokemonList } from "@/services/fetchPokemonList";

// Utils
import { assingNewDataToPokemon } from "@/utils/assingNewDataToPokemon";

// Hook
export const useLoadPokemon = (): [
  PokemonWithPriceAndNumber[],
  () => Promise<void>,
  boolean,
  boolean,
  boolean,
] => {
  // Use Effect
  useEffect(() => {
    // Load pokémon list
    loadPokemonList();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Error
  const [error, setError] = useState<boolean>(false);

  // Loading
  const [loading, setLoading] = useState<boolean>(true);

  // Loading more
  const [loadingMore, setLoadingMore] = useState<boolean>(false);

  // Offset
  const [offset, setOffset] = useState(0);

  // Pokemon list
  const [pokemonList, setPokemonList] = useState<PokemonWithPriceAndNumber[]>(
    [],
  );

  // Function to load initial pokémon list
  const loadPokemonList = async () => {
    // Set loading
    setLoading(true);

    try {
      // Fetch and update pokémon list
      await fetchAndUpdatePokemonList();
    } catch (error) {
      // Set Error
      setError(true);
    } finally {
      // Set loading
      setLoading(false);
    }
  };

  // Function to load more pokémon
  const loadMorePokemon = async () => {
    // Set loading more
    setLoadingMore(true);

    try {
      // Fetch and update pokémon list
      await fetchAndUpdatePokemonList();
    } catch (error) {
      // Set Error
      setError(true);
    } finally {
      // Set loading more
      setLoadingMore(false);
    }
  };

  // Function to fetch and update pokémon list
  const fetchAndUpdatePokemonList = async () => {
    // Fetch pokémon list
    const pokemonList = await fetchPokemonList(offset);

    // Assing prices and currencies to the pokemon list
    const pokemonWithPriceAndNumber = assingNewDataToPokemon(pokemonList);

    // Get existing list from local storage
    const existingList = localStorage.getItem("pokemonList");

    // Parse existing list or initialize as empty array
    const parsedList = existingList ? JSON.parse(existingList) : [];

    // Combine existing list with new data, filtering out duplicates
    const updatedList = [
      ...parsedList,
      ...pokemonWithPriceAndNumber.filter(
        (newPokemon) =>
          !parsedList.some(
            (existingPokemon: PokemonWithPriceAndNumber) =>
              existingPokemon.number === newPokemon.number,
          ),
      ),
    ];

    // Set local storage with updated list
    localStorage.setItem("pokemonList", JSON.stringify(updatedList));

    // Set pokémon list
    setPokemonList((prev) => [
      ...prev,
      ...updatedList.slice(offset, offset + 20),
    ]);

    // Set offset
    setOffset((prev) => prev + 20);
  };

  // Return
  return [pokemonList, loadMorePokemon, error, loading, loadingMore];
};
