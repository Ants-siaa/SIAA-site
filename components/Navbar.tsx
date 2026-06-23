"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/">
            <div>
              <div className="font-bold text-2xl">
                SIAA
              </div>
              <div className="text-xs text-slate-500">
                Semiconductor Industry Association of Australia
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <div
  className="relative"
  onMouseEnter={() => setIndustryOpen(true)}
  onMouseLeave={() => setIndustryOpen(false)}
>
  <button className="flex items-center gap-1">
    Industry
    <span className="text-xs">▼</span>
  </button>

  {industryOpen && (
    <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-slate-200 rounded-lg shadow-lg py-2">

      <Link
        href="/semiconductor-manufacturing-australia"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Semiconductor Manufacturing
      </Link>

      <Link
        href="/australian-chip-design"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Chip Design
      </Link>

      <Link
        href="/compound-semiconductors-australia"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Compound Semiconductors
      </Link>

      <Link
        href="/photonics-australia"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Photonics
      </Link>

      <Link
        href="/semiconductor-supply-chain"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Supply Chain
      </Link>

      <Link
        href="/workforce"
        className="block px-4 py-3 hover:bg-slate-50"
      >
        Workforce Development
      </Link>

    </div>
  )}
</div>
            <Link href="/membership">Membership</Link>
            <Link href="/news">News</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>

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
