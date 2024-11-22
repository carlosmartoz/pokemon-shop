// Client Component
"use client";

// React icons
import { FaSearch } from "react-icons/fa";

// Hooks
import { useSearch } from "@/hooks/useSearch";

// Component
export default function Search() {
  // Search
  const [inputRef, handleSearch] = useSearch();

  // Return
  return (
    <>
      <form
        className="flex h-full gap-2"
        onSubmit={(event) => handleSearch(event)}
      >
        <input
          type="text"
          ref={inputRef}
          autoComplete="off"
          placeholder="Name or Number"
          aria-label="search input by name or id"
          className="rounded border border-black p-2 font-sans text-base font-normal text-black"
        />

        <button
          type="submit"
          title="search button"
          aria-label="search button"
          className="bg-orange hover:bg-orange-hover rounded px-3 py-2 text-2xl text-white transition-all duration-300 ease-in-out"
        >
          <FaSearch />
        </button>
      </form>
    </>
  );
}
