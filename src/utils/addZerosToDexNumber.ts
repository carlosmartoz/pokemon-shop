// Function to add zeros to the dex number
export function addZerosToDexNumber(number: number): string {
  // Return
  return number.toString().padStart(4, "0");
}
