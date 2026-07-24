import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SIAA | Semiconductor Industry Association of Australia",
    template: "%s | SIAA",
  },
  description:
    "The national voice of Australia's semiconductor industry. Connecting industry, government, research and education to strengthen Australia's semiconductor ecosystem.",
  keywords: [
    "SIAA",
    "Semiconductor Industry Association of Australia",
    "semiconductors",
    "microelectronics",
    "chip manufacturing",
    "compound semiconductors",
    "photonics",
    "ASIC",
    "advanced manufacturing",
    "Australia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
