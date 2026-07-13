import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";

export default function ChipDesignPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <PageHero
  eyebrow="Industry"
  title="Australian Chip Design"
  subtitle="Australia has developed world-class expertise in integrated circuit design, enabling innovation across communications, medical devices, defence, quantum and artificial intelligence."
  image="/images/chip-design.png"
/>
      {/* ================= INTRO ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Designing Tomorrow's Semiconductor Technologies
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Chip design is where innovation begins. Australia has a long
            history of developing advanced integrated circuits for
            communications, defence, medical technology, mining,
            space, quantum computing and industrial applications.
            By combining world-class research with commercial expertise,
            Australian companies are delivering high-value semiconductor
            intellectual property to global markets.
          </p>

        </div>

      </section>

      {/* ================= DESIGN CAPABILITIES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            Australian Design Capabilities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                ASIC & SoC Design
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Custom integrated circuits and System-on-Chip (SoC)
                solutions for communications, industrial automation,
                defence and emerging technologies.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Analogue & Mixed Signal
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Precision analogue, RF, sensor interface and
                mixed-signal circuit design supporting high-performance
                electronic systems.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                AI, Photonics & Quantum
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Next-generation processor architectures, photonic
                integrated circuits and quantum technologies
                shaping future computing platforms.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= DESIGN ECOSYSTEM ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/images/chip-design.png"
              alt="Australian Semiconductor Design"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Australia's Design Ecosystem
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Australia's semiconductor design ecosystem combines
              universities, research organisations, start-ups,
              multinational companies and specialist design consultancies.
              Together they develop advanced semiconductor IP that is
              manufactured through both domestic and international
              fabrication partners.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ ASIC and FPGA development</li>

              <li>✓ Electronic Design Automation (EDA)</li>

              <li>✓ IP core development and licensing</li>

              <li>✓ Verification and validation</li>

              <li>✓ AI accelerator design</li>

              <li>✓ Photonic and quantum chip development</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= WHY SIAA ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center">
            How SIAA Supports Chip Design
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-14">

            <div>
              <h3 className="font-semibold text-lg">
                Advocacy
              </h3>

              <p className="mt-3 text-slate-600">
                Promoting investment and national capability in
                semiconductor design.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Collaboration
              </h3>

              <p className="mt-3 text-slate-600">
                Connecting researchers, designers,
                manufacturers and government.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Workforce
              </h3>

              <p className="mt-3 text-slate-600">
                Supporting development of Australia's
                future chip design professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Global Engagement
              </h3>

              <p className="mt-3 text-slate-600">
                Building international partnerships that
                expand market opportunities.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="bg-blue-900 text-white py-20">

        <div className="max-w-4xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Help Shape Australia's Semiconductor Future
          </h2>

          <p className="mt-6 text-blue-100 text-lg">
            Join SIAA to collaborate with Australia's leading chip designers,
            researchers, manufacturers and technology companies.
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
