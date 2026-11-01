import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YugNext | Pioneering Next-Gen Digital Ecosystems & Products",
  description:
    "YugNext is a premier digital transformation, products, and services company. Home to Shikshasetu, CampusNeeds, Settler, NexonAcademy, and strategic alliances with MANIT, ROLTA, and Govt of India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
