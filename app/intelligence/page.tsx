"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import FeaturedStory from "@/components/FeaturedStory";
import IntelligenceCategory from "@/components/IntelligenceCategory";
import IntelligenceDashboard from "@/components/IntelligenceDashboard";
import SourceRibbon from "@/components/SourceRibbon";
import IntelligenceSearch from "@/components/IntelligenceSearch";
import {
  dashboard,
  featuredStory,
  categories,
} from "@/data/intelligence/today";

export default function IntelligencePage() {

  const [search, setSearch] = useState("");
  
  return (
    <main className="bg-white text-slate-900">

      <PageHero
        eyebrow="Intelligence Centre"
        title="Today's Semiconductor Intelligence"
        subtitle="Daily Australian and global semiconductor news, research, funding, policy and events curated for Australia's semiconductor ecosystem."
        image="/images/homepage-hero.png"
      />

      <IntelligenceDashboard
    updated={dashboard.updated}
/>
      <IntelligenceSearch
    value={search}
    onChange={setSearch}
/>
      <p className="mt-4 text-red-600">
  Search = "{search}"
</p>
      <p className="mt-3 text-sm text-slate-500">
  Showing stories matching "{search || "All"}"
</p>
      
      <SourceRibbon />
      
      <FeaturedStory {...featuredStory} />

   {categories.map((category) => {
  const filteredStories = category.stories.filter((story) => {
    const term = search.toLowerCase();

    return (
      story.title.toLowerCase().includes(term) ||
      story.summary.toLowerCase().includes(term) ||
      (story.category ?? "").toLowerCase().includes(term)
    );
  });

  if (filteredStories.length === 0) return null;

  return (
    <IntelligenceCategory
      key={category.id}
      id={category.id}
      icon={category.icon}
      title={category.title}
      description={category.description}
      stories={filteredStories}
    />
  );
})}

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

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
