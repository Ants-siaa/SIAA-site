import StrategicPriorities from "../components/StrategicPriorities";
import IndustrySectors from "../components/IndustrySectors";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">



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
<div className="relative min-h-[600px] overflow-hidden">
  <Image
    src="/images/homepage-hero.png"
    alt="Australia's Semiconductor Future"
    fill
    priority
    className="object-cover"
  />
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
<div className="relative h-[380px] rounded-xl overflow-hidden shadow-lg">
  <Image
    src="/images/about-mission.png"
    alt="SIAA mission - collaboration across industry, government and research"
    fill
    className="object-cover transition-transform duration-500 hover:scale-105"
  />

  {/* Optional subtle overlay for text consistency */}
  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
</div>

          {/* TEXT */}
          <div>
            <p className="text-blue-600 font-semibold text-sm mb-2">
              ABOUT SIAA
            </p>

            <h2 className="text-3xl font-bold">
              Connecting Australia's Semiconductor Ecosystem
            </h2>

            <p className="mt-4 text-slate-600 leading-relaxed">
              SIAA brings together industry, government, research organisations and education providers to strengthen Australia's semiconductor ecosystem. Through collaboration, advocacy and strategic partnerships, we help accelerate innovation, develop workforce capability and position Australia as a trusted global partner in advanced technology.
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
      
  <IndustrySectors />

<StrategicPriorities />

      {/* ================= NEWS ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

<div className="flex justify-between items-center">

  <div>
    <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
      Intelligence Centre
    </p>

    <h2 className="text-3xl font-bold mt-2">
      Today's Semiconductor Intelligence
    </h2>
  </div>

  <Link
    href="/intelligence"
    className="text-blue-600 font-medium hover:underline"
  >
    View Today's Briefing →
  </Link>

</div>

  
          <div className="grid md:grid-cols-3 gap-8 mt-10">

   <Link
    href="/intelligence#australia"
    className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
  >
    <p className="text-sm font-semibold text-blue-600">
      🇦🇺 Australian Industry
    </p>

    <h3 className="mt-3 font-semibold">
      Latest Australian semiconductor developments
    </h3>

    <p className="mt-3 text-sm text-slate-600">
      Funding announcements, industry news and Australian company updates.
    </p>
  </Link>

  <Link
    href="/intelligence#global"
    className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
  >
    <p className="text-sm font-semibold text-blue-600">
      🌏 Global Industry
    </p>

    <h3 className="mt-3 font-semibold">
      International semiconductor news
    </h3>

    <p className="mt-3 text-sm text-slate-600">
      TSMC, Intel, Samsung, NVIDIA and worldwide industry developments.
    </p>
  </Link>

  <Link
    href="/intelligence#research"
    className="rounded-xl border border-slate-200 p-6 hover:shadow-lg transition"
  >
    <p className="text-sm font-semibold text-blue-600">
      🔬 Research & Innovation
    </p>

    <h3 className="mt-3 font-semibold">
      Australian research breakthroughs
    </h3>

    <p className="mt-3 text-sm text-slate-600">
      Universities, research organisations and emerging technologies.
    </p>
  </Link>

</div>

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
