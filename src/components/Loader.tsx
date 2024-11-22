// React icons
import { CgPokemon } from "react-icons/cg";

// Component
export default function Loader() {
  // Return
  return (
    <>
      <div role="status">
        <CgPokemon className="animate-spin text-5xl text-black" />

        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
}
