import Link from "next/link";

interface CTASectionProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title,
  description,
  buttonText = "Join SIAA",
  buttonLink = "/membership",
}: CTASectionProps) {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h2 className="text-4xl font-bold">
          {title}
        </h2>

        <p className="mt-6 text-blue-100 text-lg">
          {description}
        </p>

        <div className="mt-10">
          <Link
            href={buttonLink}
            className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition"
          >
            {buttonText}
          </Link>
        </div>

      </div>
    </section>
  );
}
