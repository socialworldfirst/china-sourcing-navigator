"use client";

import basePath from "@/lib/basePath";

export default function WhitePaperCTA() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
      {/* LEFT: Cover image — bigger, no radius, standalone */}
      <div className="flex-shrink-0 order-1 lg:order-1 flex justify-center">
        <div className="relative w-64 md:w-72 h-auto shadow-xl">
          <img
            src={`${basePath}/images/china-sourcing-map-cover.webp`}
            alt="China Sourcing Map"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT: Content + bullets + CTA */}
      <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
        <h3 className="text-2xl md:text-3xl font-semibold text-wf-text mb-3">
          Download the<br className="md:hidden" /> <span className="accent-word">China Sourcing Map</span>
        </h3>
        <p className="text-wf-text-secondary text-sm mb-6 leading-relaxed">
          70+ pages of city maps, category breakdowns, supplier verification
          frameworks, and payment safety guides. The complete companion to
          sourcing directly from China.
        </p>

        {/* What's inside */}
        <ul className="space-y-2 mb-6 inline-block text-left">
          {[
            "7 city profiles with manufacturing district maps",
            "8 category guides with pricing benchmarks",
            "Supplier verification checklist",
            "Payment protection decision tree",
            "Canton Fair preparation guide",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
              <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="lg:text-left text-center">
        <a
          href="#"
          className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover"
        >
          Download for Free
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
          </svg>
        </a>
        </div>
      </div>
    </div>
  );
}
