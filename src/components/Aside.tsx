// Client Component
"use client";

// Hooks
import { useCart } from "@/hooks/useCart";

// React icons
import { FaMinus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { CgPokemon } from "react-icons/cg";

// Stores
import { useCartStore } from "@/stores/useCartStore";
import { useWalletStore } from "@/stores/useWalletStore";
import { useOpenCartStore } from "@/stores/useOpenCartStore";

// Utils
import { getClassColorTypeAlt } from "@/utils/getClassColorTypeAlt";
import { addSymbolToPriceAndCurrency } from "@/utils/addSymbolToPriceAndCurrency";

// Component
export default function Aside() {
  // Wallet store
  const { wallet } = useWalletStore();

  // Cart store
  const { cartList, removeFromCart } = useCartStore();

  // Open cart store
  const { openCart, setOpenCart } = useOpenCartStore();

  // Cart
  const [handlePayment, total, loading, error] = useCart();

  // Return
  return (
    <>
      <aside
        className={`bg-neutral fixed top-0 z-50 flex h-svh w-full flex-col gap-6 p-6 transition-all duration-300 ease-in-out sm:w-1/2 lg:w-1/3 ${openCart ? "right-0" : "-right-full"}`}
      >
        <section className="flex items-center justify-between">
          <h2 className="font-sans text-xl font-semibold text-black">Cart</h2>

          <button
            type="button"
            title="close cart"
            aria-label="close cart"
            onClick={() => setOpenCart(false)}
            className="hover:text-orange text-4xl text-black transition-all duration-300 ease-in-out"
          >
            <FaXmark />
          </button>
        </section>

        <ul className="flex flex-col gap-2" style={{ overflow: "auto" }}>
          {cartList.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-2"
            >
              <section className="flex items-start gap-2">
                <CgPokemon
                  className={`text-3xl ${getClassColorTypeAlt(item.type)}`}
                />

                <div>
                  <h3 className="font-sans text-lg font-normal capitalize text-black">
                    {item.name}
                  </h3>

                  {error ? (
                    <span className="text-green font-sans text-base font-semibold">
                      {addSymbolToPriceAndCurrency(item.price, item.currency)}
                    </span>
                  ) : (
                    <span className="text-green font-sans text-base font-semibold">
                      {addSymbolToPriceAndCurrency(item.price, item.currency)}{" "}
                      <span className="text-black">-</span>{" "}
                      {item.convertedPrice !== undefined &&
                      item.convertedCurrency !== undefined
                        ? addSymbolToPriceAndCurrency(
                            item.convertedPrice.toFixed(2).toString(),
                            item.convertedCurrency,
                          )
                        : "Converting..."}
                    </span>
                  )}
                </div>
              </section>

              <button
                type="button"
                title="remove item from cart"
                aria-label="remove item from cart"
                onClick={() => removeFromCart(item.id)}
                className="hover:text-orange transition-all duration-300 ease-in-out"
              >
                <FaMinus />
              </button>
            </li>
          ))}
        </ul>

        <hr />

        <span className="font-sans text-lg font-semibold text-black">
          Available balance:{" "}
          <span className="text-green">
            {addSymbolToPriceAndCurrency(
              wallet.balance.toFixed(2),
              wallet.currency,
            )}
          </span>
        </span>

        <span className="font-sans text-lg font-semibold text-black">
          Total:{" "}
          {error ? (
            <span className="text-orange font-sans text-lg font-semibold">
              Error during conversion
            </span>
          ) : (
            <span className="text-green">
              {loading
                ? "Calculating..."
                : `${addSymbolToPriceAndCurrency(total.toFixed(2), wallet.currency)}`}
            </span>
          )}
        </span>

        {total > wallet.balance && (
          <span className="text-orange font-sans text-lg font-semibold">
            Insufficient funds
          </span>
        )}

        <button
          type="button"
          onClick={() => handlePayment()}
          disabled={total > wallet.balance || loading || error}
          className="bg-blue hover:bg-blue-hover disabled:hover:bg-blue rounded p-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out disabled:opacity-70"
        >
          Pay
        </button>
      </aside>
    </>
  );
}
