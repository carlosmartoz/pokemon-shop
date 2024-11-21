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
    <html lang="en" className="min-h-svh scroll-smooth">
      <body className="min-h-svh bg-body">{children}</body>
    </html>
  );
}
