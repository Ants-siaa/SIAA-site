import Link from "next/link";

const sources = [
  { name: "Reuters", url: "https://www.reuters.com" },
  { name: "SEMI", url: "https://www.semi.org" },
  { name: "Nature", url: "https://www.nature.com" },
  { name: "CSIRO", url: "https://www.csiro.au" },
  { name: "ANFF", url: "https://anff.org.au" },
  { name: "TSMC", url: "https://www.tsmc.com" },
  { name: "Intel", url: "https://www.intel.com" },
  { name: "NVIDIA", url: "https://www.nvidia.com" },
  { name: "Samsung", url: "https://www.samsung.com" },
  { name: "IEEE", url: "https://www.ieee.org" },
];

export default function SourceRibbon() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex flex-col lg:flex-row lg:items-center gap-4">

          <div className="font-semibold text-slate-700 whitespace-nowrap">
            Today's Sources
          </div>

          <div className="flex flex-wrap gap-3">

            {sources.map((source) => (
              <Link
                key={source.name}
                href={source.url}
                target="_blank"
                className="rounded-full border border-slate-300 px-4 py-1 text-sm hover:bg-blue-50 hover:border-blue-500 transition"
              >
                {source.name}
              </Link>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
