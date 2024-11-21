// Client Component
"use client";

// Components
import Card from "@/components/Card";

// Hooks
import { useLoadPokemon } from "@/hooks/useLoadPokemon";

// Component
export default function List() {
  // Load Pokémon
  const [pokemonList] = useLoadPokemon();

  // Return
  return (
    <>
      <ul className="grid w-full grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemonList.map((pokemon) => (
          <Card key={pokemon.id} {...pokemon} />
        ))}
      </ul>
    </>
  );
}
