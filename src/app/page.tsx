// Components
import List from "@/components/List";

// Page
export default function Home() {
  return (
    <>
      <main className="flex min-h-svh flex-col items-center justify-center">
        <article className="bg-neutral flex min-h-svh w-full max-w-6xl flex-col items-center justify-center p-6 lg:p-0">
          <section className="flex h-full w-full max-w-5xl flex-col items-center justify-center rounded-lg bg-white p-6">
            <List />
          </section>
        </article>
      </main>
    </>
  );
}
