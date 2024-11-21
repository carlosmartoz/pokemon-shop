// Function to add the symbol to the price and currency
export function addSymbolToPriceAndCurrency(
  price: string,
  currency: string,
): string {
  // Symbol
  let symbol: string;

  // Switch
  switch (currency.toLowerCase()) {
    case "usd":
      symbol = "$";
      break;
    case "eur":
      symbol = "€";
      break;
    case "ars":
      symbol = "AR$";
      break;
    case "mxn":
      symbol = "MX$";
      break;
    case "jpy":
      symbol = "¥";
      break;
    default:
      throw new Error("Unsupported currency");
  }

  // Return
  return `${symbol} ${price}`;
}
