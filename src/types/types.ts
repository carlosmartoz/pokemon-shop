// Wallet
export interface Wallet {
  balance: number;
  currency: string;
}

// Search
export interface Search {
  search: string;
  setSearch: (search: string) => void;
}

// Pokemon
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { slot: number; type: { name: string } }[];
}

// Pokemon with price and currency
export interface PokemonWithPriceAndNumber extends Pokemon {
  number: string;
  priceAndCurrency: string;
}
