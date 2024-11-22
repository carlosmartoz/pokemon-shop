// Wallet item
export interface WalletItem {
  balance: number;
  currency: string;
}

// Wallet
export interface Wallet {
  wallet: WalletItem;
  pay: (amount: number) => void;
  addBalance: (amount: number) => void;
}
