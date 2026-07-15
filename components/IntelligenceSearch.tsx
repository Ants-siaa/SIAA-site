"use client";

interface IntelligenceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function IntelligenceSearch({
  value,
  onChange,
}: IntelligenceSearchProps) {
  return (
    <section className="py-8 border-b border-slate-200 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="relative">

          <input
            type="text"
            placeholder="Search today's semiconductor intelligence..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-5 py-4 pl-12 text-lg focus:border-blue-500 focus:outline-none"
          />

          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            🔍
          </div>

        </div>

      </div>

    </section>
  );
}
