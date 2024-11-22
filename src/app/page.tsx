// Components
import Main from "@/components/Main";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

        <Footer />
      </div>
    </>
  );
}
