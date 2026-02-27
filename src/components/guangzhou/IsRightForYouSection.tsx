"use client";

import Link from "next/link";
import { useState } from "react";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FF0051" : "none"}
          stroke="#FF0051"
          strokeWidth="1.5"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </span>
  );
}

function CityLink({ city }: { city: string }) {
  const slug = city.toLowerCase().replace(/\s+/g, "-");
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/cities/${slug}`}
      className="relative inline-flex items-center text-wf-text-secondary hover:text-wf-red transition-colors text-sm"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {city}
      {hovered && (
        <span className="absolute left-0 -top-7 bg-wf-text text-white text-[10px] font-medium px-2 py-1 rounded whitespace-nowrap flex items-center gap-1 z-10">
          Learn more
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </span>
      )}
    </Link>
  );
}

const fitData = [
  { category: "Apparel & Fashion", rating: 5, cities: ["Shenzhen", "Dongguan", "Keqiao"] },
  { category: "Leather & Bags", rating: 5, cities: ["Yiwu", "Dongguan"] },
  { category: "Beauty & Cosmetics", rating: 5, cities: ["Shanghai", "Yiwu"] },
  { category: "Textiles & Fabrics", rating: 5, cities: ["Keqiao", "Dongguan"] },
  { category: "Toys & Games", rating: 3, cities: ["Shantou", "Yiwu"] },
  { category: "Furniture & Home", rating: 4, cities: ["Foshan", "Dongguan"] },
  { category: "Jewelry & Accessories", rating: 4, cities: ["Yiwu", "Shenzhen"] },
  { category: "Electronics", rating: 2, cities: ["Shenzhen", "Dongguan"] },
  { category: "Shoes & Footwear", rating: 2, cities: ["Quanzhou", "Dongguan", "Wenzhou"] },
  { category: "Lighting", rating: 2, cities: ["Zhongshan", "Ningbo"] },
];

const checklistItems = [
  "Apparel & fashion: deepest market infrastructure in China",
  "Leather goods & bags: Shiling is China's Capital of Leather",
  "Beauty & cosmetics: China's OEM/ODM manufacturing hub",
  "Textiles & fabrics: Asia's largest fabric market at Zhongda",
  "Furniture via Foshan's Lecong, world's largest, 30 min away",
  "Multiple categories in one trip: no other city covers this much",
];

export default function IsRightForYouSection() {
  return (
    <section className="py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
          Is Guangzhou <span className="accent-word">Right</span> for You?
        </h2>
        <p className="text-wf-text-secondary mb-10 max-w-2xl">
          Guangzhou covers more product categories than any other Chinese sourcing city. Here&apos;s a quick check.
        </p>

        {/* Checklist */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-12">
          {checklistItems.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <svg className="mt-0.5 flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              <span className="text-wf-text text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* Product-City Fit Table */}
        <div className="bg-white border border-wf-border rounded-2xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-wf-border bg-wf-bg-light">
            <h3 className="text-base font-semibold text-wf-text">Product-City Fit</h3>
            <p className="text-xs text-wf-text-muted mt-0.5">How strong is Guangzhou for each product category?</p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-wf-border">
                  <th className="text-left text-xs font-semibold text-wf-text-muted uppercase tracking-wider py-3 px-6 w-[40%]">Category</th>
                  <th className="text-left text-xs font-semibold text-wf-text-muted uppercase tracking-wider py-3 px-4 w-[30%]">Guangzhou Strength</th>
                  <th className="text-left text-xs font-semibold text-wf-text-muted uppercase tracking-wider py-3 px-4 w-[30%]">Alternative Cities</th>
                </tr>
              </thead>
              <tbody>
                {fitData.map((row, i) => (
                  <tr key={row.category} className={`border-b border-wf-border/50 ${i % 2 !== 0 ? "bg-wf-bg-light/30" : ""} hover:bg-wf-bg-light/50 transition-colors`}>
                    <td className="py-3 px-6">
                      <span className="text-sm font-medium text-wf-text">{row.category}</span>
                    </td>
                    <td className="py-3 px-4">
                      <StarRating rating={row.rating} />
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex flex-wrap gap-x-3 gap-y-1">
                        {row.cities.map((city, ci) => (
                          <span key={city} className="inline-flex items-center">
                            <CityLink city={city} />
                            {ci < row.cities.length - 1 && <span className="text-wf-border ml-3">&middot;</span>}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked */}
          <div className="md:hidden divide-y divide-wf-border/50">
            {fitData.map((row) => (
              <div key={row.category} className="px-5 py-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-wf-text">{row.category}</span>
                  <StarRating rating={row.rating} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.cities.map((city) => (
                    <CityLink key={city} city={city} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
