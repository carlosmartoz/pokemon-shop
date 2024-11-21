// Next
import Image from "next/image";

// Types
import { type PokemonWithPriceAndCurrency } from "@/types/types";

// Utils
import { getClassColorType } from "@/utils/getClassColorType";
import { addZerosToDexNumber } from "@/utils/addZerosToDexNumber";
import { addSymbolToPriceAndCurrency } from "@/utils/addSymbolToPriceAndCurrency";

// Component
export default function Card({
  id,
  name,
  image,
  types,
  price,
  currency,
}: PokemonWithPriceAndCurrency) {
  // Return
  return (
    <>
      <li key={id}>
        <section>
          <figure className="bg-neutral rounded-lg">
            <Image
              alt={name}
              src={image}
              width={100}
              height={100}
              title={name}
              layout="responsive"
            />
          </figure>

          <div className="flex flex-col gap-2">
            <span className="text-gray font-mono text-base font-medium">
              #{addZerosToDexNumber(id)}
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
              {addSymbolToPriceAndCurrency(price, currency)}
            </p>

            <button
              type="button"
              className="bg-button hover:bg-button-hover w-full rounded-md p-2 font-sans text-base font-normal text-white transition-all duration-300 ease-in-out"
            >
              Add to cart
            </button>
          </div>
        </section>
      </li>
    </>
  );
}
