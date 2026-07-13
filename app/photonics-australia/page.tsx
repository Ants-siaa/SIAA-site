import Image from "next/image";
import Link from "next/link";

export default function PhotonicsPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="relative h-[460px] overflow-hidden">

        <Image
          src="/images/photonics.png"
          alt="Photonics Australia"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/70" />

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[0.3em] text-blue-300">
              Industry Sector
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              Photonics
            </h1>

            <p className="mt-6 max-w-3xl text-xl text-slate-200 leading-relaxed">
              Photonics is transforming the way information is generated,
              transmitted and processed. Australia's strengths in integrated
              photonics, optical communications, sensing and quantum technologies
              position the nation as an important contributor to the global
              semiconductor ecosystem.
            </p>

          </div>

        </div>

      </section>

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

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Advancing Australia's Photonics Industry
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            SIAA connects researchers, manufacturers, technology companies
            and government to strengthen Australia's leadership in photonics
            and integrated semiconductor technologies.
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
