// Component
export default function Error() {
  // Return
  return (
    <>
      <section className="flex flex-1 flex-col items-center justify-center gap-4">
        <h2 className="text-center font-sans text-2xl font-semibold text-black">
          Error loading Pokémon.
        </h2>

        <p className="text-center font-sans text-base font-normal text-black">
          Try again later.
        </p>
      </section>
    </>
  );
}
