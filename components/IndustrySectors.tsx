import Link from "next/link";
import Image from "next/image";

const sectors = [
  {
    title: "Semiconductor Manufacturing",
    image: "/images/manufacturing.png",
    description:
      "Advanced fabrication, packaging and manufacturing capability.",
    link: "/semiconductor-manufacturing-australia",
  },
  {
    title: "Chip Design",
    image: "/images/chip-design.png",
    description:
      "Integrated circuit design, IP development and EDA technologies.",
    link: "/australian-chip-design",
  },
  {
    title: "Photonics",
    image: "/images/photonics.png",
    description:
      "Integrated photonics and optical technologies powering the future.",
    link: "/photonics-australia",
  },
  {
    title: "Compound Semiconductors",
    image: "/images/compound-semiconductors.png",
    description:
      "GaN, SiC and emerging materials for next-generation devices.",
    link: "/compound-semiconductors-australia",
  },
  {
    title: "Supply Chain",
    image: "/images/supply-chain.png",
    description:
      "Equipment, materials and specialist suppliers supporting industry.",
    link: "/semiconductor-supply-chain",
  },
  {
    title: "Workforce",
    image: "/images/workforce.png",
    description:
      "Developing Australia's semiconductor workforce and future talent.",
    link: "/workforce",
  },
];

export default function IndustrySectors() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Australia's Semiconductor Ecosystem
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Discover Australia's Industry
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Australia's semiconductor capability spans advanced manufacturing,
            chip design, photonics, compound semiconductors, supply chains and
            workforce development.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {sectors.map((sector) => (
            <Link
              key={sector.title}
              href={sector.link}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56">

                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {sector.title}
                </h3>

                <p className="mt-3 text-slate-600">
                  {sector.description}
                </p>

                <span className="inline-block mt-6 font-medium text-blue-600">
                  Explore sector →
                </span>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}
