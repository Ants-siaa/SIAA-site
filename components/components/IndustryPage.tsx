
import Image from "next/image";
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
};

type IndustryPageProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  intro: string;
  features: Feature[];
};

export default function IndustryPage({
  title,
  subtitle,
  heroImage,
  intro,
  features,
}: IndustryPageProps) {
  return (
    <main className="bg-white text-slate-900">

      {/* Hero */}
      <section className="relative h-[460px] overflow-hidden">

        <Image
          src={heroImage}
          alt={title}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/65" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 text-white">

            <p className="uppercase tracking-[0.3em] text-blue-300">
              {subtitle}
            </p>

            <h1 className="mt-4 text-5xl font-bold">
              {title}
            </h1>

            <p className="mt-6 max-w-2xl text-xl text-slate-200">
              {intro}
            </p>

          </div>
        </div>

      </section>

      {/* Feature Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl shadow border border-slate-200 p-8"
              >
                <h3 className="text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Why it Matters */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Why it matters
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Australia's semiconductor industry is critical to our future
            economic growth, sovereign capability, advanced manufacturing,
            national security and global competitiveness.
          </p>

        </div>

      </section>

      {/* CTA */}
      <section className="py-20 text-center">

        <h2 className="text-3xl font-bold">
          Become part of Australia's semiconductor future
        </h2>

        <p className="mt-5 text-lg text-slate-600">
          Join SIAA and help strengthen Australia's semiconductor ecosystem.
        </p>

        <Link
          href="/membership"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium"
        >
          Join SIAA
        </Link>

      </section>

    </main>
  );
}
