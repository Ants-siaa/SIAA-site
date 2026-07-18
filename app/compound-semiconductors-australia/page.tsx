import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export default function CompoundSemiconductorsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <PageHero
  eyebrow="Industry"
  title="Compound Semiconductors"
  subtitle="Compound semiconductors underpin next-generation power electronics, RF communications, defence systems, photonics and quantum technologies."
  image="/images/compound-semiconductors.png"
/>

      {/* ================= INTRO ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Powering Tomorrow's Technologies
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Unlike traditional silicon devices, compound semiconductors combine
            two or more elements to deliver superior performance in demanding
            environments. Materials such as Gallium Nitride (GaN),
            Silicon Carbide (SiC), Indium Phosphide (InP) and Gallium Arsenide
            (GaAs) enable faster switching, higher efficiency, greater power
            density and operation at higher temperatures.
          </p>

        </div>

      </section>

      {/* ================= MATERIALS ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Key Compound Semiconductor Materials
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Gallium Nitride (GaN)
              </h3>

              <p className="mt-4 text-slate-600">
                High-frequency and high-power devices for radar,
                communications and fast chargers.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Silicon Carbide (SiC)
              </h3>

              <p className="mt-4 text-slate-600">
                Efficient power electronics for electric vehicles,
                renewable energy and industrial automation.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Gallium Arsenide (GaAs)
              </h3>

              <p className="mt-4 text-slate-600">
                High-speed RF devices supporting satellite,
                defence and wireless communications.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Indium Phosphide (InP)
              </h3>

              <p className="mt-4 text-slate-600">
                Advanced photonics and ultra-high-speed optical
                communications.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= APPLICATIONS ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/compound-semiconductors.png"
              alt="Compound Semiconductor Applications"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Applications Across Critical Industries
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Compound semiconductors are fundamental to many strategic
              industries where performance, efficiency and reliability are
              essential. Australia's research capability positions the nation
              to contribute across the global value chain.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Defence and radar systems</li>

              <li>✓ 5G & 6G communications</li>

              <li>✓ Electric vehicles and charging infrastructure</li>

              <li>✓ Renewable energy and smart grids</li>

              <li>✓ Aerospace and satellite technologies</li>

              <li>✓ Quantum technologies and photonics</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= AUSTRALIA ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Australia's Competitive Advantage
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div>

              <h3 className="font-semibold text-lg">
                World-Class Research
              </h3>

              <p className="mt-3 text-slate-600">
                Leading universities and research organisations developing
                next-generation semiconductor technologies.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Critical Minerals
              </h3>

              <p className="mt-3 text-slate-600">
                Access to strategic resources supporting advanced
                semiconductor manufacturing.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Industry Collaboration
              </h3>

              <p className="mt-3 text-slate-600">
                Strong partnerships between industry,
                government and research institutions.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Global Markets
              </h3>

              <p className="mt-3 text-slate-600">
                Export opportunities supporting defence,
                telecommunications, energy and space sectors.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Accelerating Australia's Compound Semiconductor Industry
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Join SIAA and collaborate with researchers, manufacturers,
            technology companies and government to build Australia's
            sovereign semiconductor capability.
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
