"use client";

import { useState } from "react";

export default function Aderare() {
  const [formData, setFormData] = useState({
    nume: "",
    prenume: "",
    email: "",
    telefon: "",
    varsta: "",
    nivel: "",
    motivatie: "",
    accept: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" 
      ? target.checked 
      : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aici vom conecta Supabase ulterior
    alert("Formularul a fost trimis! (demo)");
  };

  return (
    <>
      {/* Hero motivațional */}
      <section className="relative py-20 md:py-28 px-6 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="text-5xl sm:text-6xl mb-6">🤝</div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Fă parte din
            <span className="text-yellow-400"> familia FineRun</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Nu ai nevoie de experiență, de echipament scump sau de un timp record. 
            Ai nevoie doar de dorința de a face primul pas. Restul vine de la sine — 
            pentru că aici nimeni nu aleargă singur.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: "🏃", text: "Antrenamente săptămânale gratuite" },
              { icon: "👕", text: "Tricou personalizat FineRun" },
              { icon: "🎯", text: "Plan de antrenament personalizat" },
              { icon: "🏅", text: "Participare la competiții ca echipă" },
              { icon: "🤸", text: "Sesiuni de recuperare și stretching" },
              { icon: "🎉", text: "Evenimente sociale și team building" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-2 bg-white/5 border border-white/10 
                           backdrop-blur-sm rounded-full px-4 py-2 text-sm text-gray-300"
              >
                <span>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiune formular */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-100 rounded-full opacity-20 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

            {/* Coloana stângă — info */}
            <div className="lg:col-span-2">
              <span className="bg-yellow-100 text-yellow-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                📋 Înscrie-te acum
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Completează formularul de aderare
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8">
                Completează datele de mai jos și te vom contacta în cel mai scurt timp 
                cu toate detaliile despre cum poți deveni membru FineRun.
              </p>

              {/* Pași */}
              <div className="space-y-5">
                {[
                  {
                    pas: "1",
                    titlu: "Completezi formularul",
                    desc: "Ne spui câteva lucruri despre tine și experiența ta.",
                  },
                  {
                    pas: "2",
                    titlu: "Te contactăm noi",
                    desc: "Un membru al echipei te va suna sau îți va scrie pe WhatsApp.",
                  },
                  {
                    pas: "3",
                    titlu: "Vii la un antrenament",
                    desc: "Participi gratuit la o sesiune de antrenament să vezi cum e.",
                  },
                  {
                    pas: "4",
                    titlu: "Devii membru FineRun",
                    desc: "Primești tricoul, planul de antrenament și ești parte din echipă!",
                  },
                ].map((step) => (
                  <div key={step.pas} className="flex gap-4 group">
                    <div className="w-10 h-10 shrink-0 bg-gray-900 text-yellow-400 rounded-xl 
                                    flex items-center justify-center font-bold text-sm
                                    group-hover:bg-yellow-400 group-hover:text-gray-900 transition-colors">
                      {step.pas}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{step.titlu}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coloana dreaptă — formular */}
            <div className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 md:p-10"
              >
                {/* Nume + Prenume */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Nume *
                    </label>
                    <input
                      type="text"
                      name="nume"
                      value={formData.nume}
                      onChange={handleChange}
                      required
                      placeholder="ex: Popescu"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 
                                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                                 outline-none transition-all text-sm text-gray-900
                                 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Prenume *
                    </label>
                    <input
                      type="text"
                      name="prenume"
                      value={formData.prenume}
                      onChange={handleChange}
                      required
                      placeholder="ex: Andrei"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 
                                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                                 outline-none transition-all text-sm text-gray-900
                                 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ex: andrei@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                               focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                               outline-none transition-all text-sm text-gray-900
                               placeholder:text-gray-400"
                  />
                </div>

                {/* Telefon + Vârstă */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="telefon"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      placeholder="ex: 0740 123 456"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 
                                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                                 outline-none transition-all text-sm text-gray-900
                                 placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Vârstă
                    </label>
                    <input
                      type="number"
                      name="varsta"
                      value={formData.varsta}
                      onChange={handleChange}
                      placeholder="ex: 28"
                      min="14"
                      max="99"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 
                                 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                                 outline-none transition-all text-sm text-gray-900
                                 placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Nivel experiență */}
                <div className="mb-5">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Nivel de experiență *
                  </label>
                  <select
                    name="nivel"
                    value={formData.nivel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                               focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                               outline-none transition-all text-sm text-gray-900
                               bg-white appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selectează nivelul</option>
                    <option value="incepator">🌱 Începător — nu am alergat niciodată</option>
                    <option value="intermediar">🏃 Intermediar — alerg ocazional</option>
                    <option value="avansat">🔥 Avansat — alerg regulat / competiții</option>
                    <option value="ultra">🏔️ Ultra — ultramaratoane / trail</option>
                  </select>
                </div>

                {/* Motivație */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    De ce vrei să te alături FineRun?
                  </label>
                  <textarea
                    name="motivatie"
                    value={formData.motivatie}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Spune-ne pe scurt ce te motivează..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 
                               focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 
                               outline-none transition-all text-sm text-gray-900 resize-none
                               placeholder:text-gray-400"
                  />
                </div>

                {/* Checkbox GDPR */}
                <div className="mb-8">
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="accept"
                      checked={formData.accept}
                      onChange={handleChange}
                      required
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-yellow-500 
                                 focus:ring-yellow-400 cursor-pointer"
                    />
                    <span className="text-xs sm:text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      Accept{" "}
                      <a href="/politica-confidentialitate" className="text-yellow-600 hover:underline">
                        Politica de Confidențialitate
                      </a>{" "}
                      și sunt de acord cu prelucrarea datelor personale conform{" "}
                      <a href="/gdpr" className="text-yellow-600 hover:underline">
                        GDPR
                      </a>
                      . *
                    </span>
                  </label>
                </div>

                {/* Buton submit */}
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-yellow-400 text-white hover:text-gray-900 
                             font-bold py-4 rounded-xl transition-all duration-300 
                             text-sm sm:text-base shadow-lg hover:shadow-xl 
                             hover:scale-[1.02] active:scale-[0.98]
                             flex items-center justify-center gap-2"
                >
                  Trimite cererea de aderare
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
