export default function ContactMap() {
  return (
    <section className="pb-16 md:pb-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
            🗺️ Unde ne găsești
          </span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Map container */}
        <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
          {/* Info overlay */}
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-xl 
                          shadow-lg p-4 sm:p-5 max-w-[280px] sm:max-w-xs border border-gray-100">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-yellow-100 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-lg">🏃</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">FineRun.ro</h4>
                <p className="text-xs text-gray-500">Asociație sportivă</p>
              </div>
            </div>
            <div className="space-y-1.5 mt-3">
              <p className="text-xs text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Iași, România
              </p>
              <p className="text-xs text-gray-600 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 shrink-0 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Luni — Sâmbătă, 06:30 — 20:00
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Palatul+Culturii+Iasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-yellow-600 
                         hover:text-yellow-700 mt-3 transition-colors"
            >
              Deschide în Google Maps
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>

          {/* Google Maps Embed */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2712.5470756413584!2d27.583863!3d47.155733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafb7cce4b5d9b%3A0x2c5d7a4e3f51a8c0!2sPalatul%20Culturii!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
            title="Locația FineRun pe hartă"
          />
        </div>
      </div>
    </section>
  );
}