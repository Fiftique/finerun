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

const DESKTOP_VIDEO_DURATION = 6000;
const DESKTOP_PHOTO_DURATION = 10000;
// 12 increments în 6 secunde => un increment la fiecare 500ms
const DESKTOP_COUNTER_INTERVAL = DESKTOP_VIDEO_DURATION / 12;

const MOBILE_VIDEO_DURATION = 5000;
const MOBILE_PHOTO_DURATION = 10000;
// 12 increments în 5 secunde
const MOBILE_COUNTER_INTERVAL = MOBILE_VIDEO_DURATION / 12;

function Arrows({ prefix }: { prefix: string }) {
  return (
    <>
      <button
        className={`${prefix}-prev absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/40 text-white rounded-full 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                   transition-opacity opacity-0 group-hover:opacity-100`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        className={`${prefix}-next absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 
                   bg-white/20 hover:bg-white/40 text-white rounded-full 
                   w-10 h-10 md:w-12 md:h-12 flex items-center justify-center 
                   transition-opacity opacity-0 group-hover:opacity-100`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </>
  );
}

export default function HeroCarousel() {
  return (
    <>
      {/* ============ Varianta MOBIL + TABLETĂ ============ */}
      <section className="relative w-full aspect-[4/5] md:aspect-[4/3] lg:hidden group">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect="fade"
          autoplay={{ delay: MOBILE_PHOTO_DURATION, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".hero-mobile-next", prevEl: ".hero-mobile-prev" }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 mobil/tabletă: video only, fără poster/flash */}
          <SwiperSlide data-swiper-autoplay={MOBILE_VIDEO_DURATION}>
            <div className="relative w-full h-full">
              <video
                src="/hero/generated_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute right-8 top-8 sm:right-14 sm:top-14 md:right-20 md:top-20 z-20">
                <KilometriCounter intervalMs={MOBILE_COUNTER_INTERVAL} />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 mobil/tabletă: fotografie + text existent + slogan/CTA + logo */}
          <SwiperSlide data-swiper-autoplay={MOBILE_PHOTO_DURATION}>
            <div className="relative w-full h-full">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/hero/slide2-tablet.webp" />
                <img
                  src="/hero/slide2-mobile.webp"
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 z-10 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
                  Fiecare kilometru contează
                </h1>
                <p className="text-base sm:text-lg max-w-2xl drop-shadow-md">
                  Credem că sportul unește comunități. Oferim suport, antrenamente și motivație pentru alergători de toate nivelurile.
                </p>
              </div>

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

              <div className="absolute right-8 top-8 sm:right-14 sm:top-14 md:right-20 md:top-20 z-20">
                <Image
                  src="/logo-finerune-asociatie-sportiva-full.svg"
                  alt="FineRun.ro - Asociația Sportivă din Iași"
                  width={695}
                  height={448}
                  className="w-32 sm:w-40 md:w-48 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 mobil/tabletă: neschimbat */}
          <SwiperSlide data-swiper-autoplay={MOBILE_PHOTO_DURATION}>
            <div className="relative w-full h-full">
              <picture className="absolute inset-0 w-full h-full">
                <source media="(min-width: 768px)" srcSet="/hero/slide3-tablet.webp" />
                <img
                  src="/hero/slide3-mobile.webp"
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 z-10 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 drop-shadow-lg">
                  Depășește-ți limitele
                </h1>
                <p className="text-base sm:text-lg max-w-2xl drop-shadow-md">
                  De la primul kilometru până la linia de finish a unui maraton — suntem alături de tine la fiecare pas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Arrows prefix="hero-mobile" />
      </section>

      {/* ============ Varianta DESKTOP ============ */}
      <section className="relative w-full aspect-video hidden lg:block group">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade, Navigation]}
          effect="fade"
          autoplay={{ delay: DESKTOP_PHOTO_DURATION, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{ nextEl: ".hero-desktop-next", prevEl: ".hero-desktop-prev" }}
          loop={true}
          className="w-full h-full"
        >
          {/* Slide 1 desktop: video + counter, fără poster/flash, fără logo/slogan */}
          <SwiperSlide data-swiper-autoplay={DESKTOP_VIDEO_DURATION}>
            <div className="relative w-full h-full">
              <video
                src="/hero/generated_video.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute right-20 top-20 z-20">
                <KilometriCounter intervalMs={DESKTOP_COUNTER_INTERVAL} />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 desktop: fotografie + text existent + slogan/CTA stânga-sus + logo dreapta-sus */}
          <SwiperSlide data-swiper-autoplay={DESKTOP_PHOTO_DURATION}>
            <div className="relative w-full h-full">
              <img
                src="/hero/slide2-desktop.webp"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-10 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  Fiecare kilometru contează
                </h1>
                <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
                  Credem că sportul unește comunități. Oferim suport, antrenamente și motivație pentru alergători de toate nivelurile.
                </p>
              </div>

              <div className="absolute left-20 top-20 z-20 max-w-xs">
                <h2 className="text-white font-black uppercase leading-tight text-3xl drop-shadow-lg mb-4">
                  Fiecare pas
                  <br />
                  <span className="text-yellow-400">contează</span>
                </h2>
                <Link
                  href="/aderare"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-400 
                             text-white font-bold px-6 py-3 rounded-full 
                             text-sm transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Alătură-te acum!
                </Link>
              </div>

              <div className="absolute right-20 top-20 z-20">
                <Image
                  src="/logo-finerune-asociatie-sportiva-full.svg"
                  alt="FineRun.ro - Asociația Sportivă din Iași"
                  width={695}
                  height={448}
                  className="w-56 h-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 desktop: neschimbat, doar durata actualizată */}
          <SwiperSlide data-swiper-autoplay={DESKTOP_PHOTO_DURATION}>
            <div className="relative w-full h-full">
              <img
                src="/hero/slide3-desktop.webp"
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-10 bg-black/50" />
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                  Depășește-ți limitele
                </h1>
                <p className="text-lg md:text-xl max-w-2xl drop-shadow-md">
                  De la primul kilometru până la linia de finish a unui maraton — suntem alături de tine la fiecare pas.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <Arrows prefix="hero-desktop" />
      </section>
    </>
  );
}
