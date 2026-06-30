"use client";

import Link from "next/link";
import Image from "next/image";

interface MegaMenuProps {
  open: boolean;
}

export default function MegaMenu({ open }: MegaMenuProps) {
  if (!open) return null;

  return (
    <div className="absolute left-0 top-full mt-2 w-[760px] rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden">

      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-700 text-white px-8 py-6">

        <h3 className="text-xl font-semibold">
          Australia's Semiconductor Ecosystem
        </h3>

        <p className="text-blue-100 mt-2">
          Discover Australia's capabilities across the semiconductor value chain.
        </p>

      </div>

      <div className="grid grid-cols-3">

        {/* Left column */}
        <div className="col-span-2 p-8">

          <div className="grid grid-cols-2 gap-6">

            <MegaLink
              href="/semiconductor-manufacturing-australia"
              title="Semiconductor Manufacturing"
              text="Fabrication, packaging and advanced manufacturing."
            />

            <MegaLink
              href="/australian-chip-design"
              title="Chip Design"
              text="IC design, EDA and emerging technologies."
            />

            <MegaLink
              href="/compound-semiconductors-australia"
              title="Compound Semiconductors"
              text="GaN, SiC and next-generation materials."
            />

            <MegaLink
              href="/photonics-australia"
              title="Photonics"
              text="Integrated photonics and optical technologies."
            />

            <MegaLink
              href="/semiconductor-supply-chain"
              title="Supply Chain"
              text="Materials, equipment and supporting industries."
            />

            <MegaLink
              href="/workforce"
              title="Workforce"
              text="Building Australia's semiconductor talent."
            />

          </div>

        </div>

        {/* Right column */}

        <div className="bg-slate-50 border-l">

          <Image
            src="/images/chip.jpg"
            alt="Semiconductor"
            width={500}
            height={500}
            className="h-48 w-full object-cover"
          />

          <div className="p-6">

            <h4 className="font-semibold mb-2">
              Why Australia?
            </h4>

            <p className="text-sm text-slate-600 mb-5">

              Australia combines world-class research,
              critical minerals, advanced manufacturing,
              and a highly skilled workforce to support
              a growing semiconductor ecosystem.

            </p>

            <Link
              href="/industry"
              className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
            >
              Explore Industry →
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

function MegaLink({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-xl p-4 hover:bg-slate-50 transition"
    >
      <h4 className="font-semibold group-hover:text-blue-600">
        {title}
      </h4>

      <p className="text-sm text-slate-500 mt-2">
        {text}
      </p>
    </Link>
  );
}
