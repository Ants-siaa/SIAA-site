import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function PhotonicsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <PageHero
  eyebrow="Industry"
  title="Photonics"
  subtitle="Australia is internationally recognised for photonics research and commercial innovation, supporting communications, sensing, healthcare, defence and quantum technologies."
  image="/images/photonics.png"
/>

      {/* ================= INTRO ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Light-Based Technologies for a Connected World
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Photonics uses light instead of electricity to transmit, process
            and detect information. It enables faster communications, lower
            power consumption and greater bandwidth, making it a critical
            technology for AI, cloud computing, telecommunications, defence,
            healthcare and quantum systems.
          </p>

        </div>

      </section>

      {/* ================= CAPABILITIES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Australian Photonics Capabilities
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Integrated Photonics
              </h3>

              <p className="mt-4 text-slate-600">
                Photonic integrated circuits delivering compact,
                high-performance optical systems.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Optical Communications
              </h3>

              <p className="mt-4 text-slate-600">
                Technologies supporting ultra-high-speed
                data transmission and next-generation networks.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Optical Sensors
              </h3>

              <p className="mt-4 text-slate-600">
                Precision sensing for defence,
                healthcare, mining and environmental monitoring.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Quantum Photonics
              </h3>

              <p className="mt-4 text-slate-600">
                Enabling secure communications,
                quantum computing and advanced sensing.
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
              src="/images/photonics.png"
              alt="Photonics Applications"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Applications Across Strategic Industries
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Photonic technologies underpin many of the world's fastest-growing
              industries. Australia's research excellence and commercial
              innovation are creating opportunities across communications,
              healthcare, defence, manufacturing and space.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ AI data centres and optical interconnects</li>

              <li>✓ Telecommunications and fibre networks</li>

              <li>✓ Defence and secure communications</li>

              <li>✓ Medical imaging and diagnostics</li>

              <li>✓ Autonomous vehicles and LiDAR</li>

              <li>✓ Quantum computing and quantum sensing</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= WHY AUSTRALIA ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            Australia's Competitive Advantage
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div>

              <h3 className="font-semibold text-lg">
                Research Excellence
              </h3>

              <p className="mt-3 text-slate-600">
                Globally recognised universities and research institutes
                advancing photonics and integrated optics.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Commercial Innovation
              </h3>

              <p className="mt-3 text-slate-600">
                Emerging companies developing world-class photonic
                devices and systems.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Strategic Partnerships
              </h3>

              <p className="mt-3 text-slate-600">
                Strong collaboration between industry,
                government and research organisations.
              </p>

            </div>

            <div>

              <h3 className="font-semibold text-lg">
                Global Opportunities
              </h3>

              <p className="mt-3 text-slate-600">
                Growing international demand for integrated photonics,
                optical communications and quantum technologies.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

<CTASection
  title="Advance Australia's Photonics Industry"
  description="Join the organisations shaping Australia's future in photonics and optical technologies."
/>

    </main>
  );
}
