
import Link from "next/link";

type PlaceholderPageProps = {
  title?: string;
};

function PlaceholderPage({ title = "Coming Soon" }: PlaceholderPageProps) {
  return (
    <main className="bg-white text-slate-900 min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">

        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-8">
          <span className="text-3xl">🚧</span>
        </div>

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-xl text-slate-600 leading-relaxed mb-10">
          This section of the SIAA website is currently under development.
          New content will be available soon.
        </p>

        <div className="flex justify-center gap-4">

          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium"
          >
            Return Home
          </Link>

          <Link
            href="/contact"
            className="border border-slate-300 hover:bg-slate-100 px-8 py-4 rounded-lg font-medium"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </main>
  );
}

export default function Page() {
  return <PlaceholderPage />;
}
