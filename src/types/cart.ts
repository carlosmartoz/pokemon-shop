// Cart item
export interface CartItem {
  id: number;
  name: string;
  type: string;
  price: string;
  currency: string;
  convertedPrice?: number;
  convertedCurrency?: string;
}

// Cart
export interface Cart {
  cartList: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}

// Open cart
export interface OpenCart {
  openCart: boolean;
  setOpenCart: (openCart: boolean) => void;
}

// Loading cart
export interface LoadingCart {
  loading: boolean;
  setLoading: (loadingCart: boolean) => void;
}
