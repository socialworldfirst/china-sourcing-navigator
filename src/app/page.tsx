import Header from "@/components/Header";
import CategoryCard from "@/components/CategoryCard";
import WhitePaperCTA from "@/components/WhitePaperCTA";
import CantonFairBanner from "@/components/CantonFairBanner";
import Footer from "@/components/Footer";
import CityCarousel from "@/components/CityCarousel";

const cities = [
  {
    name: "Guangzhou",
    slug: "guangzhou",
    topCategories: ["Electronics", "Apparel", "Beauty"],
    description: "Canton Fair host city and gateway to the Guangdong manufacturing belt.",
    isGuangdong: true,
    imageUrl: "/images/guangzhou.png",
  },
  {
    name: "Shenzhen",
    slug: "shenzhen",
    topCategories: ["Electronics", "Hardware", "LED"],
    description: "China\u2019s tech manufacturing powerhouse.",
    isGuangdong: true,
    imageUrl: "/images/shenzhen.png",
  },
  {
    name: "Dongguan",
    slug: "dongguan",
    topCategories: ["Electronics", "Toys", "Apparel"],
    description: "The world\u2019s factory floor.",
    isGuangdong: true,
    imageUrl: "/images/dongguan.png",
  },
  {
    name: "Foshan",
    slug: "foshan",
    topCategories: ["Building", "Furniture", "Ceramics"],
    description: "Building materials capital of China.",
    isGuangdong: true,
    imageUrl: "/images/foshan.png",
  },
  {
    name: "Yiwu",
    slug: "yiwu",
    topCategories: ["Commodities", "Packaging", "Toys"],
    description: "World\u2019s largest small commodities market.",
    isGuangdong: false,
    imageUrl: "/images/yiwu.png",
  },
  {
    name: "Ningbo",
    slug: "ningbo",
    topCategories: ["Home", "Appliances", "Auto Parts"],
    description: "Major port city with diverse manufacturing.",
    isGuangdong: false,
    imageUrl: "/images/ningbo.png",
  },
  {
    name: "Shanghai",
    slug: "shanghai",
    topCategories: ["Trade Hub", "Fashion", "Finance"],
    description: "China\u2019s international trade and logistics hub.",
    isGuangdong: false,
    imageUrl: "/images/shanghai.png",
  },
];

