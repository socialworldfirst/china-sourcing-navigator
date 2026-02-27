import MarketCard from "@/components/MarketCard";
import TradeShowCalendar from "./TradeShowCalendar";
import basePath from "@/lib/basePath";

const markets = [
  // Apparel cluster
  { nameEn: "Shisanhang (十三行)", nameCn: "十三行", metro: "Wenhua Park", metroLines: "Line 1, 6", specialty: "Mid-range fashion. 6,000+ vendors across multiple buildings. China's oldest garment wholesale district.", gradient: "market-grad-apparel", bestFor: "Mid-range women's fashion, fast-turnaround orders" },
  { nameEn: "Baima Garment Market", nameCn: "白马服装市场", metro: "Guangzhou Railway Station", metroLines: "Line 2, 5", specialty: "Premium, brand-focused fashion. Higher price tier. Many vendors accept low MOQs for quality buyers.", gradient: "market-grad-apparel", bestFor: "Higher-end fashion, brand buyers" },
  { nameEn: "Shahe Clothing Market", nameCn: "沙河服装批发市场", metro: "Shahe", metroLines: "Line 6", specialty: "Budget-to-mid fashion. Enormous volume. Primary supplier to Chinese e-commerce sellers.", gradient: "market-grad-apparel", bestFor: "Budget fashion, high volume, e-commerce" },
  // Textiles
  { nameEn: "Zhongda Fabric Market", nameCn: "中大布料市场", metro: "Zhongda", metroLines: "Line 8", specialty: "Asia's largest fabric market. 20,000+ shops across 50+ buildings. Every fabric type imaginable.", gradient: "market-grad-textiles", bestFor: "Fabric sourcing, trims, accessories" },
  // Leather
  { nameEn: "Shiling Leather City", nameCn: "狮岭皮革城", metro: "Bus from Huadu", metroLines: "No direct metro", specialty: "China's Capital of Leather. Factory + showroom in one town. Handbags, wallets, luggage, belts.", gradient: "market-grad-leather", bestFor: "Leather goods — bags, wallets, luggage" },
  { nameEn: "Sanyuanli Leather Market", nameCn: "三元里皮具城", metro: "Sanyuanli", metroLines: "Line 2", specialty: "Urban leather wholesale. More convenient than Shiling. Good for samples and comparisons.", gradient: "market-grad-leather", bestFor: "Quick leather goods comparison, samples" },
  // Beauty
  { nameEn: "Meibo Cheng (Beauty City)", nameCn: "美博城", metro: "Sanyuanli", metroLines: "Line 2", specialty: "OEM cosmetics, skincare, beauty tools, packaging. Co-located manufacturers and suppliers.", gradient: "market-grad-beauty", bestFor: "Cosmetics OEM/ODM, beauty tools, packaging" },
  // Toys
  { nameEn: "Yide Road Toy District", nameCn: "一德路", metro: "Haizhu Square", metroLines: "Line 2, 6", specialty: "Plush toys, educational, seasonal, promotional goods. Adjacent to dried goods market.", gradient: "market-grad-toys", bestFor: "Toys, seasonal goods, party supplies" },
  // Jewelry
  { nameEn: "Liwan Plaza", nameCn: "荔湾广场", metro: "Changshou Lu", metroLines: "Line 1", specialty: "Jade, crystals, semi-precious stones. Southeast Asia's largest crystal wholesale market.", gradient: "market-grad-jewelry", bestFor: "Jade, crystals, precious stones" },
  { nameEn: "Xijiao Building", nameCn: "西郊大厦", metro: "Xicun", metroLines: "Line 5", specialty: "Fashion jewelry, hair accessories, costume jewelry. High variety, low MOQ.", gradient: "market-grad-jewelry", bestFor: "Fashion jewelry, accessories" },
  // Electronics
  { nameEn: "Dashatou Electronics", nameCn: "大沙头电器城", metro: "Donghu", metroLines: "Line 6", specialty: "Consumer electronics accessories, phone cases, chargers, audio. Not in Shenzhen's league for core electronics.", gradient: "market-grad-electronics", bestFor: "Phone accessories, chargers, audio" },
];

