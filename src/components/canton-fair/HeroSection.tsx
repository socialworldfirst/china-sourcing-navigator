"use client";

import { useEffect, useState } from "react";
import basePath from "@/lib/basePath";

function getCountdown() {
  const cantonFair = new Date("2026-04-15T00:00:00+08:00");
  const now = new Date();
  const diff = cantonFair.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const quickLinks = [
  { label: "8–12 Weeks Before", href: "#weeks-12" },
  { label: "2–4 Weeks Before", href: "#weeks-4" },
  { label: "1 Week Before", href: "#weeks-1" },
  { label: "At the Fair", href: "#at-fair" },
  { label: "After the Fair", href: "#after-fair" },
];

export default function HeroSection() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[480px] md:min-h-[520px] flex items-end overflow-hidden">
      <img
        src={`${basePath}/images/canton.webp`}
        alt="Canton Fair exhibition hall"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 pt-32 w-full">
        {/* Countdown badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/70">
            <span className="text-wf-red font-bold">Phase 1</span> starts in{" "}
            {countdown.days} days
          </span>
        </div>

        {/* Title */}
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">
          The First-Timer&apos;s Survival Guide
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-3 tracking-[-0.02em]">
          Canton Fair 2026
        </h1>
        <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mb-8">
          What to expect, what to bring, how to source smart, and how not to
          waste your trip. Step by step, from today to your first supplier
          payment.
        </p>

        {/* Countdown */}
        <div className="flex gap-2.5 mb-8">
          {[
            { val: countdown.days, label: "Days" },
            { val: countdown.hours, label: "Hrs" },
            { val: countdown.minutes, label: "Min" },
            { val: countdown.seconds, label: "Sec" },
          ].map(({ val, label }) => (
            <div key={label} className="text-center">
              <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-xl px-3 py-2.5 min-w-[56px]">
                <span className="text-2xl md:text-3xl font-bold text-white">
                  {val}
                </span>
              </div>
              <span className="text-[10px] text-white/50 font-medium mt-1.5 block">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline nav pills */}
        <div className="flex flex-wrap gap-2">
          {quickLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="btn-pill px-4 py-2 text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-wf-red hover:border-wf-red transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
