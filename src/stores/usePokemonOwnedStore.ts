// Zustand
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Types
import { type PokemonOwned } from "@/types/pokemon";

// Store
export const usePokemonOwnedStore = create(
  persist<PokemonOwned>(
    (set) => ({
      pokemonOwnedList: [],
      addPokemonOwned: (pokemon) =>
        set((state) => ({
          pokemonOwnedList: [...state.pokemonOwnedList, pokemon],
        })),
    }),
    {
      name: "pokemon-owned-storage",
    },
  ),
);
