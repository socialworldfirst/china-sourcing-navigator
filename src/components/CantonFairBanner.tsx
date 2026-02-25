"use client";

import { useEffect, useState } from "react";

function getCountdown() {
  const cantonFair = new Date("2026-04-15T00:00:00+08:00");
  const now = new Date();
  const diff = cantonFair.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
  };
}

export default function CantonFairBanner() {
  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => setCountdown(getCountdown()), 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white border border-wf-border rounded-2xl overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Left: Content — phases, toolkit, CTA */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-wf-red canton-pulse" />
            <span className="text-wf-red text-xs font-semibold uppercase tracking-wider">
              Phase 1 starts in {countdown.days} days
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-4">
            Going to <span className="accent-word">Canton Fair</span>?
          </h3>

          {/* Phase breakdown — styled differently */}
          <div className="bg-wf-bg-light rounded-xl p-4 mb-5 border border-wf-border">
            <div className="space-y-2">
              {[
                { phase: "Phase 1", dates: "Apr 15 – 19", focus: "Electronics, Machinery, Lighting", active: true },
                { phase: "Phase 2", dates: "Apr 23 – 27", focus: "Consumer Goods, Home, Gifts", active: false },
                { phase: "Phase 3", dates: "May 1 – 5", focus: "Textiles, Apparel, Food", active: false },
              ].map((p) => (
                <div key={p.phase} className={`flex items-center gap-3 text-sm rounded-lg px-3 py-2 ${p.active ? 'bg-wf-red/5 border border-wf-red/15' : ''}`}>
                  <span className={`font-semibold text-xs min-w-[56px] ${p.active ? 'text-wf-red' : 'text-wf-text-muted'}`}>{p.phase}</span>
                  <span className="text-wf-text-muted text-xs">{p.dates}</span>
                  <span className="text-wf-text-secondary text-xs">{p.focus}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-wf-text-secondary text-sm mb-5 leading-relaxed">
            Free toolkit with checklists, supplier templates, and category guides
            for every phase.
          </p>

          {/* What's in the toolkit */}
          <ul className="space-y-2 mb-6">
            {[
              "Pre-fair planning checklist",
              "Supplier evaluation templates",
              "What to bring & apps to install",
              "Phase-by-phase category guide",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-wf-text-secondary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>

          <a
            href="/china-sourcing-navigator/canton-fair-2026"
            className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover self-start"
          >
            Get the Canton Fair Toolkit
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Right: Canton Fair image with countdown overlay */}
        <div className="relative min-h-[400px] md:min-h-0">
          <img
            src="/images/canton.png"
            alt="Canton Fair exhibition hall"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Countdown — centered in the image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-white/70 text-xs uppercase tracking-wider mb-5 font-medium">
              Countdown to Canton Fair
            </p>
            <div className="flex gap-4">
              {[
                { val: countdown.days, label: "Days" },
                { val: countdown.hours, label: "Hours" },
                { val: countdown.minutes, label: "Min" },
              ].map(({ val, label }) => (
                <div key={label} className="text-center">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3">
                    <span className="text-3xl font-semibold text-white">{val}</span>
                  </div>
                  <span className="text-[11px] text-white/60 mt-2 block">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
