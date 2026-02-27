"use client";

import { useState } from "react";

interface MarketCardProps {
  nameEn: string;
  nameCn: string;
  address?: string;
  metro?: string;
  metroLines?: string;
  specialty: string;
  gradient: string;
  bestFor?: string;
}

export default function MarketCard({ nameEn, nameCn, address, metro, metroLines, specialty, gradient, bestFor }: MarketCardProps) {
  const [copied, setCopied] = useState(false);

  const displayAddress = address || (metro ? `${metro} Station${metroLines ? ` (${metroLines})` : ""}` : "");

  const handleCopy = () => {
    navigator.clipboard.writeText(displayAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card-hover bg-white border border-wf-border rounded-2xl overflow-hidden h-full flex flex-col">
      {/* Color header */}
      <div className={`${gradient} h-24 flex items-center justify-center px-4`}>
        <span className="text-2xl font-bold text-wf-text/10">{nameCn}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h4 className="text-sm font-semibold text-wf-text mb-0.5">{nameEn}</h4>
        <p className="text-xs text-wf-text-muted mb-3">{nameCn}</p>

        <p className="text-sm text-wf-text-secondary leading-relaxed mb-3">{specialty}</p>

        {bestFor && (
          <p className="text-xs text-wf-text-muted italic mb-3">Best for: {bestFor}</p>
        )}

        {/* Address — pushed to bottom */}
        <div className="mt-auto pt-3 border-t border-wf-border">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="flex-1 text-xs text-wf-text-secondary leading-relaxed">{displayAddress}</p>
            <button
              onClick={handleCopy}
              className="flex-shrink-0 p-1.5 rounded-lg hover:bg-wf-bg-light transition-colors"
              title="Copy address"
            >
              {copied ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
