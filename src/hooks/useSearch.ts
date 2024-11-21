// React
import { useRef } from "react";

// Stores
import { useSearchStore } from "@/stores/useSearchStore";

// Hook
export const useSearch = (): [
  React.RefObject<HTMLInputElement>,
  (event: React.FormEvent<HTMLFormElement>) => void,
] => {
  // Search store
  const { setSearch } = useSearchStore();

  // Input reference
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Function to handle search
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    // Prevent default
    event.preventDefault();

    // If inputRef exists
    if (inputRef.current) {
      setSearch(inputRef.current.value);
    }
  }

  // Return
  return [inputRef, handleSearch];
};
