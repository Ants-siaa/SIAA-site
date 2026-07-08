import Image from "next/image";
import Link from "next/link";<footer className="bg-slate-950 text-white">

  <div className="max-w-7xl mx-auto px-6 py-16">

    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">

      {/* Logo */}
      <div>

        <Image
          src="/images/SIAA-logo-white.png"
          alt="SIAA"
          width={180}
          height={55}
        />

        <p className="mt-5 text-slate-400 leading-relaxed">
          The national voice for Australia's semiconductor industry,
          connecting industry, government and research to strengthen
          sovereign capability.
        </p>

      </div>

      {/* Quick Links */}
      <div>

        <h3 className="font-semibold mb-5">
          Quick Links
        </h3>

        <ul className="space-y-3 text-slate-400">

          <li><Link href="/about">About</Link></li>

          <li><Link href="/membership">Membership</Link></li>

          <li><Link href="/industry">Industry</Link></li>

          <li><Link href="/news">News</Link></li>

          <li><Link href="/events">Events</Link></li>

          <li><Link href="/contact">Contact</Link></li>

        </ul>

      </div>

      {/* Industry */}
      <div>

        <h3 className="font-semibold mb-5">
          Industry
        </h3>

        <ul className="space-y-3 text-slate-400">

          <li>
            <Link href="/semiconductor-manufacturing-australia">
              Manufacturing
            </Link>
          </li>

          <li>
            <Link href="/australian-chip-design">
              Chip Design
            </Link>
          </li>

          <li>
            <Link href="/photonics-australia">
              Photonics
            </Link>
          </li>

          <li>
            <Link href="/compound-semiconductors-australia">
              Compound Semiconductors
            </Link>
          </li>

          <li>
            <Link href="/semiconductor-supply-chain">
              Supply Chain
            </Link>
          </li>

          <li>
            <Link href="/workforce">
              Workforce
            </Link>
          </li>

        </ul>

      </div>

      {/* Contact */}
      <div>

        <h3 className="font-semibold mb-5">
          Contact
        </h3>

        <div className="space-y-3 text-slate-400">

          <p>info@siaa.org.au</p>

          <p>LinkedIn</p>

          <p>Canberra, Australia</p>

        </div>

      </div>

      {/* Newsletter */}
      <div>

        <h3 className="font-semibold mb-5">
          Newsletter
        </h3>

        <p className="text-slate-400 mb-4">
          Stay informed with Australia's latest semiconductor news.
        </p>

        <div className="flex">

          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded-l-md px-4 py-3 bg-slate-800 border border-slate-700 focus:outline-none"
          />

          <button
            className="bg-blue-600 px-5 rounded-r-md hover:bg-blue-700"
          >
            →
          </button>

        </div>

      </div>

    </div>

    <div className="border-t border-slate-800 mt-14 pt-8 flex flex-col md:flex-row justify-between text-sm text-slate-500">

      <p>
        © 2026 Semiconductor Industry Association of Australia
      </p>

      <div className="flex gap-6">

        <Link href="/privacy">
          Privacy Policy
        </Link>

        <Link href="/terms">
          Terms of Use
        </Link>

      </div>

    </div>

  </div>

</footer>
