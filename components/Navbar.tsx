export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          <div className="text-2xl font-bold text-slate-900">
            SIAA
          </div>

          <nav className="hidden md:flex gap-8 text-slate-700">

            <a href="#">About</a>
            <a href="#">Industry</a>
            <a href="#">Membership</a>
            <a href="#">Events</a>
            <a href="#">News</a>

          </nav>

          <button className="rounded-full bg-blue-700 px-6 py-3 text-white">
            Join Now
          </button>

        </div>

      </div>

    </header>
  );
}