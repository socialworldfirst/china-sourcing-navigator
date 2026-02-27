"use client";

import Link from "next/link";

const topCategories = [
  { name: "Apparel & Fashion", stars: 5 },
  { name: "Leather Goods & Bags", stars: 5 },
  { name: "Beauty & Cosmetics", stars: 5 },
  { name: "Textiles & Fabrics", stars: 4 },
  { name: "Furniture & Home", stars: 4 },
  { name: "Toys & Gifts", stars: 4 },
  { name: "Jewelry & Accessories", stars: 3 },
  { name: "Electronics Accessories", stars: 3 },
];

function Stars({ count, white = false }: { count: number; white?: boolean }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill={i <= count ? (white ? "#ffffff" : "#FF0051") : "none"}
          stroke={i <= count ? (white ? "#ffffff" : "#FF0051") : (white ? "rgba(255,255,255,0.4)" : "#d1d5db")}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      {/* ════ HERO IMAGE ════ */}
      <section className="relative min-h-[420px] md:min-h-[480px] flex items-end overflow-hidden">
        <img
          src="https://www.agoda.com/wp-content/uploads/2024/07/Guangzhou-Featured.png"
          alt="Guangzhou skyline"
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] text-white mb-4 tracking-[-0.02em]">
              Guangzhou
            </h1>
            <p className="text-sm md:text-lg text-white/70 leading-relaxed">
              China&apos;s oldest trade capital. The gateway to the Pearl River Delta
              manufacturing belt and the world&apos;s densest cluster of wholesale markets.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="#find-suppliers"
                className="btn-pill px-7 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
              >
                How to Find Suppliers in Guangzhou
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════ WHAT GUANGZHOU MAKES ════ */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
              What <span className="accent-word">Guangzhou</span> Makes
            </h2>
            <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
              Ranked by supply chain depth, supplier density, and export track record
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {topCategories.map((cat, i) => (
              <div
                key={cat.name}
                className={`group relative bg-white border border-wf-border rounded-xl p-4 hover:bg-wf-red hover:border-wf-red transition-all duration-200 cursor-pointer overflow-hidden${i >= 6 ? ' hidden sm:block' : ''}`}
              >
                {/* Tag — top left */}
                <span className="text-wf-text font-semibold text-sm group-hover:text-white transition-colors block">
                  {cat.name}
                </span>
                {/* Stars — below tag, left-aligned */}
                <div className="mt-2 group-hover:hidden">
                  <Stars count={cat.stars} />
                </div>
                <div className="mt-2 hidden group-hover:block">
                  <Stars count={cat.stars} white />
                </div>
                {/* Arrow — right center, appears on hover */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* CTA to categories page */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-wf-red hover:text-wf-red-dark transition-colors"
            >
              Looking for other categories?
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
