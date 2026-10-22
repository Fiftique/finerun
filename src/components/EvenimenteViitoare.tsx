import Link from "next/link";

const evenimente = [
  {
    titlu: "Maratonul Iași 2026",
    data: "12 Octombrie 2026",
    locatie: "Iași, Palatul Culturii",
    distante: ["10K", "21K", "42K"],
    imagine: "/events/event1.jpg",
    link: "/marathons",
  },
  {
    titlu: "Crosul Copou",
    data: "15 August 2026",
    locatie: "Iași, Grădina Botanică",
    distante: ["5K", "10K"],
    imagine: "/events/event2.jpg",
    link: "/marathons",
  },
  {
    titlu: "Trail Running Ceahlău",
    data: "20 Septembrie 2026",
    locatie: "Ceahlău, Neamț",
    distante: ["15K", "30K"],
    imagine: "/events/event3.jpg",
    link: "/marathons",
  },
  {
    titlu: "Semimaratonul Suceava",
    data: "8 Noiembrie 2026",
    locatie: "Suceava, Centru Civic",
    distante: ["10K", "21K"],
    imagine: "/events/event1.jpg",
    link: "/marathons",
  },
];

export default function EvenimenteViitoare() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex justify-center mb-4">
          <span className="bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            📅 Nu rata startul
          </span>
        </div>

        {/* Titlu */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Evenimente viitoare
        </h2>
        <p className="text-gray-500 text-center text-base sm:text-lg mb-12 max-w-2xl mx-auto">
          Pregătește-te pentru următoarele competiții alături de comunitatea FineRun!
        </p>

        {/* Carduri evenimente */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6">
          {evenimente.map((event, index) => (
            <Link
              key={index}
              href={event.link}
              className="group relative block aspect-[4/5] overflow-hidden rounded-3xl shadow-lg
                         hover:shadow-2xl transition-all duration-500
                         hover:-translate-y-2"
            >
              {/* Imagine de fundal */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700
                           group-hover:scale-110"
                style={{ backgroundImage: `url(${event.imagine})` }}
              />

              {/* Overlay gradient pentru lizibilitate */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/40 to-gray-950/10" />

              {/* Data - sus */}
              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md">
                <span className="block text-sm font-bold text-gray-900">
                  {event.data.split(" ")[0]}
                </span>
                <span className="block text-[10px] text-gray-500 uppercase tracking-wide">
                  {event.data.split(" ")[1]} {event.data.split(" ")[2]}
                </span>
              </div>

              {/* Conținut text - jos */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-2 leading-snug">
                  {event.titlu}
                </h3>

                <div className="flex items-center gap-1.5 text-gray-300 text-xs sm:text-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {event.locatie}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {event.distante.map((dist) => (
                      <span
                        key={dist}
                        className="bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full
                                   group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors"
                      >
                        {dist}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-400
                                    text-gray-900 shrink-0 transition-transform group-hover:translate-x-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
