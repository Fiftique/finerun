import Link from "next/link";

export default function MarathonsHero() {
  return (
    <section className="relative py-24 md:py-36 px-6 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/hero/hero2.jpg)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90" />

      {/* Pattern dots */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Linia decorativă */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 
                        backdrop-blur-sm rounded-full px-5 py-2 mb-8">
          <span className="text-yellow-400 text-sm">🏁</span>
          <span className="text-gray-300 text-xs sm:text-sm font-medium uppercase tracking-wider">
            Competiții & Maratoane
          </span>
        </div>

        {/* Titlu */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
          Aleargă cu
          <span className="text-yellow-400"> inima,</span>
          <br className="hidden sm:block" />
          termină cu
          <span className="text-yellow-400"> mândrie.</span>
        </h1>

        {/* Subtitlu */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          De la curse locale în Iași până la maratoane internaționale — descoperă 
          calendarul competițiilor și aleargă alături de echipa FineRun.
        </p>

        {/* Statistici inline */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mb-10">
          {[
            { numar: "30+", label: "Competiții" },
            { numar: "12", label: "Orașe" },
            { numar: "5", label: "Țări" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="block text-2xl sm:text-3xl md:text-4xl font-black text-white">
                {stat.numar}
              </span>
              <span className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Butoane */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#calendar"
            className="group inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 
                       text-gray-900 font-bold px-8 py-4 rounded-full transition-all 
                       duration-300 hover:scale-105 shadow-lg shadow-yellow-400/20 text-sm sm:text-base"
          >
            Vezi calendarul
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </a>
          <Link
            href="/aderare"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white 
                       font-medium px-6 py-4 rounded-full transition-colors text-sm sm:text-base
                       border border-white/10 hover:border-white/30"
          >
            Vreau să particip
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
