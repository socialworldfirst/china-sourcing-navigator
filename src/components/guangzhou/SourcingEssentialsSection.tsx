export default function SourcingEssentialsSection() {
  const essentials = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
      title: "Timing Your Trip",
      description: "When to visit, which seasons to avoid, how to align with Canton Fair and factory production cycles.",
      highlights: ["Spring Canton Fair: April–May", "Avoid Chinese New Year (Jan/Feb)", "Factory slowdowns: August heat"],
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>,
      title: "MOQ & Pricing",
      description: "Understanding minimum order quantities, price tiers, sample costs, and how to negotiate at each sourcing layer.",
      highlights: ["Market MOQs: 50–500 pieces", "Factory MOQs: 500–3,000 pieces", "1688 MOQs: Often just 2–5 pieces"],
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
      title: "Culture & Negotiation",
      description: "How Chinese business relationships work. Building guanxi, WeChat etiquette, and common negotiation mistakes.",
      highlights: ["WeChat > email for everything", "Never publicly embarrass a supplier", "Relationships unlock better pricing over time"],
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
      title: "Shipping & Logistics",
      description: "From factory to your warehouse. Sea freight, air freight, consolidation, Incoterms, and customs basics.",
      highlights: ["Sea freight: 3–6 weeks (cheapest)", "Air freight: 5–10 days (fastest)", "LCL consolidation for small orders"],
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
          Sourcing <span className="accent-word">Essentials</span>
        </h2>
        <p className="text-wf-text-secondary mb-10 max-w-2xl">
          Beyond finding suppliers, successful sourcing requires understanding timing, pricing, culture, and logistics. Here&apos;s a quick preview.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {essentials.map((item) => (
            <div
              key={item.title}
              className="card-hover bg-white border border-wf-border rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-wf-red/5 border border-wf-red/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-wf-text mb-2">{item.title}</h3>
                  <p className="text-sm text-wf-text-secondary leading-relaxed mb-3">{item.description}</p>
                  <ul className="space-y-1.5">
                    {item.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-wf-text-muted">
                        <span className="w-1 h-1 rounded-full bg-wf-red flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-wf-bg-light rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-wf-text mb-2">
            Get the Full Sourcing Playbook
          </h3>
          <p className="text-sm text-wf-text-secondary mb-6 max-w-lg mx-auto">
            Timing guides, MOQ negotiation templates, Incoterms cheat sheets, and logistics cost calculators — all in the free China Sourcing Map.
          </p>
          <a
            href="#download"
            className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
          >
            Download the Free Sourcing Map
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
