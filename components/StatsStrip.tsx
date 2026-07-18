interface Stat {

  number: string;

  label: string;

}

interface Props {

  stats: Stat[];

}

export default function StatsStrip({ stats }: Props) {

  return (

    <section className="py-16 bg-blue-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="text-center"
            >

              <div className="text-5xl font-bold text-blue-700">

                {stat.number}

              </div>

              <p className="mt-3 text-slate-600">

                {stat.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}
