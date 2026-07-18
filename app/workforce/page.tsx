import PageHero from "@/components/PageHero";
import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function WorkforcePage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
   <PageHero
  eyebrow="Workforce Development"
  title="Building Australia's Semiconductor Workforce"
  subtitle="Australia's semiconductor future depends on a highly skilled workforce. SIAA works with industry, government and education providers to strengthen the talent pipeline."
  image="/images/workforce.png"
/>

      {/* ================= INTRO ================= */}

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold">
            Growing Australia's Talent Pipeline
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Demand for semiconductor engineers, technicians, scientists and
            manufacturing specialists continues to grow worldwide. Australia
            has the opportunity to develop a globally competitive workforce
            through stronger collaboration between industry, universities,
            TAFEs and government.
          </p>

        </div>
      </section>

      {/* ================= PRIORITIES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-14">
            SIAA Workforce Priorities
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Education & Training
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Supporting schools, universities and vocational education to
                build future semiconductor skills.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                Industry Partnerships
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Connecting employers with educators to ensure graduates develop
                the practical skills industry needs.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow p-8">

              <h3 className="text-xl font-semibold">
                National Capability
              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">
                Building sovereign capability through long-term workforce
                planning and investment.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FUTURE SKILLS ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <Image
              src="/images/workforce.png"
              alt="Future Semiconductor Skills"
              width={700}
              height={500}
              className="rounded-2xl shadow-lg"
            />

          </div>

          <div>

            <h2 className="text-3xl font-bold">
              Skills for the Future
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Australia's semiconductor industry requires expertise across
              manufacturing, chip design, photonics, compound semiconductors,
              advanced packaging, AI, quantum technologies and supply chains.
            </p>

            <ul className="mt-8 space-y-4 text-slate-700">

              <li>✓ Semiconductor manufacturing</li>

              <li>✓ Chip and ASIC design</li>

              <li>✓ Photonics & Quantum</li>

              <li>✓ Advanced packaging</li>

              <li>✓ Cleanroom operations</li>

              <li>✓ Semiconductor equipment engineering</li>

            </ul>

          </div>

        </div>

      </section>

      {/* ================= CTA ================= */}

      <CTASection
  title="Help Build Australia's Semiconductor Workforce"
  description="Join SIAA and work with industry leaders, researchers, educators and government to strengthen Australia's future."
/>

    </main>
  );
}
