interface BriefingHeaderProps {
  storyCount: number;
  sourceCount: number;
  updated: string;
}

export default function BriefingHeader({
  storyCount,
  sourceCount,
  updated,
}: BriefingHeaderProps) {
  const today = new Date().toLocaleDateString("en-AU", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          <div>

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm">
              Morning Briefing
            </p>

            <h2 className="text-3xl font-bold mt-2">
              {today}
            </h2>

            <p className="mt-3 text-slate-600">
              Daily semiconductor intelligence curated for Australia's
              semiconductor ecosystem.
            </p>

          </div>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-white rounded-xl border border-slate-200 px-6 py-5 text-center shadow-sm">

              <div className="text-3xl font-bold text-blue-600">
                {storyCount}
              </div>

              <p className="text-sm text-slate-500 mt-1">
                Stories
              </p>

            </div>

            <div className="bg-white rounded-xl border border-slate-200 px-6 py-5 text-center shadow-sm">

              <div className="text-3xl font-bold text-blue-600">
                {sourceCount}
              </div>

              <p className="text-sm text-slate-500 mt-1">
                Sources
              </p>

            </div>

            <div className="bg-white rounded-xl border border-slate-200 px-6 py-5 text-center shadow-sm">

              <div className="text-lg font-semibold text-blue-600">
                {updated}
              </div>

              <p className="text-sm text-slate-500 mt-1">
                Updated
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
