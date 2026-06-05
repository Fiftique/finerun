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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {evenimente.map((event, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-md 
                         hover:shadow-2xl transition-all duration-500 
                         hover:-translate-y-2 border border-gray-100"
            >
              {/* Imagine */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-700 
                             group-hover:scale-110"
                  style={{ backgroundImage: `url(${event.imagine})` }}
                />
                {/* Data badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2 text-center shadow-md">
                  <span className="block text-sm font-bold text-gray-900">
                    {event.data.split(" ")[0]}
                  </span>
                  <span className="block text-xs text-gray-500 uppercase">
                    {event.data.split(" ")[1]} {event.data.split(" ")[2]}
                  </span>
                </div>
              </div>

              {/* Conținut */}
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {event.titlu}
                </h3>

                {/* Locație */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {event.locatie}
                </div>

                {/* Distanțe */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {event.distante.map((dist) => (
                    <span
                      key={dist}
                      className="bg-gray-100 text-gray-700 text-xs font-semibold px-3 py-1 rounded-full 
                                 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
                    >
                      {dist}
                    </span>
                  ))}
                </div>

                {/* Buton */}
                <Link
                  href={event.link}
                  className="inline-flex items-center gap-2 w-full justify-center bg-gray-900 
                             hover:bg-blue-600 text-white font-semibold py-3 rounded-xl 
                             transition-all duration-300 text-sm"
                >
                  Detalii & Înscriere
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 transition-transform group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
