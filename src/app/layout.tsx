import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himalayan Hikers | Premium Trekking Experiences",
  description: "Embark on luxury-grade trekking adventures across the Himalayas with Himalayan Hikers. Professional guides, curated itineraries, and breathtaking landscapes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`}>
      <body 
        className="bg-background text-foreground selection:bg-accent/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
