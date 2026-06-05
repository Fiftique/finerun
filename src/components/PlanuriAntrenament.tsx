const planuri = [
  {
    nivel: "Începător",
    emoji: "🌱",
    subtitlu: "De la 0 la primii 10K",
    durata: "12 săptămâni",
    sesiuniPeSaptamana: "3 sesiuni / săpt.",
    accent: {
      border: "hover:border-green-300",
      bg: "bg-green-50",
      text: "text-green-600",
      badge: "bg-green-100 text-green-700",
      iconBg: "bg-green-100",
      button: "bg-green-600 hover:bg-green-500",
    },
    include: [
      "Evaluare inițială a nivelului de fitness",
      "Plan personalizat de alergare + mers",
      "3 antrenamente pe săptămână (ușoare)",
      "Exerciții de stretching post-antrenament",
      "Grup dedicat de WhatsApp cu antrenorul",
      "Acces la sesiunile de grup pentru începători",
    ],
    potrivitPentru: [
      "Nu ai alergat niciodată",
      "Revii după o pauză lungă",
      "Vrei să termini primul tău 5K sau 10K",
    ],
  },
  {
    nivel: "Intermediar",
    emoji: "🔥",
    subtitlu: "Pregătire pentru Semi-Maraton",
    durata: "16 săptămâni",
    sesiuniPeSaptamana: "4-5 sesiuni / săpt.",
    popular: true,
    accent: {
      border: "hover:border-yellow-300",
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      badge: "bg-yellow-100 text-yellow-700",
      iconBg: "bg-yellow-100",
      button: "bg-yellow-500 hover:bg-yellow-400 text-gray-900",
    },
    include: [
      "Test de prag anaerob și zone de puls",
      "Plan săptămânal structurat (easy, tempo, interval)",
      "Long run progresiv în weekend cu echipa",
      "Sesiuni de forță specifice pentru alergători",
      "Monitorizare progres și ajustări lunare",
      "Sfaturi de nutriție și hidratare pentru curse",
      "Strategie de cursă pentru ziua competiției",
    ],
    potrivitPentru: [
      "Alergi regulat de câteva luni",
      "Ai terminat deja un 10K",
      "Vrei să termini un Semi-Maraton",
    ],
  },
  {
    nivel: "Avansat",
    emoji: "🏔️",
    subtitlu: "Maraton & Ultra",
    durata: "20 săptămâni",
    sesiuniPeSaptamana: "5-6 sesiuni / săpt.",
    accent: {
      border: "hover:border-red-300",
      bg: "bg-red-50",
      text: "text-red-600",
      badge: "bg-red-100 text-red-700",
      iconBg: "bg-red-100",
      button: "bg-red-600 hover:bg-red-500",
    },
    include: [
      "Analiză detaliată a performanțelor anterioare",
      "Periodizare completă (bază, build, peak, taper)",
      "Antrenamente specifice: hill repeats, progression runs",
      "Double runs în zilele de volum mare",
      "Plan nutrițional detaliat + strategie de fueling",
      "Pregătire mentală și vizualizare",
      "Simulări de cursă pe distanța competiției",
      "Suport 1-la-1 cu antrenorul pe tot parcursul",
    ],
    potrivitPentru: [
      "Ai experiență la Semi-Maraton",
      "Vrei PB la Maraton",
      "Te pregătești pentru un Ultramaraton",
    ],
  },
];

export default function PlanuriAntrenament() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            📋 Antrenează-te cu plan
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Planuri de antrenament
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Alege planul potrivit nivelului tău. Fiecare plan este creat de antrenorii noștri 
            și adaptat obiectivelor tale.
          </p>
        </div>

        {/* Grid planuri */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {planuri.map((plan) => (
            <div
              key={plan.nivel}
              className={`relative group bg-white rounded-2xl border border-gray-100 
                         ${plan.accent.border} hover:shadow-xl transition-all duration-500 
                         hover:-translate-y-1 flex flex-col overflow-hidden
                         ${plan.popular ? "ring-2 ring-yellow-400 md:scale-105" : ""}`}
            >
              {/* Badge popular */}
              {plan.popular && (
                <div className="bg-yellow-400 text-gray-900 text-[10px] sm:text-xs font-bold 
                                text-center py-1.5 uppercase tracking-widest">
                  ⭐ Cel mai popular
                </div>
              )}

              {/* Header card */}
              <div className={`${plan.accent.bg} p-6 sm:p-8 text-center`}>
                <span className="text-4xl sm:text-5xl block mb-3">{plan.emoji}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
                  {plan.nivel}
                </h3>
                <p className={`text-sm font-semibold ${plan.accent.text}`}>
                  {plan.subtitlu}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex justify-center gap-4 p-4 border-b border-gray-100">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                  </svg>
                  {plan.durata}
                </div>
                <div className="w-px h-4 bg-gray-200" />
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                  </svg>
                  {plan.sesiuniPeSaptamana}
                </div>
              </div>

              {/* Ce include */}
              <div className="p-6 sm:p-8 flex-1">
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                  Ce include
                </h4>
                <ul className="space-y-3 mb-8">
                  {plan.include.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" 
                           className={`w-4 h-4 ${plan.accent.text} shrink-0 mt-0.5`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Potrivit pentru */}
                <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                  Potrivit pentru tine dacă
                </h4>
                <ul className="space-y-2">
                  {plan.potrivitPentru.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-500">
                      <span className={`w-1.5 h-1.5 rounded-full ${plan.accent.text.replace("text", "bg")} shrink-0 mt-1.5`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buton */}
              <div className="p-6 sm:p-8 pt-0">
                <button
                  className={`w-full ${plan.accent.button} text-white font-bold py-3.5 rounded-xl 
                             transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] 
                             shadow-md hover:shadow-lg text-sm sm:text-base
                             flex items-center justify-center gap-2`}
                >
                  Alege planul {plan.nivel}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Notă */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            💡 Toate planurile sunt <span className="font-semibold text-gray-600">gratuite</span> pentru membrii FineRun. 
            Nu ești membru?{" "}
            <a href="/aderare" className="text-yellow-600 font-semibold hover:underline">
              Înscrie-te aici →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
