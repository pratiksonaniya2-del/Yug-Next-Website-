import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "YugNext | Pioneering Next-Gen Digital Ecosystems & Products",
  description:
    "YugNext is a premier digital transformation, products, and services company. Home to Shikshasetu, CampusNeeds, Settler, NexonAcademy, and strategic alliances with MANIT, ROLTA, and Govt of India.",
  icons: {
    icon: [
      { url: "/images/yugnext-icon.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/images/yugnext-icon.png",
    apple: "/images/yugnext-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-screen bg-[#0A0818] text-[#EFEDFA] antialiased selection:bg-[#6C3CE3] selection:text-white`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
