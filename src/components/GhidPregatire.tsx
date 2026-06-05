"use client";

import { useState } from "react";

const categoriiGhid = [
  {
    categorie: "Nutriție",
    emoji: "🥗",
    accent: "green",
    intrebari: [
      {
        q: "Ce mănânc înainte de un antrenament?",
        a: "Cu 2-3 ore înainte, mănâncă un prânz ușor bogat în carbohidrați complecși: paste, orez, pâine integrală cu banană. Cu 30-60 de minute înainte, o banană sau un baton energetic sunt suficiente. Evită alimentele grase sau fibroase care pot cauza disconfort.",
      },
      {
        q: "Ce mănânc după antrenament?",
        a: "În primele 30-60 de minute, consumă un mix de proteine și carbohidrați: un smoothie cu fructe și iaurt, ou cu pâine prăjită, sau un bol de cereale cu lapte. Asta accelerează recuperarea musculară și refacerea rezervelor de glicogen.",
      },
      {
        q: "Am nevoie de suplimente alimentare?",
        a: "Pentru majoritatea alergătorilor recreativi, o dietă echilibrată este suficientă. La distanțe mari (semi-maraton+), poți avea nevoie de geluri energetice sau electroliți în timpul cursei. Consultă un nutriționist sportiv pentru recomandări personalizate.",
      },
      {
        q: "Ce mănânc în ziua cursei?",
        a: "Micul dejun cu 3-4 ore înainte de start: ceva familiar, testat în antrenament. Evită experimentele în ziua cursei! Carbohidrați simpli: pâine albă cu miere, banană, terci de ovăz. Evită lactate, fibre și grăsimi.",
      },
    ],
  },
  {
    categorie: "Hidratare",
    emoji: "💧",
    accent: "blue",
    intrebari: [
      {
        q: "Cât ar trebui să beau pe zi?",
        a: "Regula generală: 30-35ml per kg corp. Un alergător de 70kg ar trebui să bea aproximativ 2-2.5 litri de apă pe zi, mai mult în zilele de antrenament sau în perioadele calde.",
      },
      {
        q: "Ce beau în timpul antrenamentului?",
        a: "Sub 60 de minute: apa este suficientă. Peste 60 de minute: adaugă electroliți (sodiu, potasiu, magneziu). Bea 150-250ml la fiecare 15-20 de minute. Nu aștepta să ți se facă sete — când simți setea, ești deja deshidratat.",
      },
      {
        q: "Sunt utile băuturile izotonice?",
        a: "Da, pentru antrenamente lungi (peste 90 de minute) și în condiții de căldură. Ele refac electroliții pierduți prin transpirație. Poți face și varianta homemade: apă + sare + miere + lămâie.",
      },
    ],
  },
  {
    categorie: "Echipament",
    emoji: "👟",
    accent: "yellow",
    intrebari: [
      {
        q: "Ce pantofi de alergare să aleg?",
        a: "Mergi într-un magazin specializat pentru o analiză a foulée-ului (cum calci). Alege pantofi în funcție de tipul de pronație, distanța pe care alergi și suprafață (asfalt vs. trail). Înlocuiește pantofii la fiecare 600-800km.",
      },
      {
        q: "Ce haine port la antrenament?",
        a: "Îmbracă-te ca și cum ar fi cu 10°C mai cald decât afară — te vei încălzi repede. Folosește materiale tehnice (dri-fit), nu bumbac. Iarna: straturi (base layer + mid layer + windbreaker). Vara: tricou lejer, șort, șapcă, protecție solară.",
      },
      {
        q: "Am nevoie de ceas GPS?",
        a: "Nu e obligatoriu la început, dar devine foarte util. Un ceas cu GPS și monitor cardiac te ajută să alergi în zonele corecte de puls, să îți urmărești progresul și să respecți planul de antrenament. Alternative bune pentru început: Garmin Forerunner 55, Coros Pace 3.",
      },
      {
        q: "Ce accesorii sunt recomandate?",
        a: "Esențiale: șosete tehnice (fără bumbac!), centură/vestă de hidratare pentru long runs, bandă reflectorizantă pentru alergare pe întuneric. Opționale dar utile: brățară de identificare, căști sport, crème anti-friction.",
      },
    ],
  },
  {
    categorie: "Recuperare",
    emoji: "🧘",
    accent: "purple",
    intrebari: [
      {
        q: "Ce fac imediat după antrenament?",
        a: "Cool-down de 5-10 minute (mers sau jogging ușor), apoi stretching static 10-15 minute. Hidratează-te și mănâncă în primele 30-60 de minute. Dacă ai acces, un duș alternativ cald-rece ajută la recuperare.",
      },
      {
        q: "Cum previn accidentările?",
        a: "Regula de aur: nu crește volumul cu mai mult de 10% pe săptămână. Include exerciții de forță de 2 ori pe săptămână, stretching după fiecare antrenament, și respectă zilele de odihnă. Ascultă-ți corpul — durerea nu e câștig.",
      },
      {
        q: "Foam roller-ul chiar ajută?",
        a: "Da! Auto-masajul cu foam roller (sau minge de lacrosse) ajută la eliberarea tensiunilor musculare, îmbunătățește circulația și accelerează recuperarea. Folosește-l 10-15 minute după antrenament, concentrându-te pe cvadriceps, IT band, gambe și fesieri.",
      },
      {
        q: "Cât de important e somnul?",
        a: "Extrem de important! 7-9 ore de somn de calitate pe noapte sunt esențiale pentru recuperare. În somn, corpul repară țesuturile musculare și consolidează adaptările la antrenament. Lipsa somnului crește riscul de accidentare și scade performanța.",
      },
    ],
  },
];

