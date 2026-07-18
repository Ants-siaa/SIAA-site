import CTASection from "@/components/CTASection";
import Image from "next/image";
import Link from "next/link";

export default function SupplyChainPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="relative h-[460px] overflow-hidden">

        <Image
          src="/images/supply-chain.png"
          alt="Semiconductor Supply Chain"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[0.3em] text-blue-300">
              Industry Sector
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Semiconductor Supply Chain
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-slate-200 leading-relaxed">
              A resilient semiconductor industry depends on a strong supply
              chain. Australia has expertise across equipment, materials,
              manufacturing services, logistics, packaging and testing that
              supports innovation from research through to commercial production.
            </p>

          </div>
        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Strengthening Australia's Semiconductor Ecosystem
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Every semiconductor requires a sophisticated network of suppliers,
            manufacturers, equipment providers and specialist service companies.
            Developing sovereign supply chain capability improves resilience,
            supports advanced manufacturing and creates opportunities for
            Australian businesses to participate in global value chains.
          </p>

        </div>
      </section>

      {/* ================= SUPPLY CHAIN SEGMENTS ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Key Supply Chain Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-xl font-semibold">
                Equipment & Tooling
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Process equipment, cleanroom infrastructure, metrology,
                automation and specialist manufacturing tools.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-xl font-semibold">
                Materials & Chemicals
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Silicon wafers, compound semiconductor substrates,
                specialty gases, chemicals, photoresists and advanced materials.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow p-8">
              <h3 className="text-xl font-semibold">
                Packaging & Test
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Assembly, advanced packaging, reliability testing,
                qualification and supply chain logistics.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY IT MATTERS ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/supply-chain.png"
              alt="Australian Semiconductor Supply Chain"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Why Supply Chains Matter
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Recent global events have highlighted the importance of resilient
              semiconductor supply chains. Australia can play an increasingly
              important role by leveraging its strengths in research,
              critical minerals, advanced manufacturing and trusted
              international partnerships.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Advanced manufacturing capability</li>

              <li>✓ Critical minerals and materials</li>

              <li>✓ Specialist equipment suppliers</li>

              <li>✓ Logistics and export capability</li>

              <li>✓ Research infrastructure</li>

              <li>✓ Trusted international partnerships</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

<CTASection
  title="Strengthen Australia's Semiconductor Supply Chain"
  description="Connect with organisations building a resilient sovereign supply chain."
/>

    </main>
  );
}
