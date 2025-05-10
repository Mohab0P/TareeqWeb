import type { Metadata } from "next";
import { Inter, Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

// Initialize the fonts
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tareeqi - Road Monitoring App",
  description: "Transform your daily commute into valuable road data",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
