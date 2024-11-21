// Components
import List from "@/components/List";

// Component
export default function Main() {
  // Return
  return (
    <>
      <main className="flex flex-1 flex-col items-center justify-center">
        <article>
          <section className="flex w-full flex-col items-center justify-center gap-12">
            <List />
          </section>
        </article>
      </main>
    </>
  );
}
