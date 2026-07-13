import Script from "next/script";

export default function MembershipPage() {
  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <p className="uppercase tracking-[0.3em] text-blue-300">
            Membership
          </p>

          <h1 className="mt-4 text-5xl font-bold">
            Join Australia's Semiconductor Community
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300 leading-relaxed">
            Become part of Australia's peak semiconductor industry
            association and help shape the future of our national
            semiconductor ecosystem.
          </p>

        </div>

      </section>

      {/* ================= WHY JOIN ================= */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-4xl font-bold">
              Why Become a Member?
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Membership provides opportunities to collaborate,
              influence policy, connect with industry leaders and
              contribute to Australia's growing semiconductor sector.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Industry Advocacy</h3>
              <p className="mt-4 text-slate-600">
                Help shape national policy and investment in Australia's semiconductor industry.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Networking</h3>
              <p className="mt-4 text-slate-600">
                Connect with industry leaders, researchers, government and investors.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Events</h3>
              <p className="mt-4 text-slate-600">
                Access conferences, webinars, workshops and member-only networking events.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Industry News</h3>
              <p className="mt-4 text-slate-600">
                Stay informed with newsletters, policy updates and market insights.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Collaboration</h3>
              <p className="mt-4 text-slate-600">
                Develop partnerships across Australia's semiconductor ecosystem.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <h3 className="font-semibold text-xl">Visibility</h3>
              <p className="mt-4 text-slate-600">
                Showcase your organisation through SIAA activities and future member directory.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= MEMBERSHIP FEES ================= */}

      <section className="bg-slate-50 py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Membership Fees
          </h2>

          <p className="text-center text-slate-600 mt-4">
            Choose the membership category that best suits you or your organisation.
          </p>

          <div className="mt-14 overflow-hidden rounded-2xl border bg-white">

            <table className="w-full">

              <thead className="bg-blue-900 text-white">

                <tr>
                  <th className="text-left p-5">Membership Type</th>
                  <th className="text-right p-5">Annual Fee</th>
                </tr>

              </thead>

             <tbody>

  <tr className="border-t hover:bg-slate-50">
    <td className="p-5 font-medium">
      Individual Member
    </td>
    <td className="p-5 text-right font-semibold text-blue-700">
      $100
    </td>
  </tr>

  <tr className="border-t hover:bg-slate-50">
    <td className="p-5 font-medium">
      SME / University Group
    </td>
    <td className="p-5 text-right font-semibold text-blue-700">
      $1,000
    </td>
  </tr>

  <tr className="border-t hover:bg-slate-50">
    <td className="p-5 font-medium">
      Corporate / Government
    </td>
    <td className="p-5 text-right font-semibold text-blue-700">
      $2,500
    </td>
  </tr>

  <tr className="border-t hover:bg-slate-50">
    <td className="p-5 font-medium">
      Corporate / Government (100+ employees)
    </td>
    <td className="p-5 text-right font-semibold text-blue-700">
      $5,000
    </td>
  </tr>

</tbody>

            </table>

          </div>

        </div>

      </section>

      {/* ================= APPLICATION FORM ================= */}

      <section className="py-20">

        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Apply for Membership
            </h2>

            <p className="mt-4 text-slate-600">
              Complete the form below and we'll be in touch shortly.
            </p>

          </div>

          <div className="bg-white rounded-2xl shadow-lg border p-8">

            <Script
              src="https://js-ap1.hsforms.net/forms/embed/442406313.js"
              strategy="afterInteractive"
            />

            <div
              className="hs-form-frame"
              data-region="ap1"
              data-form-id="64d94076-6280-4528-ade3-d2166853b484"
              data-portal-id="442406313"
            />

          </div>

        </div>

      </section>

    </main>
  );
}
