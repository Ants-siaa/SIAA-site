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
      
      {search.trim() === "" && (
  <FeaturedStory {...featuredStory} />
)}
{search.trim() !== "" && (
  <section className="py-10 border-b border-slate-200 bg-blue-50">
    <div className="max-w-7xl mx-auto px-6">

      <div className="flex items-center justify-between flex-wrap gap-4">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Search Results
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Results for "{search}"
          </h2>

          <p className="mt-3 text-slate-600">
            Showing semiconductor news matching your search.
          </p>
        </div>

        <button
          onClick={() => setSearch("")}
          className="rounded-lg border border-slate-300 bg-white px-5 py-3 hover:bg-slate-50 transition"
        >
          Clear Search
        </button>

      </div>

    </div>
  </section>
)}
      
   {categories.map((category) => {
  const term = search.trim().toLowerCase();

  const filteredStories =
    term === ""
      ? category.stories
      : category.stories.filter((story) => {
          return (
            story.title.toLowerCase().includes(term) ||
            story.summary.toLowerCase().includes(term) ||
            (story.category ?? "").toLowerCase().includes(term)
          );
        });

  if (filteredStories.length === 0) {
    return null;
  }

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