const accentMap: Record<string, { bg: string; text: string; activeBg: string; activeText: string; hoverBg: string; iconBg: string; border: string }> = {
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    activeBg: "bg-green-100",
    activeText: "text-green-700",
    hoverBg: "hover:bg-green-50",
    iconBg: "bg-green-100",
    border: "border-green-200",
  },
  blue: {
    bg: "bg-blue-50",
    text: "text-blue-600",
    activeBg: "bg-blue-100",
    activeText: "text-blue-700",
    hoverBg: "hover:bg-blue-50",
    iconBg: "bg-blue-100",
    border: "border-blue-200",
  },
  yellow: {
    bg: "bg-yellow-50",
    text: "text-yellow-600",
    activeBg: "bg-yellow-100",
    activeText: "text-yellow-700",
    hoverBg: "hover:bg-yellow-50",
    iconBg: "bg-yellow-100",
    border: "border-yellow-200",
  },
  purple: {
    bg: "bg-purple-50",
    text: "text-purple-600",
    activeBg: "bg-purple-100",
    activeText: "text-purple-700",
    hoverBg: "hover:bg-purple-50",
    iconBg: "bg-purple-100",
    border: "border-purple-200",
  },
};

export default function GhidPregatire() {
  const [activeCat, setActiveCat] = useState("Nutriție");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const categoriaActiva = categoriiGhid.find((c) => c.categorie === activeCat)!;
  const colors = accentMap[categoriaActiva.accent];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="bg-purple-100 text-purple-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            💡 Ghid de pregătire
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
            Tot ce trebuie să știi
          </h2>
          <p className="text-gray-500 text-base sm:text-lg max-w-2xl mx-auto">
            Sfaturi practice de la antrenorii noștri pentru a te pregăti corect, 
            a performa mai bine și a te recupera eficient.
          </p>
        </div>

        {/* Selector categorii */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {categoriiGhid.map((cat) => {
            const catColors = accentMap[cat.accent];
            const isActive = activeCat === cat.categorie;
            return (
              <button
                key={cat.categorie}
                onClick={() => {
                  setActiveCat(cat.categorie);
                  setOpenIndex(0);
                }}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm 
                           font-semibold transition-all duration-300
                  ${
                    isActive
                      ? `${catColors.activeBg} ${catColors.activeText} shadow-md`
                      : `bg-gray-100 text-gray-500 hover:bg-gray-200`
                  }`}
              >
                <span>{cat.emoji}</span>
                {cat.categorie}
              </button>
            );
          })}
        </div>

        {/* Acordeon */}
        <div className="space-y-3">
          {categoriaActiva.intrebari.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden
                  ${isOpen ? `${colors.border} ${colors.bg} shadow-md` : "border-gray-100 bg-gray-50 hover:border-gray-200"}`}
              >
                {/* Întrebare */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center 
                                  text-sm font-bold shrink-0 transition-colors
                        ${isOpen ? `${colors.iconBg} ${colors.text}` : "bg-gray-200 text-gray-500"}`}
                    >
                      {index + 1}
                    </span>
                    <h4
                      className={`text-sm sm:text-base font-bold transition-colors
                        ${isOpen ? "text-gray-900" : "text-gray-700"}`}
                    >
                      {item.q}
                    </h4>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 
                      ${isOpen ? `rotate-180 ${colors.text}` : "text-gray-400"}`}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>

                {/* Răspuns */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out
                    ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pl-16 sm:pl-[76px]">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gray-50 rounded-2xl border border-gray-100 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                Ai alte întrebări?
              </h4>
              <p className="text-sm text-gray-500">
                Antrenorii noștri sunt mereu disponibili să te ajute.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-yellow-400 
                         text-white hover:text-gray-900 font-bold text-sm px-6 py-3 
                         rounded-full transition-all duration-300 hover:scale-105 shrink-0"
            >
              Contactează-ne
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
