"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import KilometriCounter from "./KilometriCounter";

const slides = [
  {
    imageDesktop: "/hero/background-desktop.webp",
    imageTablet: "/hero/background-tablet.webp",
    imageMobile: "/hero/background-mobile.webp",
    video: "/hero/generated_video.mp4",
    title: "",
    description: "",
    showText: false,
    showLogo: true,
    duration: 30000,
  },
  {
    imageDesktop: "/hero/slide2-desktop.webp",
    imageTablet: "/hero/slide2-tablet.webp",
    imageMobile: "/hero/slide2-mobile.webp",
    video: undefined,
    title: "Fiecare kilometru contează",
    description:
      "Credem că sportul unește comunități. Oferim suport, antrenamente și motivație pentru alergători de toate nivelurile.",
    showText: true,
    showLogo: false,
    duration: 15000,
  },
  {
    imageDesktop: "/hero/slide3-desktop.webp",
    imageTablet: "/hero/slide3-tablet.webp",
    imageMobile: "/hero/slide3-mobile.webp",
    video: undefined,
    title: "Depășește-ți limitele",
    description:
      "De la primul kilometru până la linia de finish a unui maraton — suntem alături de tine la fiecare pas.",
    showText: true,
    showLogo: false,
    duration: 15000,
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:aspect-video group">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Navigation]}
        effect="fade"
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} data-swiper-autoplay={slide.duration}>
            <div className="relative w-full h-full">
              {slide.video ? (
                <video
                  src={slide.video}
                  poster={slide.imageDesktop}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <picture className="absolute inset-0 w-full h-full">
                  <source media="(min-width: 1024px)" srcSet={slide.imageDesktop} />
                  <source media="(min-width: 768px)" srcSet={slide.imageTablet} />
                  <img
                    src={slide.imageMobile}
                    alt=""
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </picture>
              )}
              {slide.showLogo && (
                <>
                  <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
                    <Image
                      src="/logo-finerune-asociatie-sportiva-full.svg"
                      alt="FineRun.ro - Asociația Sportivă din Iași"
                      width={695}
                      height={448}
                      priority
                      className="w-64 sm:w-80 md:w-[28rem] lg:w-[36rem] h-auto drop-shadow-2xl"
                    />
                  </div>

                  {/* Overlay stânga-sus: slogan + CTA */}
                  <div className="absolute left-8 top-8 sm:left-14 sm:top-14 md:left-20 md:top-20 z-20 max-w-[200px] sm:max-w-xs">
                    <h2 className="text-white font-black uppercase leading-tight text-lg sm:text-2xl md:text-3xl drop-shadow-lg mb-3 sm:mb-4">
                      Fiecare pas
                      <br />
                      <span className="text-yellow-400">contează</span>
                    </h2>
                    <Link
                      href="/aderare"
                      className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 
                                 text-white font-bold px-4 py-2.5 sm:px-6 sm:py-3 rounded-full 
                                 text-xs sm:text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Alătură-te acum!
                    </Link>
                  </div>

                  {/* Overlay dreapta-sus: counter kilometri */}
                  <div className="absolute right-8 top-8 sm:right-14 sm:top-14 md:right-20 md:top-20 z-20">
                    <KilometriCounter />
                  </div>
                </>
              )}
              {slide.showText && (
                <>
                  <div className="absolute inset-0 z-10 bg-black/50" />
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl max-w-2xl drop-shadow-md">
                      {slide.description}
                    </p>
                  </div>
                </>
              )}
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
