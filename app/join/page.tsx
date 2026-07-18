import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import MembershipForm from "@/components/MembershipForm";
import Image from "next/image";

export default function JoinPage() {
  return (
    <main className="bg-white text-slate-900">

      <PageHero
        eyebrow="Membership"
        title="Join Australia's Semiconductor Community"
        subtitle="Become part of the national network connecting industry, government, universities and researchers to strengthen Australia's semiconductor future."
        image="/images/homepage-hero.png"
      />

      {/* WHY JOIN */}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl font-bold">
              Why Join SIAA?
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Membership provides access to Australia's growing semiconductor
              ecosystem, helping members collaborate, innovate and influence
              the future of the industry.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="rounded-2xl border border-slate-200 p-8">
              <div className="text-5xl">🤝</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Connect
              </h3>

              <p className="mt-4 text-slate-600">
                Build relationships with Australia's leading semiconductor
                companies, universities, researchers and government agencies.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <div className="text-5xl">🚀</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Collaborate
              </h3>

              <p className="mt-4 text-slate-600">
                Participate in workforce initiatives, research partnerships,
                industry programs and national capability projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8">
              <div className="text-5xl">🇦🇺</div>

              <h3 className="mt-6 text-2xl font-semibold">
                Influence
              </h3>

              <p className="mt-4 text-slate-600">
                Help shape Australia's semiconductor strategy through a united
                national industry voice.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WHO SHOULD JOIN */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Who Should Join?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">🏭 Industry</h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Manufacturers</li>
                <li>Fabless Companies</li>
                <li>Equipment Suppliers</li>
                <li>Materials Suppliers</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">🎓 Education</h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Universities</li>
                <li>Researchers</li>
                <li>Students</li>
                <li>TAFEs</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">🏛 Government</h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Federal</li>
                <li>State</li>
                <li>Economic Development</li>
                <li>Defence</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">💼 Professionals</h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Consultants</li>
                <li>Investors</li>
                <li>Professional Services</li>
                <li>Start-ups</li>
              </ul>
            </div>

          </div>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-bold">
              Membership Benefits
            </h2>

            <div className="mt-10 space-y-5">

              <p>✓ National semiconductor network</p>

              <p>✓ Daily Intelligence Centre access</p>

              <p>✓ Industry events & networking</p>

              <p>✓ Workforce initiatives</p>

              <p>✓ Research collaboration</p>

              <p>✓ Government advocacy</p>

              <p>✓ National visibility</p>

            </div>

          </div>

          <Image
            src="/images/workforce.png"
            alt="Semiconductor Collaboration"
            width={700}
            height={500}
            className="rounded-2xl shadow-xl"
          />

        </div>

      </section>

      <MembershipForm />

      <CTASection />

    </main>
  );
}
