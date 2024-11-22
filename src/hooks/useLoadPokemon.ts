// React
import { useState, useEffect } from "react";

// Types
import { type PokemonWithNewData } from "@/types/pokemon";

// Services
import { fetchPokemonList } from "@/services/fetchPokemonList";

// Utils
import { assingNewDataToPokemonList } from "@/utils/assingNewDataToPokemonList";

// Hook
export const useLoadPokemon = (): [
  PokemonWithNewData[],
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
  const [pokemonList, setPokemonList] = useState<PokemonWithNewData[]>([]);

  // Function to load initial pokémon list
  async function loadPokemonList() {
    // Set loading
    setLoading(true);

    try {
      // Fetch and update pokémon list
      await fetchAndUpdatePokemonList();
    } catch (error) {
      // Error log
      console.log(error);

      // Set Error
      setError(true);
    } finally {
      // Set loading
      setLoading(false);
    }
  }

  // Function to load more pokémon
  async function loadMorePokemon() {
    // Set loading more
    setLoadingMore(true);

    try {
      // Fetch and update pokémon list
      await fetchAndUpdatePokemonList();
    } catch (error) {
      // Error log
      console.log(error);

      // Set Error
      setError(true);
    } finally {
      // Set loading more
      setLoadingMore(false);
    }
  }

  // Function to fetch and update pokémon list
  async function fetchAndUpdatePokemonList() {
    // Fetch pokémon list
    const pokemonList = await fetchPokemonList(offset);

    // Assing new data to the pokemon list
    const PokemonWithNewData = assingNewDataToPokemonList(pokemonList);

    // Get existing list from local storage
    const existingList = localStorage.getItem("pokemonList");

    // Parse existing list or initialize as empty array
    const parsedList = existingList ? JSON.parse(existingList) : [];

    // Combine existing list with new data, filtering out duplicates
    const updatedList = [
      ...parsedList,
      ...PokemonWithNewData.filter(
        (newPokemon) =>
          !parsedList.some(
            (existingPokemon: PokemonWithNewData) =>
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
  }

  // Return
  return [pokemonList, loadMorePokemon, error, loading, loadingMore];
};
