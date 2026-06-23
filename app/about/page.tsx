import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <h1 className="text-5xl font-bold mb-6">
            About SIAA
          </h1>

          <p className="text-xl text-slate-300 max-w-3xl">
            The Semiconductor Industry Association of Australia (SIAA)
            is dedicated to strengthening Australia's semiconductor
            ecosystem through industry collaboration, talent development,
            advocacy, and international engagement.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">
          Our Mission
        </h2>

        <p className="text-lg text-slate-700 leading-relaxed">
          To accelerate the growth of Australia's semiconductor industry
          by connecting businesses, researchers, investors, educators,
          and government stakeholders to build sovereign capability and
          create global opportunities.
        </p>
      </section>

      {/* Why SIAA Exists */}
      <section className="bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold mb-10">
            Why SIAA Exists
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Industry Growth
              </h3>
              <p>
                Support the expansion of semiconductor manufacturing,
                design, packaging, photonics and advanced technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Talent Development
              </h3>
              <p>
                Build Australia's future workforce through education,
                training and industry engagement programs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="font-semibold text-xl mb-4">
                Global Connections
              </h3>
              <p>
                Create partnerships with leading semiconductor regions
                worldwide to unlock opportunities for Australian organisations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Strategic Priorities */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Strategic Priorities
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="border rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-3">
              Industry Advocacy
            </h3>
            <p>
              Representing the interests of Australia's semiconductor sector.
            </p>
          </div>

          <div className="border rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-3">
              Workforce Development
            </h3>
            <p>
              Supporting talent pathways and industry skills growth.
            </p>
          </div>

          <div className="border rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-3">
              International Partnerships
            </h3>
            <p>
              Building relationships with global semiconductor ecosystems.
            </p>
          </div>

          <div className="border rounded-lg p-8">
            <h3 className="font-semibold text-xl mb-3">
              Investment Attraction
            </h3>
            <p>
              Promoting opportunities across Australia's semiconductor value chain.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join Australia's Semiconductor Future
          </h2>

          <p className="text-slate-300 mb-8">
            Become part of a growing community dedicated to advancing
            Australia's semiconductor industry.
          </p>

          <a
            href="/join"
            className="inline-block bg-white text-slate-900 px-8 py-4 rounded-md font-medium"
          >
            Join SIAA
          </a>
        </div>
      </section>

    </main>
  );
}
