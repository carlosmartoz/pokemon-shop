// Styles
import "@/styles/globals.css";

// Next
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
  title: "Pokémon Shop",
  description: "Pokémon Shop",
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
