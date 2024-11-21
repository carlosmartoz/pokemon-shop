// Client Component
"use client";

// Components
import Card from "@/components/Card";

// Hooks
import { useLoadPokemon } from "@/hooks/useLoadPokemon";

// Stores
import { useSearchStore } from "@/stores/useSearchStore";

// Utils
import { filterPokemonList } from "@/utils/filterPokemonList";

// Component
export default function List() {
  // Search store
  const { search } = useSearchStore();

  // Load Pokémon
  const [pokemonList, loadPokemonList] = useLoadPokemon();

  // Filtered Pokémon List
  const filteredPokemonList = filterPokemonList(pokemonList, search);

  // Return
  return (
    <>
      {filteredPokemonList.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <h2 className="text-center font-sans text-2xl font-semibold text-black">
            No Pokémon found.
          </h2>

          <p className="text-center font-sans text-base font-normal text-black">
            Try another search.
          </p>
        </div>
      ) : (
        <ul className="grid w-full flex-1 grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPokemonList.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </ul>
      )}

      {filteredPokemonList.length !== 0 &&
        filteredPokemonList.length < 1025 && (
          <button
            type="button"
            onClick={loadPokemonList}
            className="bg-button-green hover:bg-button-green-hover rounded-md px-4 py-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
          >
            Load more Pokémon
          </button>
        )}
    </>
  );
}
