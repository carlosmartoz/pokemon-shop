// Axios
import axios from "axios";

// Service
export const fetchConvertCurrency = async (
  amount: number,
  fromCurrency: string,
  toCurrency: string,
): Promise<number> => {
  // Try to fetch the convert currency
  try {
    // Fetch convert currency
    const fetchConvertCurrency = await axios.get(
      `https://v6.exchangerate-api.com/v6/fb278922d00df44c6d6cd92d/pair/${fromCurrency}/${toCurrency}`,
    );

    // Return
    return amount * fetchConvertCurrency.data.conversion_rate;
  } catch (error) {
    // Throw an error with a message if the request fails
    throw new Error("Failed to convert currency");
  }
};
