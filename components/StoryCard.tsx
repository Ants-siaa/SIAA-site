import Link from "next/link";

interface StoryCardProps {
  title: string;
  summary: string;
  href: string;
  category?: string;
  date?: string;
}

export default function StoryCard({
  title,
  summary,
  href,
  category,
  date,
}: StoryCardProps) {
  return (
    <Link
      href={href}
      className="block rounded-xl border border-slate-200 bg-white p-6 hover:shadow-lg transition"
    >
      {category && (
        <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
          {category}
        </p>
      )}

      <h3 className="mt-3 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 leading-relaxed">
        {summary}
      </p>

      {date && (
        <p className="mt-4 text-sm text-slate-400">
          {date}
        </p>
      )}

      <p className="mt-5 font-medium text-blue-600">
        Read article →
      </p>
    </Link>
  );
}
