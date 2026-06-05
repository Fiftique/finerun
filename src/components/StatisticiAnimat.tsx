"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Alergători activi", icon: "runners" },
  { value: 30, suffix: "+", label: "Maratoane parcurse", icon: "trophy" },
  { value: 5, suffix: "", label: "Ani de activitate", icon: "calendar" },
  { value: 15000, suffix: "+", label: "Kilometri alergați", icon: "road" },
];

function useCountUp(target: number, isVisible: boolean, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target, duration]);

  return count;
}

function StatCard({ value, suffix, label, icon, isVisible, delay }: {
  value: number; suffix: string; label: string; icon: string; isVisible: boolean; delay: number;
}) {
  const count = useCountUp(value, isVisible);

  const icons: Record<string, JSX.Element> = {
    runners: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    trophy: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0016.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.003 6.003 0 01-5.54 0m5.54 0l-.982 3.172M7.73 9.728l.983 3.172" />
      </svg>
    ),
    calendar: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
    road: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  };

  return (
    <div
      className="flex flex-col items-center text-center transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="text-yellow-400 mb-3">{icons[icon]}</div>
      <span className="text-4xl sm:text-5xl md:text-6xl font-black text-white tabular-nums">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-gray-400 text-sm sm:text-base mt-2 font-medium">{label}</span>
    </div>
  );
}

export default function StatisticiAnimat() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 px-6 bg-gray-900 overflow-hidden"
    >
      {/* Animated runner silhouette - background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 512 512" fill="white" className="w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          <path d="M353.2 3.7c-9.7-1.6-19.3 2.2-25.5 9.7l-46 56.3c-4.8 5.9-11.9 9.3-19.4 9.3H208c-13.3 0-24 10.7-24 24s10.7 24 24 24h54.3c22.5 0 43.7-10.4 57.5-28.2l11.5-14.8 3.5 17.4c2.4 12.3 9.6 23.1 20 30.2l56 38.5c7.2 4.9 15.5 7.6 24 7.6h25.2c13.3 0 24-10.7 24-24s-10.7-24-24-24h-25.2l-56-38.5-15.7-78.4c-2.4-12-11-21.7-22.8-25.6zM269.5 220.8c-7.3 3.1-13.1 8.8-16.3 16l-27.5 62c-5.7 12.8-1.5 27.8 9.9 35.4l50.3 33.5-37.5 75c-6 11.9-1.2 26.4 10.7 32.4s26.4 1.2 32.4-10.7l44.2-88.4c5-9.9 2.3-21.8-6.3-28.6l-46.5-31 22-49.5 31.7 30.3c6.3 6.1 14.8 9.5 23.6 9.5H416c13.3 0 24-10.7 24-24s-10.7-24-24-24h-44.6l-55.5-53.1c-10-9.5-24.3-13.3-37.7-7.8zM131.5 243.5c-2.3-6-7.4-10.4-13.7-11.8l-80-17.1C31.3 213.1 24.9 217 23.4 223.5s3.3 12.9 9.8 14.4l80 17.1c6.5 1.4 12.9-2.5 14.4-9s-2.5-12.9-9-14.4l12.9 11.9zM97.3 350.1l-73.6 36.8c-5.9 3-8.3 10.1-5.4 16s10.1 8.3 16 5.4l73.6-36.8c5.9-3 8.3-10.1 5.4-16s-10.1-8.3-16-5.4zM149.3 427.9l-48 72c-3.7 5.5-2.2 12.9 3.3 16.6s12.9 2.2 16.6-3.3l48-72c3.7-5.5 2.2-12.9-3.3-16.6s-12.9-2.2-16.6 3.3z"/>
        </svg>
      </div>

      {/* Linia decorativă animată */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400">
        <div
          className="h-full bg-white/30 transition-all duration-[3000ms] ease-out"
          style={{ width: isVisible ? "100%" : "0%" }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Titlu */}
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <span className="text-yellow-400 text-sm sm:text-base font-semibold uppercase tracking-widest">
            🏃 Comunitatea FineRun în cifre
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
            Fiecare pas contează
          </h2>
        </div>

        {/* Statistici grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              {...stat}
              isVisible={isVisible}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
