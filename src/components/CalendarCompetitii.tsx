"use client";

import { useState } from "react";

const competitii = [
  {
    luna: "IUL",
    zi: "13",
    titlu: "Crosul Copou",
    locatie: "Iași, Grădina Botanică",
    tara: "🇷🇴",
    distante: ["5K", "10K"],
    status: "inscrieri-deschise",
    dificultate: "Ușor",
    linkInscriere: "#",
  },
  {
    luna: "AUG",
    zi: "24",
    titlu: "Maratonul Iași",
    locatie: "Iași, Palatul Culturii",
    tara: "🇷🇴",
    distante: ["10K", "21K", "42K"],
    status: "inscrieri-deschise",
    dificultate: "Mediu",
    linkInscriere: "#",
  },
  {
    luna: "SEP",
    zi: "07",
    titlu: "Trail Running Ceahlău",
    locatie: "Ceahlău, Neamț",
    tara: "🇷🇴",
    distante: ["15K", "30K"],
    status: "inscrieri-deschise",
    dificultate: "Avansat",
    linkInscriere: "#",
  },
  {
    luna: "SEP",
    zi: "28",
    titlu: "Semimaratonul București",
    locatie: "București, Parcul Herăstrău",
    tara: "🇷🇴",
    distante: ["5K", "10K", "21K"],
    status: "inscrieri-deschise",
    dificultate: "Mediu",
    linkInscriere: "#",
  },
  {
    luna: "OCT",
    zi: "12",
    titlu: "Maratonul Budapesta",
    locatie: "Budapesta, Ungaria",
    tara: "🇭🇺",
    distante: ["10K", "21K", "42K"],
    status: "locuri-limitate",
    dificultate: "Mediu",
    linkInscriere: "#",
  },
  {
    luna: "NOV",
    zi: "02",
    titlu: "Maratonul Atena",
    locatie: "Atena, Grecia",
    tara: "🇬🇷",
    distante: ["10K", "42K"],
    status: "locuri-limitate",
    dificultate: "Avansat",
    linkInscriere: "#",
  },
  {
    luna: "NOV",
    zi: "23",
    titlu: "Ultramaratonul Bâlea",
    locatie: "Transfăgărășan, Sibiu",
    tara: "🇷🇴",
    distante: ["50K", "100K"],
    status: "coming-soon",
    dificultate: "Expert",
    linkInscriere: "#",
  },
];

const filters = ["Toate", "Ușor", "Mediu", "Avansat", "Expert"];

const statusConfig: Record<string, { label: string; classes: string }> = {
  "inscrieri-deschise": {
    label: "Înscrieri deschise",
    classes: "bg-green-100 text-green-700",
  },
  "locuri-limitate": {
    label: "Locuri limitate",
    classes: "bg-orange-100 text-orange-700",
  },
  "coming-soon": {
    label: "În curând",
    classes: "bg-gray-100 text-gray-500",
  },
};

const dificultateColor: Record<string, string> = {
  "Ușor": "text-green-500",
  "Mediu": "text-yellow-500",
  "Avansat": "text-orange-500",
  "Expert": "text-red-500",
};

export default function CalendarCompetitii() {
  const [activeFilter, setActiveFilter] = useState("Toate");

  const filtered =
    activeFilter === "Toate"
      ? competitii
      : competitii.filter((c) => c.dificultate === activeFilter);

  return (
    <section id="calendar" className="py-16 md:py-24 px-6 bg-white scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            📅 Sezonul 2026
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Calendarul competițiilor
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Alege cursa ta și aleargă alături de echipa FineRun. Locurile sunt limitate — înscrie-te din timp!
          </p>
        </div>

        {/* Filtre */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                ${
                  activeFilter === f
                    ? "bg-gray-900 text-yellow-400 shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Lista competiții */}
        <div className="space-y-4">
          {filtered.map((comp, index) => {
            const status = statusConfig[comp.status];
            return (
              <div
                key={index}
                className="group bg-gray-50 hover:bg-white border border-gray-100 hover:border-yellow-200 
                           rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  {/* Data */}
                  <div className="flex sm:flex-col items-center sm:items-center gap-2 sm:gap-0 
                                  bg-gray-900 text-white rounded-xl px-4 py-2 sm:px-5 sm:py-3 
                                  min-w-[70px] text-center shrink-0">
                    <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-yellow-400">
                      {comp.luna}
                    </span>
                    <span className="text-xl sm:text-2xl font-black leading-none">{comp.zi}</span>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {comp.tara} {comp.titlu}
                      </h3>
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full ${status.classes}`}>
                        {status.label}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-gray-500">
                      {/* Locație */}
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {comp.locatie}
                      </span>
                      {/* Dificultate */}
                      <span className={`flex items-center gap-1 font-semibold ${dificultateColor[comp.dificultate]}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                        </svg>
                        {comp.dificultate}
                      </span>
                    </div>
                  </div>

                  {/* Distanțe + Buton */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
                    <div className="flex flex-wrap gap-1.5">
                      {comp.distante.map((d) => (
                        <span
                          key={d}
                          className="bg-gray-200 group-hover:bg-yellow-100 group-hover:text-yellow-800 
                                     text-gray-700 text-[10px] sm:text-xs font-bold px-2.5 py-1 
                                     rounded-full transition-colors"
                        >
                          {d}
                        </span>
                      ))}
                    </div>

                    {comp.status !== "coming-soon" ? (
                      <a
                        href={comp.linkInscriere}
                        className="inline-flex items-center gap-1.5 bg-gray-900 hover:bg-yellow-400 
                                   text-white hover:text-gray-900 font-bold text-xs sm:text-sm 
                                   px-5 py-2.5 rounded-full transition-all duration-300 
                                   hover:scale-105 shrink-0"
                      >
                        Înscrie-te
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-xs text-gray-400 font-medium px-5 py-2.5 border border-dashed border-gray-300 rounded-full shrink-0">
                        În curând
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-gray-500">Nu există competiții pentru acest nivel de dificultate.</p>
          </div>
        )}
      </div>
    </section>
  );
}
