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
      <FeaturedStory
  title="Queensland Strengthens Australia's Semiconductor Capability"
  summary="Queensland continues to invest in advanced manufacturing, workforce development and sovereign semiconductor capability through collaboration across industry, universities and government."
  why="The growth of Australia's semiconductor ecosystem is essential for national resilience, advanced manufacturing and participation in global supply chains."
  image="/images/homepage-hero.png"
  href="#"
  category="Australian Industry"
  date="14 July 2026"
/>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          import FeaturedStory from "@/components/FeaturedStory";

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
