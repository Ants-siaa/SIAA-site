"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ChevronDown } from "lucide-react";

import MegaMenu from "./MegaMenu";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();


 
 const navClass = (path: string) => {
  const active =
    pathname === path ||
    pathname.startsWith(path + "/");

  return active
    ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1 transition-colors"
    : "text-slate-700 hover:text-blue-600 transition-colors";
};
  
useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target as Node)
    ) {
      setOpenMenu(null);
      setMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

return (
  <header className="sticky top-0 z-50 bg-white border-b border-slate-200">

  <div
    ref={navRef}
    className="max-w-7xl mx-auto px-6"
  >

    ...

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
   <p className="font-bold text-2xl">SIAA</p>
              <p className="text-xs text-slate-500">
                Semiconductor Industry Association of Australia
              </p>
  </div>

</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-8">

           <Link
    href="/"
    className={navClass("/home")}
             onClick={() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }}
>
    Home
</Link>
           <Link
  href="/about"
  className={navClass("/about")}
  onClick={() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }}
>
  About
</Link>
            
           <div className="relative">

    <button
  onClick={() =>
  setOpenMenu(openMenu === "industry" ? null : "industry")
}
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
  openMenu === "industry" ? "rotate-180" : ""
}`}
  />
</button>

<MegaMenu open={openMenu === "industry"} />

</div>

<Link
    href="/membership"
    className={navClass("/membership")}
  onClick={() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }}
>
    Membership
</Link>

<div className="relative">

  <button
    onClick={() =>
      setOpenMenu(
        openMenu === "intelligence"
          ? null
          : "intelligence"
      )
    }
    className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition-colors"
  >
    Intelligence

    <ChevronDown
      size={16}
      className={`transition-transform ${
        openMenu === "intelligence"
          ? "rotate-180"
          : ""
      }`}
    />
  </button>

{openMenu === "intelligence" && (

    <div className="absolute top-full mt-4 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-2">

      <Link href="/intelligence" className="block px-5 py-3 hover:bg-slate-50">
        Today's Briefing
      </Link>

      <Link href="/intelligence#australia" className="block px-5 py-3 hover:bg-slate-50">
        Australian Industry
      </Link>

      <Link href="/intelligence#global" className="block px-5 py-3 hover:bg-slate-50">
        Global News
      </Link>

      <Link href="/intelligence#research" className="block px-5 py-3 hover:bg-slate-50">
        Research
      </Link>

      <Link href="/intelligence#policy" className="block px-5 py-3 hover:bg-slate-50">
        Government & Policy
      </Link>

      <Link href="/intelligence#funding" className="block px-5 py-3 hover:bg-slate-50">
        Funding
      </Link>

      <Link href="/intelligence#events" className="block px-5 py-3 hover:bg-slate-50">
        Events
      </Link>

    </div>

  )}

</div>

<Link
  href="/events"
  className={navClass("/events")}
  onClick={() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }}
>
  Events
</Link>

<Link
  href="/contact"
  className={navClass("/contact")}
  onClick={() => {
    setOpenMenu(null);
    setMenuOpen(false);
  }}
>
  Contact
</Link>

      
<button
    aria-label="Search"
    className="rounded-full p-2 hover:bg-slate-100 transition"
>
    <Search size={20}/>
</button> 

<a
  href="#"
  className="w-9 h-9 rounded-md bg-[#0066FF] flex items-center justify-center text-white font-bold hover:bg-blue-700 transition"
  aria-label="LinkedIn"
>
  in
</a>

            <Link
            href="/join"
            className="rounded-lg bg-[#0066FF] px-5 py-0.5 font-medium text-white shadow hover:bg-blue-700 transition"
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
