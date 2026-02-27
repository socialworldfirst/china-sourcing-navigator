import basePath from "@/lib/basePath";

export default function WhyWorldFirstSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <div className="flex items-center justify-center">
            <img
              src={`${basePath}/images/why-worldfirst.webp`}
              alt="Why WorldFirst — pay suppliers with confidence"
              className="rounded-2xl border border-wf-border w-full max-w-md"
              loading="lazy"
            />
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
  );
}
