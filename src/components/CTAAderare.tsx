import Link from "next/link";

export default function CTAAderare() {
  return (
    <section className="relative py-20 md:py-28 px-6 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl" />
      </div>

      {/* Pattern dots */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Emoji animat */}
        <div className="text-5xl sm:text-6xl md:text-7xl mb-6 animate-bounce">
          🏃‍♂️
        </div>

        {/* Titlu */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          Vino alături de
          <span className="text-yellow-400"> FineRun!</span>
        </h2>

        {/* Descriere */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Nu contează dacă ești la primul kilometru sau pregătești al zecelea maraton. 
          La FineRun găsești o comunitate care te susține, te motivează și aleargă alături de tine.
        </p>

        {/* Beneficii rapide */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
          {[
            "Antrenamente gratuite",
            "Comunitate activă",
            "Acces la competiții",
            "Echipament personalizat",
          ].map((beneficiu) => (
            <span
              key={beneficiu}
              className="bg-white/10 text-gray-300 text-xs sm:text-sm px-4 py-2 rounded-full 
                         border border-white/10 backdrop-blur-sm"
            >
              ✓ {beneficiu}
            </span>
          ))}
        </div>

        {/* Butoane */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/aderare"
            className="group inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 
                       text-gray-900 font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full 
                       transition-all duration-300 hover:scale-105 shadow-lg shadow-yellow-400/25
                       text-base sm:text-lg"
          >
            Vreau să mă alătur
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white 
                       font-medium px-6 py-4 rounded-full transition-colors text-sm sm:text-base
                       border border-white/10 hover:border-white/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
            </svg>
            Contactează-ne
          </Link>
        </div>
      </div>
    </section>
  );
}
