// Client Component
"use client";

// Components
import Card from "@/components/Card";
import Error from "@/components/Error";
import Loader from "@/components/Loader";
import NotFound from "@/components/NotFound";

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
  const [pokemonList, loadMorePokemon, error, loading, loadingMore] =
    useLoadPokemon();

  // Filtered Pokémon List
  const filteredPokemonList = filterPokemonList(pokemonList, search);

  // Return
  return (
    <>
      {/* Show list if the lenght is more than 0 */}
      {filteredPokemonList.length > 0 && (
        <ul className="grid w-full flex-1 grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredPokemonList.map((pokemon) => (
            <Card key={pokemon.id} {...pokemon} />
          ))}
        </ul>
      )}

      {/* Show the message for Pokémon not found */}
      {filteredPokemonList.length === 0 && search !== "" && !error && (
        <NotFound />
      )}

      {/* Show the message for Pokémon error in the API */}
      {error && <Error />}

      {/* Show the loader */}
      {loading && <Loader />}

      {/* Show the load more button */}
      {filteredPokemonList.length !== 0 &&
        filteredPokemonList.length < 1025 &&
        filteredPokemonList.length > 19 && (
          <button
            type="button"
            disabled={loadingMore}
            onClick={loadMorePokemon}
            className="bg-button-green hover:bg-button-green-hover disabled:hover:bg-button-green rounded-md px-4 py-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out disabled:opacity-70"
          >
            {loadingMore ? "Loading..." : "Load more Pokémon"}
          </button>
        )}
    </>
  );
}
