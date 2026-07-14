import PageHero from "@/components/PageHero";

export default function IntelligencePage() {
  return (
    <main className="bg-white text-slate-900">

      <PageHero
        eyebrow="Intelligence Centre"
        title="Today's Semiconductor Intelligence"
        subtitle="Daily Australian and global semiconductor news, research, funding, policy and events curated for Australia's semiconductor ecosystem."
        image="/images/homepage-hero.png"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Coming Soon
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl">
            The SIAA Intelligence Centre will provide daily Australian and global
            semiconductor news, research, funding opportunities, policy updates,
            events and industry analysis. This content will be updated
            automatically each day.
          </p>

        </div>
      </section>

    </main>
  );
}
