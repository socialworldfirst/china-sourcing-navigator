"use client";

import { useRef, useState, useEffect } from "react";
import CityCard from "./CityCard";

interface City {
  name: string;
  slug: string;
  topCategories: string[];
  description: string;
  isGuangdong: boolean;
  imageUrl: string;
}

interface CityCarouselProps {
  cities: City[];
}

export default function CityCarousel({ cities }: CityCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.clientWidth / 5;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Cards container — full width, no side padding, 5 visible */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scroll-container"
      >
        {cities.map((city) => (
          <CityCard key={city.slug} {...city} />
        ))}
      </div>

      {/* Left arrow — overlays left edge of cards */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
          aria-label="Scroll left"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Right arrow — overlays right edge of cards */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-wf-text hover:bg-wf-red hover:text-white transition-all duration-200"
          aria-label="Scroll right"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}
