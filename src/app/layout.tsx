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
      <body className="min-h-screen bg-[#0A0818] text-[#EFEDFA] antialiased selection:bg-[#6C3CE3] selection:text-white">
        {children}
      </body>
    </html>
  );
}
