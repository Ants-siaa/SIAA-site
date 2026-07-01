"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MegaMenu from "./MegaMenu";
import { Search, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const navClass = (path: string) =>
  pathname === path
    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition-colors"
    : "text-slate-700 hover:text-blue-600 transition-colors";
  const openMenu = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
  }
  setIndustryOpen(true);
};

const closeMenu = () => {
  closeTimer.current = setTimeout(() => {
    setIndustryOpen(false);
  }, 200);
};

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">

  <Image
    src="/images/Blue microchip with Australia map.png"
    alt="SIAA"
    width={52}
    height={52}
    priority
  />

  <div>
    <div className="text-3xl font-bold text-slate-900 leading-none">
      SIAA
    </div>

    <div className="text-sm text-slate-500 leading-tight">
      Semiconductor Industry
    </div>
  </div>

</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
    href="/"
    className={navClass("/home")}
>
    Home
</Link>
            <Link
    href="/about"
    className={navClass("/about")}
>
    About
</Link>

<div
    className="relative"
    onMouseEnter={openMenu}
    onMouseLeave={closeMenu}
>

    <button
        className={`flex items-center gap-1 ${
            pathname.startsWith("/industry")
                ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
                : "text-slate-700 hover:text-blue-600 transition-colors"
        }`}
    >
        Industry

        <ChevronDown
            size={16}
            className={`transition-transform ${
                industryOpen ? "rotate-180" : ""
            }`}
        />

    </button>

    <MegaMenu open={industryOpen} />

</div>
<Link
    href="/membership"
    className={navClass("/membership")}
>
    Membership
</Link>

 <Link
    href="/news"
    className={navClass("/news")}
>
    News
</Link>           

<Link
    href="/events"
    className={navClass("/events")}
>
    Events
</Link>

<Link
    href="/contact"
    className={navClass("/contact")}
>
    Contact
</Link>

<a
  href="#"
  className="w-9 h-9 rounded-md bg-[#0066FF] flex items-center justify-center text-white font-bold hover:bg-blue-700 transition"
  aria-label="LinkedIn"
>
  in
</a> 
            <Link
              href="/join"
              className="bg-slate-900 text-white px-5 py-2 rounded-md"
            >
              Join SIAA
            </Link>

          </nav>

  
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <span className="text-3xl">✕</span>
            ) : (
              <span className="text-3xl">☰</span>
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          <nav className="flex flex-col px-6 py-4">

            <Link href="/" className="py-3">Home</Link>
            <Link href="/about" className="py-3">About SIAA</Link>
            <div className="py-3 font-medium">
  Industry
</div>

<Link href="/semiconductor-manufacturing-australia" className="pl-4 py-2">
  Manufacturing
</Link>

<Link href="/australian-chip-design" className="pl-4 py-2">
  Chip Design
</Link>

<Link href="/compound-semiconductors-australia" className="pl-4 py-2">
  Compound Semiconductors
</Link>

<Link href="/photonics-australia" className="pl-4 py-2">
  Photonics
</Link>

<Link href="/semiconductor-supply-chain" className="pl-4 py-2">
  Supply Chain
</Link>

<Link href="/workforce" className="pl-4 py-2">
  Workforce Development
</Link>
            <Link href="/membership" className="py-3">Membership</Link>
            <Link href="/news" className="py-3">News & Insights</Link>
            <Link href="/events" className="py-3">Events</Link>
            <Link href="/contact" className="py-3">Contact</Link>

            <Link
              href="/join"
              className="mt-4 bg-slate-900 text-white text-center py-3 rounded-md"
            >
              Join SIAA
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}
