"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Linkedin } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const pathname = usePathname();

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
  className={
    pathname === "/home"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  Home
</Link>
            <Link
  href="/about"
  className={
    pathname === "/about"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  About
</Link>
            <div
  className="relative py-4 -my-4"
  onMouseEnter={() => setIndustryOpen(true)}
  onMouseLeave={() => setIndustryOpen(false)}
>
  <button className="flex items-center gap-1">
    Industry
    <span className="text-xs">▼</span>
  </button>

  {industryOpen && (
  <div className="absolute top-full left-0 w-96 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">

    <div className="bg-slate-900 text-white px-6 py-4">
      <h3 className="font-semibold">
        Australia's Semiconductor Ecosystem
      </h3>
      <p className="text-sm text-slate-300 mt-1">
        Explore key sectors of the industry.
      </p>
    </div>

    <div className="py-2">

      <Link
        href="/semiconductor-manufacturing-australia"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Semiconductor Manufacturing
        </div>
        <div className="text-sm text-slate-500">
          Fabrication, packaging and advanced manufacturing.
        </div>
      </Link>

      <Link
        href="/australian-chip-design"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Chip Design
        </div>
        <div className="text-sm text-slate-500">
          IC design, EDA and emerging technologies.
        </div>
      </Link>

      <Link
        href="/compound-semiconductors-australia"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Compound Semiconductors
        </div>
        <div className="text-sm text-slate-500">
          GaN, SiC and next-generation materials.
        </div>
      </Link>

      <Link
        href="/photonics-australia"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Photonics
        </div>
        <div className="text-sm text-slate-500">
          Optical technologies and integrated photonics.
        </div>
      </Link>

      <Link
        href="/semiconductor-supply-chain"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Supply Chain
        </div>
        <div className="text-sm text-slate-500">
          Equipment, materials and supporting industries.
        </div>
      </Link>

      <Link
        href="/workforce"
        className="block px-6 py-4 hover:bg-slate-50"
      >
        <div className="font-medium">
          Workforce Development
        </div>
        <div className="text-sm text-slate-500">
          Building Australia's semiconductor talent pipeline.
        </div>
      </Link>

    </div>

    </div>
)}
</div>

<Link
  href="/membership"
  className={
    pathname === "/membership"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  Membership
</Link>
            <Link
  href="/news"
  className={
    pathname === "/news"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  News
</Link>
            <Link
  href="/events"
  className={
    pathname === "/events"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  Events
</Link>
            <Link
  href="/contact"
  className={
    pathname === "/contact"
      ? "text-blue-600 font-semibold"
      : ""
  }
>
  Contact
</Link>
       <div className="flex items-center gap-5">

  {/* Search */}
  <button
    className="text-slate-700 hover:text-blue-600 transition-colors"
    aria-label="Search"
  >
    <Search size={20} />
  </button>

  {/* LinkedIn */}
  <button
    className="text-slate-700 hover:text-blue-600 transition-colors"
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </button>
 
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
