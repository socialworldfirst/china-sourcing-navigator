import basePath from "@/lib/basePath";

export default function Unlock1688Section() {
  return (
    <>
      {/* Section hero header */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-3">
          <span style={{ color: '#FF6A00' }}>Unlock 1688</span><br className="md:hidden" />{' '}
          <span className="text-wf-red">with WorldFirst</span>
        </h2>
        <p className="text-wf-text-secondary text-base max-w-xl mx-auto leading-relaxed">
          1688 is where you source at factory price. It&apos;s Alibaba&apos;s domestic B2B marketplace in China.
        </p>
      </div>

      {/* 3 horizontal cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1: Why Choose 1688? */}
        <div className="bg-wf-bg-light border border-wf-border rounded-2xl overflow-hidden flex flex-col">
          <div className="aspect-[4/3] border-b border-wf-border overflow-hidden">
            <img
              src={`${basePath}/images/1688.webp`}
              alt="1688 marketplace platform"
              className="w-full h-full object-cover object-left-top"
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <h3 className="text-wf-text font-semibold text-lg mb-3">Why Choose 1688?</h3>
            <p className="text-wf-text-secondary text-sm leading-relaxed mb-4">
              Alibaba&apos;s domestic B2B marketplace where factories and wholesalers
              actually trade with each other. Prices are 20-40% lower than Alibaba.com.
            </p>
            <ul className="space-y-2 mb-5">
              {["20-40% lower than Alibaba.com prices", "Source directly from real factories", "No international middleman markup"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
                  <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a
                href="https://www.worldfirst.com/uk/1688/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill inline-flex items-center gap-2 px-5 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover"
              >
                Log in with WorldFirst
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Card 2: 1688 AI Sourcing Agent */}
        <div className="bg-wf-bg-light border border-wf-border rounded-2xl overflow-hidden flex flex-col">
          <div className="aspect-[4/3] border-b border-wf-border overflow-hidden">
            <img
              src={`${basePath}/images/ai-agent.webp`}
              alt="AI Sourcing Agent — search 1688 in English"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-wf-text font-semibold text-lg">1688 AI Sourcing Agent</h3>
            </div>
            <p className="text-wf-text-secondary text-sm leading-relaxed mb-4">
              Search 1688 in English. Our AI translates, scans factory listings,
              compares prices, and returns verified results.
            </p>
            <ul className="space-y-2 mb-5">
              {["Search 1688 in English with AI translation", "Factory verification built into results", "Compare quotes across suppliers"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
                  <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a href="https://www.worldfirst.com/uk/register/" target="_blank" rel="noopener noreferrer" className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover">
                Try the AI Sourcing Agent
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Card 3: 1688 World Pay */}
        <div className="bg-wf-bg-light border border-wf-border rounded-2xl overflow-hidden flex flex-col">
          <div className="aspect-[4/3] border-b border-wf-border overflow-hidden">
            <img
              src={`${basePath}/images/1688-world-pay.webp`}
              alt="1688 World Pay — pay suppliers in CNY"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-wf-text font-semibold text-lg">1688 World Pay</h3>
            </div>
            <p className="text-wf-text-secondary text-sm leading-relaxed mb-4">
              1688 only accepts CNY from Chinese bank accounts. 1688 World Pay lets
              you pay any 1688 supplier directly from your World Account.
            </p>
            <ul className="space-y-2 mb-5">
              {["Pay 1688 suppliers directly in CNY", "0.4% fee vs 3% credit card surcharge", "No Chinese bank account required"].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-wf-text-secondary">
                  <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <a href="https://www.worldfirst.com/uk/pay-1688/" target="_blank" rel="noopener noreferrer" className="btn-pill inline-flex items-center gap-2 px-6 py-3 border border-[#FF6A00] text-[#FF6A00] text-sm font-medium hover:bg-[#FF6A00] hover:text-white transition-colors">
                Learn about 1688 World Pay
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
