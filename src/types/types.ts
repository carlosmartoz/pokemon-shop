// Wallet
export interface Wallet {
  currency: string;
  balance: number;
}

// Pokemon
export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { slot: number; type: { name: string } }[];
}

// Pokemon with price and currency
export interface PokemonWithPriceAndCurrency extends Pokemon {
  price: string;
  currency: string;
}
