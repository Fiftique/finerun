"use client";

import { useState } from "react";

const program = [
  {
    zi: "Luni",
    ziScurt: "LUN",
    sesiuni: [
      {
        ora: "06:30 - 07:30",
        tip: "Easy Run",
        descriere: "Alergare ușoară, ritm conversațional",
        locatie: "Parcul Copou",
        nivel: "Toate nivelurile",
        antrenor: "Coach Mihai",
        icon: "🏃",
      },
      {
        ora: "18:30 - 20:00",
        tip: "Interval Training",
        descriere: "Repetări pe distanțe scurte cu pauze active",
        locatie: "Stadionul Emil Alexandrescu",
        nivel: "Intermediar+",
        antrenor: "Coach Andrei",
        icon: "⚡",
      },
    ],
  },
  {
    zi: "Marți",
    ziScurt: "MAR",
    sesiuni: [
      {
        ora: "07:00 - 08:00",
        tip: "Strength & Core",
        descriere: "Exerciții de forță și stabilitate pentru alergători",
        locatie: "Parcul Copou",
        nivel: "Toate nivelurile",
        antrenor: "Coach Ana",
        icon: "💪",
      },
    ],
  },
  {
    zi: "Miercuri",
    ziScurt: "MIE",
    sesiuni: [
      {
        ora: "06:30 - 07:30",
        tip: "Tempo Run",
        descriere: "Alergare la prag anaerob, ritm susținut",
        locatie: "Parcul Copou",
        nivel: "Intermediar+",
        antrenor: "Coach Mihai",
        icon: "🔥",
      },
      {
        ora: "18:30 - 19:30",
        tip: "Easy Run pentru începători",
        descriere: "Sesiune dedicată celor la primele antrenamente",
        locatie: "Parcul Expo",
        nivel: "Începător",
        antrenor: "Coach Diana",
        icon: "🌱",
      },
    ],
  },
  {
    zi: "Joi",
    ziScurt: "JOI",
    sesiuni: [
      {
        ora: "07:00 - 08:00",
        tip: "Stretching & Mobilitate",
        descriere: "Sesiune de recuperare activă și flexibilitate",
        locatie: "Parcul Copou",
        nivel: "Toate nivelurile",
        antrenor: "Coach Ana",
        icon: "🧘",
      },
    ],
  },
  {
    zi: "Vineri",
    ziScurt: "VIN",
    sesiuni: [
      {
        ora: "06:30 - 07:30",
        tip: "Fartlek",
        descriere: "Joc de viteză — variații de ritm pe teren natural",
        locatie: "Parcul Copou",
        nivel: "Intermediar+",
        antrenor: "Coach Andrei",
        icon: "🎯",
      },
    ],
  },
  {
    zi: "Sâmbătă",
    ziScurt: "SÂM",
    sesiuni: [
      {
        ora: "08:00 - 10:00",
        tip: "Long Run",
        descriere: "Alergare lungă de weekend — distanța crește progresiv",
        locatie: "Traseul Ciric - Copou",
        nivel: "Toate nivelurile",
        antrenor: "Coach Mihai & Coach Diana",
        icon: "🏅",
      },
    ],
  },
  {
    zi: "Duminică",
    ziScurt: "DUM",
    sesiuni: [],
  },
];

const nivelColor: Record<string, { bg: string; text: string }> = {
  "Începător": { bg: "bg-green-100", text: "text-green-700" },
  "Intermediar+": { bg: "bg-orange-100", text: "text-orange-700" },
  "Toate nivelurile": { bg: "bg-blue-100", text: "text-blue-700" },
};

