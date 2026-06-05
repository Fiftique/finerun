import Image from "next/image";
import Link from "next/link";

export default function ArticolFeatured() {
  return (
    <section className="pt-8 md:pt-14 pb-10 md:pb-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            📰 Noutăți
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Card featured */}
        <Link href="/noutati/articol-1" className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-50 rounded-2xl overflow-hidden 
                          border border-gray-100 hover:border-yellow-200 hover:shadow-xl transition-all duration-500">
            
            {/* Imagine */}
            <div className="relative h-[250px] sm:h-[300px] lg:h-[420px] overflow-hidden">
              <Image
                src="/news/featured.jpg"
                alt="Articol principal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Badge categorie */}
              <div className="absolute top-4 left-4">
                <span className="bg-yellow-400 text-gray-900 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  Eveniment
                </span>
              </div>
            </div>

            {/* Conținut */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              {/* Data + Autor */}
              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  2 Iunie 2026
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  Echipa FineRun
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full" />
                <span>5 min citire</span>
              </div>

              {/* Titlu */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 
                             group-hover:text-yellow-600 transition-colors leading-snug">
                FineRun participă cu 25 de alergători la Maratonul Iași 2026 — cea mai mare echipă din istorie
              </h2>

              {/* Rezumat */}
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3">
                Suntem mândri să anunțăm că asociația FineRun va fi prezentă la Maratonul Iași 2026 
                cu cea mai mare delegație de până acum. 25 de alergători, de la începători care vor 
                alerga primii lor 10 kilometri până la veterani care atacă proba de maraton complet, 
                vor purta culorile FineRun pe străzile Iașului. Pregătirile au început încă din martie, 
                cu antrenamente de grup de trei ori pe săptămână.
              </p>

              {/* Tags + CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {["Maraton", "Iași", "2026"].map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-600 text-[10px] sm:text-xs font-medium px-3 py-1 rounded-full
                                 group-hover:bg-yellow-100 group-hover:text-yellow-700 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 
                                 group-hover:text-yellow-600 transition-colors">
                  Citește articolul
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                       className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}