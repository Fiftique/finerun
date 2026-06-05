"use client";

import { useEffect, useRef, useState } from "react";

const realizari = [
  {
    categorie: "Maratoane internaționale",
    items: [
      { titlu: "Maratonul Berlin", an: "2024", detaliu: "12 membri finisheri, 3 PB-uri" },
      { titlu: "Maratonul Atena", an: "2024", detaliu: "8 membri finisheri" },
      { titlu: "Maratonul Valencia", an: "2023", detaliu: "15 membri, cel mai mare grup FineRun" },
      { titlu: "Semi-Maratonul Budapesta", an: "2023", detaliu: "20+ participanți" },
    ],
    icon: "globe",
    accent: "blue",
  },
  {
    categorie: "Competiții naționale",
    items: [
      { titlu: "Maratonul Iași", an: "2025", detaliu: "Loc 1 echipe — categorie mixtă" },
      { titlu: "Maratonul București", an: "2024", detaliu: "Cea mai mare delegație din Moldova" },
      { titlu: "Trail Running Rarău", an: "2024", detaliu: "5 membri pe podium" },
      { titlu: "Semimaratonul Cluj", an: "2023", detaliu: "10 PB-uri personale" },
    ],
    icon: "flag",
    accent: "yellow",
  },
  {
    categorie: "Recorduri ale membrilor",
    items: [
      { titlu: "Cel mai rapid maraton", an: "2024", detaliu: "2h 58min — primul sub 3 ore" },
      { titlu: "Cel mai lung ultramaraton", an: "2024", detaliu: "100km — Ultramaratonul Bâlea" },
      { titlu: "Cea mai mare distanță lunară", an: "2025", detaliu: "620km într-o singură lună" },
      { titlu: "De la 0 la Maraton", an: "2023", detaliu: "Primul maraton după 8 luni de pregătire" },
    ],
    icon: "medal",
    accent: "green",
  },
];

const icons: Record<string, JSX.Element> = {
  globe: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  flag: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
    </svg>
  ),
  medal: (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0m5.54 0l-.982 3.172M7.73 9.728l.983 3.172" />
    </svg>
  ),
};

const accentColors: Record<string, { bg: string; text: string; border: string; badge: string; dot: string }> = {
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    border: "hover:border-blue-300",
    badge: "bg-blue-100 text-blue-700",
    dot: "bg-blue-400",
  },
  yellow: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    border: "hover:border-yellow-300",
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-400",
  },
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "hover:border-green-300",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-400",
  },
};

export default function Realizari() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className="text-center mb-14 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            🏆 Palmares
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Realizările noastre
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Fiecare medalie, fiecare linie de finish și fiecare record personal este o victorie a întregii comunități.
          </p>
        </div>

        {/* 3 Coloane de categorii */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {realizari.map((cat, catIndex) => {
            const colors = accentColors[cat.accent];
            return (
              <div
                key={cat.categorie}
                className="transition-all duration-700"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(50px)",
                  transitionDelay: `${catIndex * 200}ms`,
                }}
              >
                {/* Header categorie */}
                <div className={`${colors.bg} rounded-2xl p-5 mb-4 flex items-center gap-3`}>
                  <div className={`${colors.text}`}>{icons[cat.icon]}</div>
                  <h3 className="text-lg font-bold text-gray-900">{cat.categorie}</h3>
                </div>

                {/* Items */}
                <div className="space-y-3">
                  {cat.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`bg-white rounded-xl p-4 border border-gray-100 ${colors.border} 
                                  hover:shadow-md transition-all duration-300 group cursor-default`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-2 h-2 ${colors.dot} rounded-full mt-2 shrink-0 
                                        group-hover:scale-150 transition-transform`} />
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-sm font-bold text-gray-900">{item.titlu}</h4>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                              {item.an}
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500">{item.detaliu}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-14 text-center transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "800ms",
          }}
        >
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white rounded-2xl px-6 sm:px-8 py-4 sm:py-5 shadow-xl">
            <span className="text-3xl sm:text-4xl">🎯</span>
            <div className="text-left">
              <p className="text-sm sm:text-base font-bold">Următorul obiectiv</p>
              <p className="text-xs sm:text-sm text-gray-400">
                1000 de alergători activi până în 2027
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
