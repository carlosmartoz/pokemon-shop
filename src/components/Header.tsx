// Components
import Search from "@/components/Search";
import Wallet from "@/components/Wallet";

// React icons
import { FaShoppingCart } from "react-icons/fa";

// Component
export default function Header() {
  // Return
  return (
    <>
      <header className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <Search />

        <ul className="flex items-center gap-4">
          <li className="flex items-center gap-4">
            <Wallet />
          </li>

          <li>
            <button
              type="button"
              className="rounded-full border border-black p-2"
            >
              <FaShoppingCart className="text-2xl" />
            </button>
          </li>
        </ul>
      </header>
    </>
  );
}