export default function ProgramSaptamanal() {
  const [activeZi, setActiveZi] = useState("Luni");

  const ziSelectata = program.find((p) => p.zi === activeZi)!;

  return (
    <section className="pt-8 md:pt-14 pb-16 md:pb-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            🗓️ Program săptămânal
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Antrenamente FineRun
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Alege ziua, alege sesiunea și vino să alergi cu noi. Toate antrenamentele sunt gratuite pentru membri.
          </p>
        </div>

        {/* Selector zile */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-2xl p-1.5 gap-1 overflow-x-auto max-w-full">
            {program.map((p) => (
              <button
                key={p.zi}
                onClick={() => setActiveZi(p.zi)}
                className={`relative px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold 
                           transition-all duration-300 shrink-0
                  ${
                    activeZi === p.zi
                      ? "bg-gray-900 text-yellow-400 shadow-lg"
                      : p.sesiuni.length === 0
                      ? "text-gray-400 hover:text-gray-600"
                      : "text-gray-600 hover:bg-white hover:shadow-sm"
                  }`}
              >
                {/* Nume scurt pe mobil, complet pe desktop */}
                <span className="sm:hidden">{p.ziScurt}</span>
                <span className="hidden sm:inline">{p.zi}</span>

                {/* Indicator sesiuni */}
                {p.sesiuni.length > 0 && activeZi !== p.zi && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Conținut zi selectată */}
        <div className="min-h-[300px]">
          {ziSelectata.sesiuni.length === 0 ? (
            /* Zi de odihnă */
            <div className="text-center py-16 bg-gray-50 rounded-2xl border border-gray-100">
              <span className="text-5xl sm:text-6xl block mb-4">😴</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Zi de odihnă
              </h3>
              <p className="text-gray-500 text-sm sm:text-base max-w-md mx-auto">
                Recuperarea este la fel de importantă ca antrenamentul. 
                Odihnește-te, hidratează-te și pregătește-te pentru săptămâna care vine!
              </p>
            </div>
          ) : (
            /* Sesiuni */
            <div className="space-y-4">
              {ziSelectata.sesiuni.map((sesiune, index) => (
                <div
                  key={index}
                  className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-yellow-200 
                             rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center gap-5">
                    {/* Ora + Icon */}
                    <div className="flex items-center gap-4 lg:min-w-[200px]">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 rounded-xl flex items-center justify-center 
                                      text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {sesiune.icon}
                      </div>
                      <div>
                        <span className="block text-sm sm:text-base font-bold text-gray-900">
                          {sesiune.ora}
                        </span>
                        <span className={`inline-block text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full mt-1
                          ${nivelColor[sesiune.nivel]?.bg || "bg-gray-100"} 
                          ${nivelColor[sesiune.nivel]?.text || "text-gray-600"}`}
                        >
                          {sesiune.nivel}
                        </span>
                      </div>
                    </div>

                    {/* Separator vertical desktop */}
                    <div className="hidden lg:block w-px h-14 bg-gray-200 shrink-0" />

                    {/* Info */}
                    <div className="flex-1">
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 
                                     group-hover:text-yellow-600 transition-colors">
                        {sesiune.tip}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {sesiune.descriere}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {sesiune.locatie}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          {sesiune.antrenor}
                        </span>
                      </div>
                    </div>

                    {/* Buton */}
                    <div className="shrink-0">
                      <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 
                                         text-white hover:text-gray-900 font-bold text-xs sm:text-sm 
                                         px-5 py-3 rounded-xl transition-all duration-300 
                                         hover:scale-105 w-full lg:w-auto justify-center">
                        Vreau să particip
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Notă */}
        <div className="mt-8 flex items-start gap-3 bg-yellow-50 border border-yellow-200 rounded-xl p-4 sm:p-5">
          <span className="text-xl shrink-0">💡</span>
          <div>
            <p className="text-sm text-yellow-800 font-semibold mb-1">Bun de știut</p>
            <p className="text-xs sm:text-sm text-yellow-700">
              Programul se poate modifica în funcție de vreme sau evenimente speciale. 
              Urmărește-ne pe Instagram{" "}
              <a href="https://instagram.com/finerun.ro" target="_blank" rel="noopener noreferrer" 
                 className="font-bold underline hover:text-yellow-900">
                @finerun.ro
              </a>{" "}
              pentru actualizări în timp real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