const categories = [
  { name: "Electronics", slug: "electronics", description: "", topCities: [] },
  { name: "Home & Kitchen", slug: "home-kitchen", description: "", topCities: [] },
  { name: "Apparel & Textiles", slug: "apparel", description: "", topCities: [] },
  { name: "Beauty & Personal Care", slug: "beauty", description: "", topCities: [] },
  { name: "Packaging & Print", slug: "packaging", description: "", topCities: [] },
  { name: "Toys & Games", slug: "toys", description: "", topCities: [] },
  { name: "Lighting", slug: "lighting", description: "", topCities: [] },
  { name: "Building Materials", slug: "building-materials", description: "", topCities: [] },
  { name: "Furniture", slug: "furniture", description: "", topCities: [] },
  { name: "Auto Parts", slug: "auto-parts", description: "", topCities: [] },
  { name: "Small Commodities", slug: "small-commodities", description: "", topCities: [] },
  { name: "Health & Medical", slug: "health-medical", description: "", topCities: [] },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* ================================================
          HERO — Light background with subtle China map
          ================================================ */}
      <section className="relative bg-wf-bg-light py-16 md:py-24 overflow-hidden">
        {/* China map — subtle, right side on desktop, hidden on mobile */}
        <div
          className="absolute right-0 top-0 bottom-0 w-1/2 bg-contain bg-no-repeat bg-right-bottom opacity-[0.08] pointer-events-none hidden lg:block"
          style={{
            backgroundImage: `url('/images/hero-map.png')`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-[40px] sm:text-[48px] md:text-[52px] font-semibold leading-[1.1] mb-5 tracking-[-0.02em]">
              <span className="gradient-text whitespace-nowrap">China Sourcing Navigator</span>
            </h1>

            <p className="text-lg text-wf-text-secondary mb-8 leading-relaxed whitespace-nowrap">
              Your city-by-city guide to sourcing directly from Chinese suppliers
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#cities"
                className="btn-pill px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover text-center"
              >
                Explore by City
              </a>
              <a
                href="#categories"
                className="btn-pill px-8 py-3.5 border border-wf-red text-wf-red font-medium text-sm hover:bg-wf-red hover:text-white text-center transition-colors"
              >
                Explore by Category
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          CITIES — Full-width horizontal carousel, 5 cards visible
          ================================================ */}
      <section id="cities" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
              Where Things Are <span className="accent-word">Made</span>
            </h2>
            <p className="text-wf-text-secondary text-base">
              Click a city to see what it makes and how to source there
            </p>
          </div>
        </div>

        {/* Full-width carousel — no side padding */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CityCarousel cities={cities} />
        </div>
      </section>

      {/* ================================================
          CATEGORIES — Clean text grid
          ================================================ */}
      <section id="categories" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-3">
              Explore by <span className="accent-word">Category</span>
            </h2>
            <p className="text-wf-text-secondary text-base max-w-lg mx-auto">
              Find the right sourcing region for your product
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {categories.map((cat) => (
              <CategoryCard key={cat.slug} {...cat} />
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="#download"
              className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 border border-wf-red text-wf-red font-medium text-sm hover:bg-wf-red hover:text-white transition-colors"
            >
              See all categories in the Sourcing Map
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================
          CANTON FAIR 2026
          ================================================ */}
      <section id="canton-fair" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <CantonFairBanner />
        </div>
      </section>

      {/* ================================================
          DOWNLOAD THE SOURCING MAP
          ================================================ */}
      <section id="download" className="py-16 md:py-24 bg-wf-bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <WhitePaperCTA />
        </div>
      </section>

      {/* ================================================
          UNLOCK 1688
          ================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1688 intro block */}
          <div className="bg-wf-bg-light border border-wf-border rounded-2xl overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: 1688 screenshot */}
              <div className="relative min-h-[320px] bg-white flex items-center justify-center p-4">
                <img
                  src="/images/1688.png"
                  alt="1688 marketplace platform"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>

              {/* Right: Content */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                {/* 1688 branding in orange */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold" style={{ color: '#FF6A00' }}>1688</span>
                  <span className="text-xs text-wf-text-muted">by Alibaba Group</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-2">
                  Unlock <span style={{ color: '#FF6A00' }}>1688</span> with WorldFirst
                </h2>
                <p className="text-xl text-wf-text-secondary font-medium mb-2">
                  Source at factory price
                </p>
                <p className="text-wf-text-muted text-sm mb-6 leading-relaxed">
                  Alibaba&apos;s domestic B2B marketplace in China — where factories and
                  wholesalers actually trade with each other.
                </p>

                {/* Benefits — visual cards, not bullets */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-white rounded-xl border border-wf-border p-4">
                    <div className="text-2xl mb-2">💰</div>
                    <h4 className="text-sm font-semibold text-wf-text mb-1">Lower Prices</h4>
                    <p className="text-xs text-wf-text-muted leading-relaxed">
                      20-40% cheaper than Alibaba.com — cut out the middleman markup
                    </p>
                  </div>
                  <div className="bg-white rounded-xl border border-wf-border p-4">
                    <div className="text-2xl mb-2">🏭</div>
                    <h4 className="text-sm font-semibold text-wf-text mb-1">Find Real Factories</h4>
                    <p className="text-xs text-wf-text-muted leading-relaxed">
                      Source directly from manufacturers, not resellers or trading companies
                    </p>
                  </div>
                </div>

                {/* WF as official payment partner */}
                <a
                  href="https://www.worldfirst.com/uk/pay-1688/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white rounded-xl border border-wf-border p-4 hover:border-wf-red/30 transition-colors group cursor-pointer"
                >
                  <img
                    src="/images/wf-logo-primary.png"
                    alt="WorldFirst"
                    className="h-5 w-auto"
                  />
                  <div className="flex-1">
                    <span className="text-xs font-medium text-wf-text group-hover:text-wf-red transition-colors">
                      Official payment partner to 1688
                    </span>
                    <p className="text-[10px] text-wf-text-muted">
                      Pay 1688 suppliers in CNY directly from your World Account
                    </p>
                  </div>
                  <svg className="text-wf-text-muted group-hover:text-wf-red transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Two feature cards below */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* AI Sourcing Agent */}
            <div className="bg-wf-bg-light border border-wf-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-wf-red/5 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-wf-text font-semibold text-lg">AI Sourcing Agent</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-wf-red/10 text-wf-red rounded-full font-medium">
                    Select regions
                  </span>
                </div>
              </div>
              <p className="text-wf-text-secondary text-sm leading-relaxed mb-5">
                Search 1688 in English. Our AI translates, scans factory listings,
                compares prices, and returns verified results.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Search 1688 in English with AI translation",
                  "Factory verification built into results",
                  "Compare quotes across suppliers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.worldfirst.com/uk/register/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
              >
                Try the AI Sourcing Agent
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* 1688 World Pay */}
            <div className="bg-wf-bg-light border border-wf-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255,106,0,0.08)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-wf-text font-semibold text-lg">1688 World Pay</h3>
                  <span className="text-[10px] px-2 py-0.5 bg-green-50 text-wf-success rounded-full font-medium">
                    All regions
                  </span>
                </div>
              </div>
              <p className="text-wf-text-secondary text-sm leading-relaxed mb-5">
                1688 only accepts CNY from Chinese bank accounts. 1688 World Pay lets
                you pay any 1688 supplier directly from your World Account.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Pay 1688 suppliers directly in CNY",
                  "0.4% fee vs 3% credit card surcharge",
                  "No Chinese bank account required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
                    <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://www.worldfirst.com/uk/pay-1688/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-6 py-3 border border-[#FF6A00] text-[#FF6A00] text-sm font-medium hover:bg-[#FF6A00] hover:text-white transition-colors"
              >
                Learn about 1688 World Pay
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          PAY INTO CHINA — Dark purple gradient
          ================================================ */}
      <section id="payment" className="py-16 md:py-24 bg-wf-purple-glow relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-wf-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-14">
            <p className="text-wf-red text-sm font-medium mb-3 uppercase tracking-wider">
              First time sourcing directly from a Chinese supplier?
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
              Pay Into China with <span className="text-wf-red">Confidence</span>
            </h2>
            <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
              Going off-platform means better prices, but buyer protection disappears.
              WorldFirst gives you verification, escrow, and same-day delivery on every payment.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
            {[
              { stat: "1.5M+", label: "Customers worldwide" },
              { stat: "30+", label: "Global offices" },
              { stat: "210+", label: "Countries & regions" },
              { stat: "$500B", label: "Transactions processed" },
            ].map(({ stat, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold stat-number mb-1">{stat}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>

          {/* Escrow + Verification block */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Escrow info */}
                <div className="p-8 md:p-10">
                  <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Escrow + Supplier Verification
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-5">
                    Before your money moves, we verify your supplier&apos;s business registration
                    against their bank account. WorldTrade holds your payment in escrow until
                    shipment is confirmed.
                  </p>
                  <ul className="space-y-2.5 mb-6">
                    {[
                      "Bank account cross-checked against business registration",
                      "Factory vs trading company status verified",
                      "Funds held in escrow until shipment confirmed",
                      "Free with every World Account",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                        <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://www.worldfirst.com/uk/worldtrade/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
                  >
                    Learn about WorldTrade
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>

                {/* Right: Mock UI */}
                <div className="bg-white/5 p-8 md:p-10 flex flex-col justify-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Supplier Verified</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-white/50">Business name match</span><span className="text-green-400 font-medium">Confirmed</span></div>
                      <div className="flex justify-between"><span className="text-white/50">Bank account match</span><span className="text-green-400 font-medium">Confirmed</span></div>
                      <div className="flex justify-between"><span className="text-white/50">Type</span><span className="font-medium text-white">Factory (est. 2014)</span></div>
                    </div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-white">Payment in Escrow</span>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between"><span className="text-white/50">Amount</span><span className="font-medium text-white">&yen;145,200</span></div>
                      <div className="flex justify-between"><span className="text-white/50">Status</span><span className="text-blue-400 font-medium">Held until shipment</span></div>
                      <div className="flex justify-between"><span className="text-white/50">Protection</span><span className="text-green-400 font-medium">Active</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How it works + YouTube video */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="text-xl font-semibold text-white text-center mb-8">How It Works</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left: Steps */}
              <div className="space-y-6">
                {[
                  { step: "1", title: "Select your payee", desc: "Add your Chinese supplier\u2019s details. We verify their bank account against their business registration." },
                  { step: "2", title: "Enter the amount", desc: "Choose your currency pair. See the live exchange rate, fee, and total cost before confirming." },
                  { step: "3", title: "Confirm and send", desc: "Payment protected with WorldTrade escrow. 80% of CNY payments arrive same day." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-wf-red/20 border border-wf-red/30 flex items-center justify-center">
                      <span className="text-wf-red font-semibold text-sm">{step}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-base mb-1">{title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right: YouTube video embed */}
              <div className="relative rounded-2xl overflow-hidden bg-black min-h-[280px]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/r6SSaaOXOUY"
                  title="Pay Into China with WorldFirst"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* 3 feature cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
                title: "Same-Day Payments",
                desc: "80% arrive same day via Chinese domestic banking rails.",
                stat: "80%", statLabel: "same-day arrival",
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
                title: "Save on Every Payment",
                desc: "Competitive mid-market rates. Lock rates with forwards.",
                stat: "2-4%", statLabel: "saved on bank FX margins",
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
                title: "150k+ Supplier Network",
                desc: "Payments between WorldFirst accounts are instant and free.",
                stat: "150k+", statLabel: "verified suppliers in Asia",
              },
            ].map(({ icon, title, desc, stat, statLabel }) => (
              <div key={title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
                <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">{icon}</div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-3">{desc}</p>
                <div className="text-2xl font-semibold text-wf-red">{stat}</div>
                <div className="text-xs text-white/40">{statLabel}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.worldfirst.com/uk/register/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover"
            >
              Open a World Account — Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ================================================
          WHY WORLDFIRST
          ================================================ */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 bg-wf-bg-light border border-wf-border flex items-center justify-center p-6">
                  <img src="/images/wf-logo-primary.png" alt="WorldFirst" className="w-full h-auto max-h-full object-contain" />
                </div>
                <div
                  className="rounded-2xl overflow-hidden h-32 bg-cover bg-center border border-wf-border"
                  style={{ backgroundImage: `url('https://mdn.marmot-cloud.com/worldfirst/sites/9/2024/09/20240912065306516.png')` }}
                />
              </div>
              <div className="space-y-4 pt-8">
                <div
                  className="rounded-2xl overflow-hidden h-32 bg-cover bg-center border border-wf-border"
                  style={{ backgroundImage: `url('https://cdn.marmot-cloud.com/worldfirst/sites/15/2023/12/asset_07_uk_make_international_payments.png')` }}
                />
                <div
                  className="rounded-2xl overflow-hidden h-48 bg-cover bg-center border border-wf-border"
                  style={{ backgroundImage: `url('https://cdn.marmot-cloud.com/worldfirst/sites/15/2023/12/asset_04_uk_grow_your_business_without_barriers.png')` }}
                />
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-wf-text mb-6">
                Why <span className="accent-word">WorldFirst</span> Built This
              </h2>
              <p className="text-wf-text-secondary text-base leading-relaxed mb-5">
                WorldFirst has been helping businesses move money across borders
                since 2004. We process payments across 200+ countries in 20+ currencies.
              </p>
              <p className="text-wf-text-secondary text-base leading-relaxed mb-5">
                We&apos;ve watched thousands of importers transition from marketplace platforms
                to direct factory sourcing. The ones who succeed did their homework on
                cities, suppliers, and payment protection before wiring their first deposit.
              </p>
              <p className="text-wf-text-secondary text-base leading-relaxed mb-8">
                We built this guide because safe sourcing and safe payment are inseparable.
              </p>

              <div className="grid grid-cols-4 gap-4">
                {[
                  { stat: "2004", label: "Founded" },
                  { stat: "200+", label: "Countries" },
                  { stat: "20+", label: "Currencies" },
                  { stat: "1M+", label: "Businesses" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <div className="text-2xl font-semibold text-wf-text">{stat}</div>
                    <div className="text-xs text-wf-text-muted mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
