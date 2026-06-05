import Image from "next/image";

const timeline = [
  {
    an: "2021",
    titlu: "Primul pas",
    descriere:
      "Totul a început cu un grup de prieteni din Iași care alergau în fiecare dimineață în Parcul Copou. Pasiunea comună pentru mișcare ne-a unit și am visat să creăm ceva mai mare.",
  },
  {
    an: "2022",
    titlu: "Nașterea FineRun",
    descriere:
      "Am înregistrat oficial asociația sportivă non-profit FineRun. Primul nostru obiectiv: să ajutăm 50 de alergători începători să termine prima cursă de 10 kilometri.",
  },
  {
    an: "2023",
    titlu: "Prima competiție organizată",
    descriere:
      "Am organizat Crosul Copou — primul eveniment propriu cu peste 200 de participanți. A fost momentul în care am realizat că FineRun înseamnă mai mult decât alergare.",
  },
  {
    an: "2024",
    titlu: "Creșterea comunității",
    descriere:
      "Am depășit 300 de membri activi și am început parteneriate cu maratoane naționale și internaționale. Am lansat și programul de antrenament gratuit pentru începători.",
  },
  {
    an: "2025",
    titlu: "FineRun devine familie",
    descriere:
      "Astăzi suntem peste 500 de alergători uniți de aceeași pasiune. Organizăm antrenamente săptămânale, tabere sportive și sprijinim sportivii să participe la maratoane din toată Europa.",
  },
];

export default function PovesteaNoastra() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white relative overflow-hidden">
      {/* Elemente decorative */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-yellow-100 rounded-full opacity-30 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-40 blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            📖 De unde am pornit
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Povestea noastră
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Din pasiunea a câțiva prieteni, într-o comunitate de sute de alergători. 
            Iată drumul pe care l-am parcurs împreună.
          </p>
        </div>

        {/* Layout: Imagine + Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Coloana stângă — Imagine + citat */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/povestea.jpg"
                alt="Echipa FineRun la antrenament"
                width={600}
                height={700}
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <blockquote className="text-white">
                  <p className="text-base sm:text-lg italic leading-relaxed mb-3">
                    &ldquo;Am început să alergăm pentru noi. Am continuat să alergăm 
                    pentru comunitate. Acum alergăm pentru toți cei care au curajul 
                    să facă primul pas.&rdquo;
                  </p>
                  <footer className="text-yellow-400 text-sm font-semibold">
                    — Fondatorii FineRun
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Badge decorativ */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-yellow-400 text-gray-900 
                            rounded-2xl p-4 sm:p-5 shadow-xl hidden sm:block">
              <span className="text-2xl sm:text-3xl font-black block">2021</span>
              <span className="text-xs font-semibold uppercase tracking-wider">Fondat în Iași</span>
            </div>
          </div>

          {/* Coloana dreaptă — Timeline */}
          <div className="relative">
            {/* Linia verticală */}
            <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gray-200" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative pl-12 group">
                  {/* Cercul pe timeline */}
                  <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-white border-2 border-gray-200 
                                  group-hover:border-yellow-400 group-hover:bg-yellow-50 
                                  transition-all duration-300 flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-yellow-400 transition-colors" />
                  </div>

                  {/* Conținut */}
                  <div className="bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100 
                                  hover:border-yellow-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-gray-900 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full">
                        {item.an}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900">{item.titlu}</h3>
                    </div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {item.descriere}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}