export default function MarketsTradeShowsLayer() {
  return (
    <div className="space-y-12">
      {/* ── Intro ── */}
      <div>
        <p className="text-wf-text-secondary leading-relaxed max-w-3xl">
          Guangzhou has more wholesale markets than any other Chinese city — concentrated clusters where hundreds or thousands of vendors sell side by side. Walking these markets is the fastest way to compare quality, pricing, and MOQs in person.
        </p>
      </div>

      {/* ── Market Directory ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-2">Market Directory</h4>
        <p className="text-sm text-wf-text-muted mb-6">
          All major wholesale markets in Guangzhou, sorted by product category. Chinese names included for navigation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {markets.map((m) => (
            <MarketCard key={m.nameEn} {...m} />
          ))}
        </div>
      </div>

      {/* ── Trade Show Calendar ── */}
      <TradeShowCalendar />

      {/* ── Canton Fair Deep Dive ── */}
      <div>
        <h4 className="text-lg font-semibold text-wf-text mb-6">Canton Fair — The Main Event</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: What is Canton Fair? */}
          <div className="bg-white border border-wf-border rounded-2xl overflow-hidden">
            <div className="relative min-h-[200px] bg-wf-bg-light">
              <img
                src={`${basePath}/images/canton.png`}
                alt="Canton Fair exhibition hall"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h5 className="text-base font-semibold text-wf-text mb-3">What Is the Canton Fair?</h5>
              <p className="text-sm text-wf-text-secondary leading-relaxed mb-4">
                The China Import and Export Fair (Canton Fair) is the world&apos;s largest trade fair — held twice a year in Guangzhou since 1957. Over 25,000 exhibitors across 3 phases, covering virtually every product category China exports.
              </p>
              <div className="space-y-2">
                {[
                  { label: "Spring edition", value: "April 15 – May 5, 2026" },
                  { label: "Autumn edition", value: "October 15 – November 4, 2026" },
                  { label: "Location", value: "Canton Fair Complex, Pazhou (Metro Line 8)" },
                  { label: "Registration", value: "Free — register at cantonfair.org.cn" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-2 text-sm">
                    <span className="text-wf-text-muted min-w-[120px]">{item.label}</span>
                    <span className="text-wf-text font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Canton Fair Toolkit */}
          <div className="space-y-4">
            <div className="bg-white border border-wf-border rounded-2xl p-6">
              <h5 className="text-base font-semibold text-wf-text mb-4">Canton Fair Toolkit</h5>
              <div className="space-y-3">
                {[
                  { title: "Phase 1 — Electronics & Machinery", dates: "Apr 15-19", categories: "Electronics, hardware, vehicles, tools, lighting, chemical products" },
                  { title: "Phase 2 — Home & Décor", dates: "Apr 23-27", categories: "Ceramics, home décor, gifts, garden, building materials" },
                  { title: "Phase 3 — Textiles & Apparel", dates: "May 1-5", categories: "Textiles, garments, shoes, bags, food, medical" },
                ].map((phase) => (
                  <div key={phase.title} className="p-4 bg-wf-bg-light rounded-xl">
                    <div className="flex items-center justify-between mb-1">
                      <h6 className="text-sm font-medium text-wf-text">{phase.title}</h6>
                      <span className="text-xs text-wf-red font-medium">{phase.dates}</span>
                    </div>
                    <p className="text-xs text-wf-text-muted">{phase.categories}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-wf-red/5 border border-wf-red/20 rounded-2xl p-6">
              <h5 className="text-sm font-semibold text-wf-text mb-3 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                Pro Tip: Use the Canton Fair as a Starting Point
              </h5>
              <p className="text-sm text-wf-text-secondary leading-relaxed mb-3">
                Many importers attend Canton Fair to identify suppliers, then negotiate and reorder directly — at lower prices — through the supplier&apos;s 1688 store or factory. The Fair is the introduction; the ongoing relationship is where the value is.
              </p>
              <p className="text-xs text-wf-text-muted italic">
                WorldFirst&apos;s AI Sourcing Agent can help you find your Canton Fair supplier&apos;s 1688 store after the event.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Market Tips ── */}
      <div className="bg-wf-bg-light rounded-2xl p-6 md:p-8">
        <h4 className="text-base font-semibold text-wf-text mb-4">Tips for Visiting Guangzhou Markets</h4>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Bring a translator app", desc: "Most vendors speak limited English. WeChat translate or Google Lens for product labels." },
            { title: "Carry cash (CNY) and WeChat Pay", desc: "Many market vendors prefer cash or WeChat. Cards are rarely accepted at stall level." },
            { title: "Take photos of everything", desc: "Booth numbers, price tags, business cards. You'll need them for reorder comparisons." },
            { title: "Visit in the morning", desc: "Markets are busiest 9am-2pm. Some close by 5pm. Go early for serious buying." },
            { title: "Don't buy on your first visit", desc: "Walk the full market first. Compare 5+ vendors for the same product before committing." },
            { title: "Get the vendor's WeChat", desc: "This is your ongoing order channel. More reliable than phone numbers for reorders." },
          ].map((tip) => (
            <div key={tip.title} className="flex items-start gap-3">
              <svg className="mt-0.5 flex-shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
              <div>
                <span className="text-sm font-medium text-wf-text">{tip.title}</span>
                <p className="text-xs text-wf-text-muted mt-0.5">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
