// Styles
import "@/styles/globals.css";

// Next
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Pokémon Shop",
  description: "Pokémon Shop technical test.",
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="flex flex-col items-center justify-center scroll-smooth bg-body"
    >
      <body className="bg-neutral flex w-full max-w-6xl flex-col items-center justify-center p-6 lg:p-0">
        {children}
      </body>
    </html>
  );
}
