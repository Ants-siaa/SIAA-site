"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="font-bold text-xl text-slate-900">
                SIAA
              </div>
              <div className="text-xs text-slate-500">
                Semiconductor Industry Association of Australia
              </div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-700 hover:text-slate-900 transition">
              Home
            </Link>

            <Link href="/about" className="text-slate-700 hover:text-slate-900 transition">
              About
            </Link>

            <Link href="/membership" className="text-slate-700 hover:text-slate-900 transition">
              Membership
            </Link>

            <Link href="/industry" className="text-slate-700 hover:text-slate-900 transition">
              Industry
            </Link>

            <Link href="/news" className="text-slate-700 hover:text-slate-900 transition">
              News & Insights
            </Link>

            <Link href="/events" className="text-slate-700 hover:text-slate-900 transition">
              Events
            </Link>

            <Link href="/contact" className="text-slate-700 hover:text-slate-900 transition">
              Contact
            </Link>

            <Link
              href="/join"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-md hover:bg-slate-800 transition"
            >
              Join SIAA
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
