// Pokémon owned
export interface PokemonOwned {
  pokemonOwnedList: number[];
  addPokemonOwned: (id: number) => void;
}

// Pokémon
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { slot: number; type: { name: string } }[];
}

// Pokémon with new data
export interface PokemonWithNewData extends Pokemon {
  price: string;
  number: string;
  currency: string;
}
