import Hero from "../components/Hero";
import Stats from "../components/Stats";
import WhyAustralia from "../components/WhyAustralia";
import IndustryPillars from "../components/IndustryPillars";
import Membership from "../components/Membership";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      
      {/* HERO */}
      <section>
        <Hero />
      </section>

      {/* TRUST / STATS STRIP */}
      <section className="border-t border-b bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Stats />
        </div>
      </section>

      {/* WHY AUSTRALIA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <WhyAustralia />
      </section>

      {/* INDUSTRY PILLARS */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <IndustryPillars />
        </div>
      </section>

      {/* MEMBERSHIP */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <Membership />
      </section>

      {/* FINAL CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Building Australia’s Semiconductor Future
          </h2>
          <p className="text-slate-300 mb-8">
            Join industry leaders, researchers, and investors shaping the next generation of advanced manufacturing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-slate-900 px-6 py-3 rounded-md font-medium"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
