export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl bg-white border border-slate-200 rounded-xl p-12 shadow-sm">
        
        <div className="text-sm uppercase tracking-widest text-slate-500 mb-4">
          Semiconductor Industry Association of Australia
        </div>

        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          Coming Soon
        </h1>

        <p className="text-slate-600 text-lg leading-relaxed mb-8">
          This section of the website is currently under development.
          We are building out resources, insights, and industry content
          to support Australia’s semiconductor ecosystem.
        </p>

        <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
          <span className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></span>
          In development
        </div>
      </div>
    </main>
  );
}
