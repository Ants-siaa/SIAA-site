import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export default function ManufacturingPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

    <PageHero
  eyebrow="Industry"
  title="Semiconductor Manufacturing"
  subtitle="Australia possesses advanced manufacturing capability spanning research fabrication, commercial production, packaging and specialist semiconductor processes."
  image="/images/manufacturing.png"
/>

      {/* ================= INTRO ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Building Australia's Manufacturing Capability
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Modern semiconductor manufacturing requires precision engineering,
            highly skilled people and advanced cleanroom facilities. Australia
            is well positioned to expand its capability in specialty
            manufacturing, compound semiconductors, MEMS, photonics and
            prototype production while supporting global technology supply
            chains.
          </p>

        </div>

      </section>

      {/* ================= CAPABILITIES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Australian Manufacturing Capabilities
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Wafer Fabrication
              </h3>

              <p className="mt-4 text-slate-600">
                Advanced silicon and compound semiconductor fabrication,
                prototype development and low-volume manufacturing.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                MEMS & Sensors
              </h3>

              <p className="mt-4 text-slate-600">
                Manufacturing micro-electromechanical systems,
                sensors and specialised microsystems.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Photonics & Quantum
              </h3>

              <p className="mt-4 text-slate-600">
                Fabrication of photonic integrated circuits,
                quantum devices and advanced optical technologies.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Packaging & Test
              </h3>

              <p className="mt-4 text-slate-600">
                Advanced packaging, assembly, qualification,
                reliability testing and device characterisation.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= MANUFACTURING PROCESS ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/manufacturing.png"
              alt="Australian Semiconductor Manufacturing"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              From Research to Production
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Australia's semiconductor manufacturing ecosystem spans the
              complete innovation pipeline—from research and device design
              through process development, pilot production, fabrication,
              packaging, testing and commercialisation. Collaboration between
              industry, research organisations and government enables the
              transition from laboratory innovation to global markets.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Cleanroom fabrication facilities</li>

              <li>✓ Advanced process development</li>

              <li>✓ MEMS and microsystems manufacturing</li>

              <li>✓ Compound semiconductor processing</li>

              <li>✓ Device packaging and reliability testing</li>

              <li>✓ Commercialisation and scale-up support</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= WHY AUSTRALIA ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Why Manufacture in Australia?
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div>

              <h3 className="font-semibold text-lg">
                World-Class Infrastructure
              </h3>

              <p className="mt-3 text-slate-600">
                Modern cleanrooms, research facilities and advanced
                manufacturing equipment.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Skilled Workforce
              </h3>

              <p className="mt-3 text-slate-600">
                Highly qualified engineers, researchers and technicians
                supporting advanced manufacturing.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Trusted Supply Chains
              </h3>

              <p className="mt-3 text-slate-600">
                Reliable manufacturing partnerships for defence,
                medical, industrial and commercial applications.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Innovation Ecosystem
              </h3>

              <p className="mt-3 text-slate-600">
                Strong collaboration between universities,
                government and industry accelerating new technologies.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Strengthening Australia's Manufacturing Future
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            SIAA is working with industry, researchers and government to
            expand Australia's semiconductor manufacturing capability,
            strengthen sovereign supply chains and accelerate commercial
            innovation.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/membership"
              className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100"
            >
              Join SIAA
            </Link>

            <Link
              href="/contact"
              className="border border-white px-8 py-4 rounded-lg hover:bg-white/10"
            >
              Contact Us
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
