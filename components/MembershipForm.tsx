"use client";

import { useEffect } from "react";

export default function MembershipForm() {

  useEffect(() => {

    const script = document.createElement("script");

    script.src =
      "https://js-ap1.hsforms.net/forms/embed/442406313.js";

    script.defer = true;

    document.body.appendChild(script);

  }, []);

  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Join SIAA
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Complete the membership application below and become part of
            Australia's growing semiconductor ecosystem.
          </p>

        </div>

        <div className="mt-14 rounded-2xl bg-white shadow-lg p-8">

          <div
            className="hs-form-frame"
            data-region="ap1"
            data-form-id="64d94076-6280-4528-ade3-d2166853b484"
            data-portal-id="442406313"
          />

        </div>

      </div>

    </section>
  );
}
