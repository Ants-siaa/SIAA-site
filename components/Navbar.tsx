"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <Link href="/" className="flex items-center gap-3">
            <div>
              <div className="font-bold text-2xl tracking-tight">
                SIAA
              </div>
              <div className="text-xs text-slate-500">
                Semiconductor Industry Association of Australia
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">

            <Link href="/">Home</Link>

            <Link href="/about">
              About SIAA
            </Link>

            <Link href="/industry">
              Industry
            </Link>

            <Link href="/membership">
              Membership
            </Link>

            <Link href="/events">
              Events
            </Link>

            <Link href="/news">
              News & Insights
            </Link>

            <Link href="/resources">
              Resources
            </Link>

            <Link href="/contact">
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
