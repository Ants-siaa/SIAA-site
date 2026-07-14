interface IntelligenceDashboardProps {
  updated: string;
}

export default function IntelligenceDashboard({
  updated,
}: IntelligenceDashboardProps) {
  return (
    <section className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2">

            <p className="uppercase tracking-[0.25em] text-blue-600 font-semibold text-sm">
              Morning Briefing
            </p>

            <h2 className="text-4xl font-bold mt-2">
              Today's Intelligence Snapshot
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Curated semiconductor intelligence from Australia and around the
              world, updated automatically each morning.
            </p>

          </div>

          {/* Right */}

          <div className="bg-white rounded-2xl shadow border border-slate-200 p-6">

            <div className="flex justify-between py-2">
              <span>🇦🇺 Australian Industry</span>
              <strong>12</strong>
            </div>

            <div className="flex justify-between py-2">
              <span>🌏 Global Industry</span>
              <strong>20</strong>
            </div>

            <div className="flex justify-between py-2">
              <span>🔬 Research</span>
              <strong>6</strong>
            </div>

            <div className="flex justify-between py-2">
              <span>💰 Funding</span>
              <strong>4</strong>
            </div>

            <div className="flex justify-between py-2">
              <span>🏛 Government</span>
              <strong>3</strong>
            </div>

            <div className="flex justify-between py-2">
              <span>📅 Events</span>
              <strong>3</strong>
            </div>

            <hr className="my-5" />

            <div className="flex justify-between text-lg">
              <span className="font-semibold">
                Total Stories
              </span>

              <strong className="text-blue-600">
                48
              </strong>

            </div>

            <p className="text-sm text-slate-500 mt-5">
              Last updated {updated}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
