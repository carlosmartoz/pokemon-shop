// Client Component
"use client";

// Components
import Card from "@/components/Card";

// Hooks
import { useLoadPokemon } from "@/hooks/useLoadPokemon";

// Component
export default function List() {
  // Load Pokémon
  const [pokemonList, loadPokemonList] = useLoadPokemon();

  // Return
  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </ul>

      <button
        type="button"
        onClick={loadPokemonList}
        className="bg-button-secondary hover:bg-button-secondary-hover mt-12 rounded-md px-4 py-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
      >
        Load more Pokémon
      </button>
    </>
  );
}
