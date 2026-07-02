import Link from "next/link";
import Image from "next/image";

const focusAreas = [
  {
    title: "Workforce & Skills",
    image: "/images/workforce.png",
    description:
      "Building Australia's next generation of semiconductor engineers, technicians and researchers.",
    link: "/workforce",
  },
  {
    title: "Global Partnerships",
    image: "/images/global-network.png",
    description:
      "Connecting Australia with the world's leading semiconductor ecosystems.",
    link: "/global-partnerships",
  },
  {
    title: "Industry Advocacy",
    image: "/images/parliament.png",
    description:
      "Championing policies and investment that strengthen Australia's semiconductor future.",
    link: "/advocacy",
  },
];

export default function StrategicPriorities() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            Our Strategic Priorities
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            Driving Australia's Semiconductor Future
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            SIAA works across government, industry, research and education
            to strengthen Australia's semiconductor ecosystem and create
            long-term economic opportunity.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-56 overflow-hidden">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-7">

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                <Link
                  href={item.link}
                  className="inline-flex items-center mt-6 font-medium text-blue-600 hover:text-blue-800"
                >
                  Learn more →
                </Link>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
