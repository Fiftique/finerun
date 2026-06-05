"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const categorii = ["Toate", "Evenimente", "Rezultate", "Comunitate", "Antrenamente"];

const articole = [
  {
    id: "trail-ceahlau-2026",
    imagine: "/news/articol1.jpg",
    categorie: "Evenimente",
    titlu: "Trail Running Ceahlău — înscrierile sunt deschise",
    rezumat: "Ediția 2026 a trail-ului de la Ceahlău promite un traseu spectaculos. FineRun va participa cu o echipă de 10 alergători.",
    data: "28 Mai 2026",
    autor: "Echipa FineRun",
    tags: ["Trail", "Ceahlău"],
  },
  {
    id: "rezultate-semi-bucuresti",
    imagine: "/news/articol2.jpg",
    categorie: "Rezultate",
    titlu: "3 PB-uri la Semimaratonul București",
    rezumat: "Membrii noștri au obținut timpi excelenți la Semimaratonul București. Trei alergători și-au doborât recordurile personale.",
    data: "20 Mai 2026",
    autor: "Andrei Popescu",
    tags: ["Rezultate", "București"],
  },
  {
    id: "antrenament-interval",
    imagine: "/news/articol3.jpg",
    categorie: "Antrenamente",
    titlu: "Cum să integrezi antrenamentele de interval în pregătire",
    rezumat: "Antrenorul nostru îți explică beneficiile antrenamentelor de interval și cum să le adaugi în rutina ta săptămânală.",
    data: "15 Mai 2026",
    autor: "Coach Mihai",
    tags: ["Antrenament", "Tips"],
  },
  {
    id: "povestea-maria",
    imagine: "/news/articol4.jpg",
    categorie: "Comunitate",
    titlu: "Povestea Mariei: de la 0 la Maraton în 10 luni",
    rezumat: "Maria nu alergase niciodată. Astăzi a terminat primul maraton. O poveste despre determinare, comunitate și curaj.",
    data: "10 Mai 2026",
    autor: "Echipa FineRun",
    tags: ["Povești", "Maraton"],
  },
  {
    id: "crosul-copou-pregatiri",
    imagine: "/news/articol5.jpg",
    categorie: "Evenimente",
    titlu: "Pregătiri pentru Crosul Copou 2026",
    rezumat: "Crosul Copou revine în iulie! Anul acesta așteptăm peste 300 de participanți. Iată ce am pregătit pentru voi.",
    data: "5 Mai 2026",
    autor: "Echipa FineRun",
    tags: ["Cros", "Iași"],
  },
  {
    id: "recuperare-dupa-maraton",
    imagine: "/news/articol6.jpg",
    categorie: "Antrenamente",
    titlu: "Ghid complet de recuperare după un maraton",
    rezumat: "Ce faci în primele 48 de ore după un maraton? Nutriție, stretching, somn — tot ce trebuie să știi pentru o recuperare optimă.",
    data: "1 Mai 2026",
    autor: "Coach Mihai",
    tags: ["Recuperare", "Tips"],
  },
  {
    id: "clasament-echipe-iasi",
    imagine: "/news/articol7.jpg",
    categorie: "Rezultate",
    titlu: "FineRun pe locul 1 la clasamentul pe echipe — Iași",
    rezumat: "Am câștigat clasamentul pe echipe mixte la Maratonul Iași pentru al doilea an consecutiv. Suntem mândri de fiecare membru.",
    data: "25 Aprilie 2026",
    autor: "Echipa FineRun",
    tags: ["Clasament", "Iași"],
  },
  {
    id: "tabara-vatra-dornei",
    imagine: "/news/articol8.jpg",
    categorie: "Comunitate",
    titlu: "Tabăra de alergare FineRun — Vatra Dornei",
    rezumat: "3 zile de antrenamente, drumeții și team building în munții Bucovinei. O experiență de neuitat pentru 40 de membri.",
    data: "18 Aprilie 2026",
    autor: "Echipa FineRun",
    tags: ["Tabără", "Comunitate"],
  },
  {
    id: "stretching-matinal",
    imagine: "/news/articol9.jpg",
    categorie: "Antrenamente",
    titlu: "Rutina de stretching matinal pentru alergători",
    rezumat: "15 minute dimineața pot face diferența. Iată exercițiile de stretching recomandate de antrenorul nostru.",
    data: "10 Aprilie 2026",
    autor: "Coach Mihai",
    tags: ["Stretching", "Rutină"],
  },
];

export default function GridArticole() {
  const [activeFilter, setActiveFilter] = useState("Toate");
  const [visibleCount, setVisibleCount] = useState(6);

  const filtered =
    activeFilter === "Toate"
      ? articole
      : articole.filter((a) => a.categorie === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="py-10 md:py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header + Filtre */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            Toate articolele
          </h3>
          <div className="flex flex-wrap gap-2">
            {categorii.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveFilter(cat);
                  setVisibleCount(6);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300
                  ${
                    activeFilter === cat
                      ? "bg-gray-900 text-yellow-400 shadow-md"
                      : "bg-white text-gray-600 hover:bg-gray-200 border border-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((articol) => (
            <Link
              key={articol.id}
              href={`/noutati/${articol.id}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 
                         hover:border-yellow-200 hover:shadow-xl transition-all duration-500 
                         hover:-translate-y-1 flex flex-col"
            >
              {/* Imagine */}
              <div className="relative h-48 sm:h-52 overflow-hidden">
                <Image
                  src={articol.imagine}
                  alt={articol.titlu}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] sm:text-xs 
                                   font-bold px-3 py-1 rounded-full">
                    {articol.categorie}
                  </span>
                </div>
              </div>

              {/* Conținut */}
              <div className="p-5 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                  <span>{articol.data}</span>
                  <span className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span>{articol.autor}</span>
                </div>

                {/* Titlu */}
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 
                               group-hover:text-yellow-600 transition-colors leading-snug line-clamp-2">
                  {articol.titlu}
                </h4>

                {/* Rezumat */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2 flex-1">
                  {articol.rezumat}
                </p>

                {/* Tags + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex gap-1.5">
                    {articol.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-100 text-gray-500 text-[10px] font-medium px-2 py-0.5 rounded-full
                                   group-hover:bg-yellow-50 group-hover:text-yellow-700 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-gray-400 group-hover:text-yellow-600 
                               transition-all group-hover:translate-x-1"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-16">
            <span className="text-4xl mb-4 block">🔍</span>
            <p className="text-gray-500">Nu există articole în această categorie.</p>
          </div>
        )}

        {/* Load more */}
        {hasMore && (
          <div className="text-center mt-10">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-900 text-gray-900 
                         hover:text-yellow-400 font-semibold px-8 py-3.5 rounded-full 
                         transition-all duration-300 border border-gray-200 hover:border-gray-900
                         text-sm sm:text-base hover:shadow-lg"
            >
              Încarcă mai multe
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
