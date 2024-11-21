// Components
import Main from "@/components/Main";
import Header from "@/components/Header";

// Page
export default function Home() {
  return (
    <>
      <div
        id="#root"
        className="flex min-h-svh w-full max-w-5xl flex-col items-center justify-center gap-12 bg-white p-6"
      >
        <Header />

        <Main />

        <footer className="flex w-full max-w-6xl flex-col items-center justify-center p-6 lg:p-0">
          <p className="text-center text-base font-normal text-black">
            Pokémon Shop.
          </p>
        </footer>
      </div>
    </>
  );
}
