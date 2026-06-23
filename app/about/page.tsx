import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="relative h-[650px] overflow-hidden">

        <Image
          src="/images/hero-wafer.jpg"
          alt="Semiconductor wafer"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-900/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl text-white">

            <div className="uppercase tracking-widest text-blue-300 mb-4">
              About SIAA
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Building Australia's Semiconductor Future
            </h1>

            <p className="text-xl text-slate-200 leading-relaxed">
              The Semiconductor Industry Association of Australia (SIAA)
              brings together industry, government, academia and investors
              to strengthen Australia's semiconductor ecosystem and develop
              sovereign capability.
            </p>

          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed">
              To accelerate the growth of Australia's semiconductor industry
              by connecting businesses, researchers, investors, educators,
              and government stakeholders to build sovereign capability and
              create global opportunities.
            </p>
          </div>

          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/mission-building.jpg"
              alt="Technology facility"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* WHY SIAA EXISTS */}
      <section className="bg-slate-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Why SIAA Exists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Industry Growth
              </h3>

              <p className="text-slate-600">
                Support the expansion of semiconductor manufacturing,
                design, packaging, photonics and advanced technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Talent Development
              </h3>

              <p className="text-slate-600">
                Build Australia's future workforce through education,
                training and industry engagement programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Global Connections
              </h3>

              <p className="text-slate-600">
                Create partnerships with leading semiconductor regions
                worldwide and unlock opportunities for Australian organisations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* STRATEGIC PRIORITIES */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold text-center mb-16">
          Strategic Priorities
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/images/parliament.jpg"
                alt="Advocacy"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-3">
                Industry Advocacy
              </h3>

              <p className="text-sm text-slate-600">
                Representing the interests of Australia's semiconductor sector.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/images/workforce.jpg"
                alt="Workforce"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-3">
                Workforce Development
              </h3>

              <p className="text-sm text-slate-600">
                Building talent pathways and future skills.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/images/global-network.jpg"
                alt="Partnerships"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-3">
                International Partnerships
              </h3>

              <p className="text-sm text-slate-600">
                Connecting Australia to global semiconductor ecosystems.
              </p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden shadow-sm border">
            <div className="relative h-48">
              <Image
                src="/images/australia-tech.jpg"
                alt="Investment"
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h3 className="font-semibold mb-3">
                Investment Attraction
              </h3>

              <p className="text-sm text-slate-600">
                Promoting opportunities across Australia's semiconductor value chain.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-slate-900">

        <div className="max-w-5xl mx-auto px-6 py-20 text-center text-white">

          <h2 className="text-4xl font-bold mb-6">
            Join Australia's Semiconductor Future
          </h2>

          <p className="text-slate-300 mb-10 text-lg">
            Become part of a growing community dedicated to advancing
            Australia's semiconductor industry.
          </p>

          <a
            href="/join"
            className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-medium transition"
          >
            Join SIAA
          </a>

        </div>

      </section>

    </main>
  );
}
