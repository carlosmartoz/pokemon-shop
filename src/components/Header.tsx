// Components
import Cart from "@/components/Cart";
import Search from "@/components/Search";
import Wallet from "@/components/Wallet";

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
            <Cart />
          </li>
        </ul>
      </header>
    </>
  );
}
