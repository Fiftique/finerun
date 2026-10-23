"use client";

import { useEffect, useState } from "react";

const START_VALUE = 14000;
const DEFAULT_INTERVAL_MS = 4000;

export default function KilometriCounter({
  intervalMs = DEFAULT_INTERVAL_MS,
}: {
  intervalMs?: number;
}) {
  const [km, setKm] = useState(START_VALUE);

  useEffect(() => {
    const timer = setInterval(() => {
      setKm((prev) => prev + 1);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [intervalMs]);

  return (
    <div className="text-right text-white drop-shadow-lg">
      <span className="block text-3xl sm:text-4xl md:text-5xl font-black tabular-nums leading-none">
        {km.toLocaleString("ro-RO")}
      </span>
      <span className="block text-xs sm:text-sm font-semibold uppercase tracking-wider text-yellow-400 mt-1">
        Km alergați
      </span>
    </div>
  );
}
