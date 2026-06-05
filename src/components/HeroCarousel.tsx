"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

const slides = [
  {
    image: "/hero/hero1.jpg",
    title: "Alergăm împreună, creștem împreună",
    description:
      "FineRun este o asociație non-profit din Iași care sprijină sportivii să participe la maratoane și să adopte un stil de viață sănătos.",
  },
  {
    image: "/hero/hero2.jpg",
    title: "Fiecare kilometru contează",
    description:
      "Credem că sportul unește comunități. Oferim suport, antrenamente și motivație pentru alergători de toate nivelurile.",
  },
  {
    image: "/hero/hero3.jpg",
    title: "Depășește-ți limitele",
    description:
      "De la primul kilometru până la linia de finish a unui maraton — suntem alături de tine la fiecare pas.",
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] group">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Săgeată stânga */}
      <button
        className="hero-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/40 text-white rounded-full 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                   transition-opacity opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Săgeată dreapta */}
      <button
        className="hero-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/40 text-white rounded-full 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                   transition-opacity opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </section>
  );
}
