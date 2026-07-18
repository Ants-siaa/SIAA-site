import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  eyebrow?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  eyebrow,
}: PageHeroProps) {
  return (
    <section className="relative h-[460px] overflow-hidden">

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/65" />

      <div className="absolute inset-0 flex items-center">

        <div className="max-w-7xl mx-auto px-6 text-white">

          {eyebrow && (
            <p className="uppercase tracking-[0.3em] text-blue-300">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-5xl font-bold">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl text-slate-200 leading-relaxed">
            {subtitle}
          </p>

        </div>

      </div>

    </section>
  );
}
