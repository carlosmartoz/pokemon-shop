// Next
import Image from "next/image";

// Component
export default function NotFound() {
  // Return
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-center gap-8">
        <h2 className="text-center font-sans text-2xl font-semibold text-black">
          No Pokémon found.
        </h2>

        <Image src={"/failImage.png"} width={256} height={256} alt="Error" />

        <p className="text-center font-sans text-base font-normal text-black">
          Try another search.
        </p>
      </section>
    </>
  );
}
