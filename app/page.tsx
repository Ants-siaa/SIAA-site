import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-white text-gray-900">

      {/* HERO SECTION */}
      <section className="relative w-full bg-gradient-to-r from-blue-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Strengthening Australia’s Semiconductor & Advanced Industry Future
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              SIAA connects industry, government, and research to accelerate
              innovation, capability, and global collaboration.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                href="/membership"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
              >
                Join SIAA
              </Link>

              <Link
                href="/about"
                className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-100"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* HERO IMAGE PLACEHOLDER */}
          <div className="w-full h-[320px] bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>

        </div>
      </section>

      {/* LOGO / PARTNER STRIP */}
      <section className="py-10 border-t border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-6 justify-center items-center">

          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo 1
          </div>

          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo 2
          </div>

          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo 3
          </div>

          <div className="w-32 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            Logo 4
          </div>

        </div>
      </section>

      {/* ABOUT / VALUE SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE PLACEHOLDER */}
          <div className="w-full h-[300px] bg-gray-200 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">About Image Placeholder</span>
          </div>

          <div>
            <h2 className="text-3xl font-bold">Building Australia’s Capability</h2>
            <p className="mt-4 text-gray-600">
              We support collaboration across semiconductor design, advanced manufacturing,
              workforce development, and international partnerships.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Industry collaboration & networking</li>
              <li>• Workforce & skills development</li>
              <li>• Global partnerships & alliances</li>
              <li>• Technology & innovation acceleration</li>
            </ul>
          </div>

        </div>
      </section>

      {/* WORKFORCE / FEATURE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">Key Focus Areas</h2>
          <p className="mt-3 text-gray-600">
            Driving impact across the semiconductor ecosystem
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500 text-sm">
                Image Placeholder
              </div>
              <h3 className="font-semibold text-lg">Workforce Development</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Building skills pipelines for advanced manufacturing and semiconductor roles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500 text-sm">
                Image Placeholder
              </div>
              <h3 className="font-semibold text-lg">Industry Growth</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Supporting companies scaling across the semiconductor value chain.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-500 text-sm">
                Image Placeholder
              </div>
              <h3 className="font-semibold text-lg">Global Partnerships</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Connecting Australia into international semiconductor ecosystems.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Join the Network?</h2>
        <p className="mt-4 text-blue-100">
          Become part of Australia’s growing semiconductor industry alliance.
        </p>

        <Link
          href="/membership"
          className="mt-8 inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100"
        >
          Join SIAA Today
        </Link>
      </section>

    </main>
  );
}
