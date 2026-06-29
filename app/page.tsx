import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image>
    src="/images/Blue microchip with Australia map.png"
    alt="Semiconductor Industry Association of Australia"
    width={10}
    height={10}
    priority
              </Image>
              <div className="w-10 h-10 bg-blue-600 rounded-md" />
            <div>
              <p className="font-bold leading-tight">SIAA</p>
              <p className="text-xs text-slate-500">
                Semiconductor Industry Association of Australia
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <Link className="text-blue-600 border-b-2 border-blue-600 pb-1" href="/">
              Home
            </Link>
            <Link href="/about">About</Link>
            <Link href="/membership">Membership</Link>
            <Link href="/industry">Industry</Link>
            <Link href="/news">News & Insights</Link>
            <Link href="/events">Events</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-slate-100" /> {/* search icon placeholder */}
            <div className="w-9 h-9 rounded-md bg-blue-600/10" /> {/* linkedin placeholder */}

            <Link
              href="/membership"
              className="bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-800"
            >
              Join SIAA
            </Link>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative">
        <div className="grid lg:grid-cols-2 min-h-[600px]">

          {/* LEFT TEXT */}
          <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white flex items-center">
            <div className="max-w-xl px-10 lg:px-16">

              <div className="w-10 h-1 bg-blue-400 mb-6" />

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Strengthening Australia’s
                <br />
                Semiconductor Future
              </h1>

              <p className="mt-6 text-slate-300 leading-relaxed">
                SIAA is the national voice of Australia’s semiconductor industry.
                We advocate, collaborate and champion innovation, investment and
                skills needed to build a sovereign, sustainable and globally
                competitive future.
              </p>

              <div className="mt-8 flex gap-4">
                <Link
                  href="/about"
                  className="bg-blue-600 px-6 py-3 rounded-md text-sm font-medium hover:bg-blue-700"
                >
                  About SIAA
                </Link>

                <Link
                  href="/membership"
                  className="border border-white/40 px-6 py-3 rounded-md text-sm font-medium hover:bg-white/10"
                >
                  Join SIAA
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative bg-slate-100 flex items-center justify-center">

            {/* HERO IMAGE PLACEHOLDER */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-slate-200" />

            <div className="relative w-[80%] h-[70%] bg-white/40 backdrop-blur rounded-xl border border-white/40 flex items-center justify-center">
              <p className="text-slate-600">
                Semiconductor Chip / Australia Map Image Placeholder
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= PARTNER STRIP ================= */}
      <section className="py-10 border-b">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="text-sm text-slate-500 mb-6">
            Proudly connected with Australia’s innovation ecosystem
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-12 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400"
              >
                Partner Logo
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="h-[380px] bg-slate-100 rounded-xl flex items-center justify-center">
            <p className="text-slate-500">About Image Placeholder</p>
          </div>

          {/* TEXT */}
          <div>
            <p className="text-blue-600 font-semibold text-sm mb-2">
              ABOUT SIAA
            </p>

            <h2 className="text-3xl font-bold">
              Building capability. Driving impact.
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              We support collaboration across industry, government and research
              to grow Australia’s semiconductor ecosystem and secure its place
              in the global economy.
            </p>

            {/* ICON ROW */}
            <div className="grid grid-cols-2 gap-6 mt-8 text-sm">

              <div>
                <p className="font-semibold">Industry Collaboration</p>
                <p className="text-slate-500">Stronger together across ecosystem</p>
              </div>

              <div>
                <p className="font-semibold">Workforce Development</p>
                <p className="text-slate-500">Building skills Australia needs</p>
              </div>

              <div>
                <p className="font-semibold">Global Partnerships</p>
                <p className="text-slate-500">Connecting Australia to the world</p>
              </div>

              <div>
                <p className="font-semibold">Technology Innovation</p>
                <p className="text-slate-500">Accelerating ideas into impact</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= KEY FOCUS ================= */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Our key focus areas
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              ["Workforce & Skills", "Building a pipeline for advanced tech roles."],
              ["Industry Growth", "Supporting innovation and scale globally."],
              ["Global Engagement", "Strengthening international partnerships."]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">

                {/* image placeholder */}
                <div className="h-44 bg-slate-200 flex items-center justify-center text-slate-500">
                  Image
                </div>

                <div className="p-6">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-slate-500 mt-2">{desc}</p>
                  <p className="text-blue-600 text-sm mt-4">Learn more →</p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= NEWS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">News & insights</h2>
            <p className="text-blue-600 text-sm">View all →</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex gap-4">

                <div className="w-20 h-20 bg-slate-200 rounded" />

                <div>
                  <p className="text-xs text-blue-600">NEWS</p>
                  <p className="font-medium text-sm">
                    News headline goes here across two lines
                  </p>
                  <p className="text-xs text-slate-400 mt-1">28 June 2026</p>
                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-2xl font-bold">
              Be part of Australia’s semiconductor future
            </h3>
            <p className="text-blue-100 mt-2">
              Join SIAA and connect with industry leaders and partners.
            </p>
          </div>

          <Link
            href="/membership"
            className="bg-white text-blue-900 px-6 py-3 rounded-md font-semibold"
          >
            Join SIAA today
          </Link>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">

          <div>
            <div className="w-10 h-10 bg-white/10 rounded mb-4" />
            <p className="text-slate-400">
              Semiconductor Industry Association of Australia
            </p>
          </div>

          <div>
            <p className="font-semibold mb-3">Quick links</p>
            <p className="text-slate-400">About</p>
            <p className="text-slate-400">Membership</p>
            <p className="text-slate-400">Industry</p>
            <p className="text-slate-400">News</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Get involved</p>
            <p className="text-slate-400">Events</p>
            <p className="text-slate-400">Join SIAA</p>
            <p className="text-slate-400">Contact</p>
          </div>

          <div>
            <p className="font-semibold mb-3">Contact</p>
            <p className="text-slate-400">info@siaa.org.au</p>
            <p className="text-slate-400">+61 2 1234 5678</p>
            <p className="text-slate-400">
              Level 1, Tech Way, NSW
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
