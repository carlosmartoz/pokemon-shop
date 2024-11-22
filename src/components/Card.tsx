// Client component
"use client";

// Next
import Image from "next/image";

// Types
import { type PokemonWithNewData } from "@/types/pokemon";

// Stores
import { useCartStore } from "@/stores/useCartStore";
import { usePokemonOwnedStore } from "@/stores/usePokemonOwnedStore";

// Utils
import { getClassColorType } from "@/utils/getClassColorType";
import { addSymbolToPriceAndCurrency } from "@/utils/addSymbolToPriceAndCurrency";

// Component
export default function Card({
  id,
  name,
  image,
  types,
  price,
  number,
  currency,
}: PokemonWithNewData) {
  // Cart store
  const { addToCart, cartList } = useCartStore();

  // Pokemon owned store
  const { pokemonOwnedList } = usePokemonOwnedStore();

  // Return
  return (
    <>
      <li
        key={id}
        className={`transition-all duration-300 ease-in-out ${cartList.some((item) => item.id === id) || pokemonOwnedList.some((item) => item === id) ? "opacity-70" : "hover:-translate-y-2"}`}
      >
        <section>
          <figure className="bg-neutral rounded">
            <Image
              priority
              width={0}
              height={0}
              alt={name}
              src={image}
              title={name}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <section className="flex flex-col gap-2">
            <span className="text-gray font-mono text-base font-normal">
              {number}
            </span>

            <h2 className="font-sans text-xl font-semibold capitalize text-black">
              {name}
            </h2>

            <ul className="flex items-center gap-2">
              {types.map((type) => (
                <li
                  key={type.slot}
                  className={`rounded px-4 py-0.5 font-sans text-base font-normal capitalize ${getClassColorType(type.type.name)}`}
                >
                  {type.type.name}
                </li>
              ))}
            </ul>

            <p className="text-green font-sans text-base font-semibold">
              {addSymbolToPriceAndCurrency(price, currency)}
            </p>

            <button
              type="button"
              disabled={cartList.some((item) => item.id === id)}
              onClick={() =>
                addToCart({
                  id,
                  name,
                  price,
                  currency,
                  type: types[0].type.name,
                })
              }
              className="bg-blue hover:bg-blue-hover disabled:hover:bg-blue w-full rounded p-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
            >
              Add to cart
            </button>
          </section>
        </section>
      </li>
    </>
  );
}
