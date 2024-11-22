// Next
import Image from "next/image";

// Utils
import { getClassColorType } from "@/utils/getClassColorType";

// Types
import { type PokemonWithPriceAndNumber } from "@/types/types";

// Component
export default function Card({
  id,
  name,
  image,
  types,
  number,
  priceAndCurrency,
}: PokemonWithPriceAndNumber) {
  // Return
  return (
    <>
      <li
        key={id}
        className="transition-all duration-300 ease-in-out hover:-translate-y-2"
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
            <span className="text-gray font-mono text-base font-medium">
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

            <p className="font-sans text-base font-normal text-black">
              {priceAndCurrency}
            </p>

            <button
              type="button"
              className="bg-button-blue hover:bg-button-blue-hover w-full rounded p-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
            >
              Add to cart
            </button>
          </section>
        </section>
      </li>
    </>
  );
}
