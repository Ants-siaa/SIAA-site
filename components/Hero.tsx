export default function Hero() {
  return (
    <section className="bg-white">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid lg:grid-cols-2 gap-16 min-h-[90vh] items-center">

          <div>

            <div className="inline-block rounded-full bg-blue-50 px-4 py-2 text-blue-700 mb-6">
              Semiconductor Industry Association of Australia
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Building Australia's
              <span className="block text-blue-700">
                Semiconductor Future
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600 max-w-2xl">
              Connecting industry, government,
              researchers, investors and future talent
              to build a globally competitive ecosystem.
            </p>

            <div className="mt-10 flex gap-4">

              <button className="rounded-full bg-blue-700 px-8 py-4 text-white hover:bg-blue-800">
                Become a Member
              </button>

              <button className="rounded-full border border-slate-300 px-8 py-4 text-slate-800">
                Explore Industry
              </button>
            
            </div>
            <p className="mt-8 text-xl text-slate-600 max-w-2xl">
              Connecting Industry, Academia, Government and Investors.
            </p>
            
          </div>

          <div>

            <div className="rounded-3xl bg-slate-100 h-[500px] flex items-center justify-center">

              <div className="text-center">

                <div className="text-6xl mb-4">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  Australian Semiconductor Ecosystem
                </h3>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
