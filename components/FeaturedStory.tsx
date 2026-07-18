import Image from "next/image";
import Link from "next/link";

interface FeaturedStoryProps {
  title: string;
  summary: string;
  why: string;
  image: string;
  href: string;
  category: string;
  date: string;
}

export default function FeaturedStory({
  title,
  summary,
  why,
  image,
  href,
  category,
  date,
}: FeaturedStoryProps) {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">

            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />

          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              ⭐ Featured Story · {category}
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight">
              {title}
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              {summary}
            </p>

            <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-6">

              <h3 className="font-semibold text-blue-900">
                Why this matters to Australia
              </h3>

              <p className="mt-3 text-slate-700 leading-relaxed">
                {why}
              </p>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <span className="text-sm text-slate-400">
                {date}
              </span>

              <Link
                href={href}
                className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
              >
                Read Article →
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
