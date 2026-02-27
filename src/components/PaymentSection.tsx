interface PaymentSectionProps {
  /** Text before "with Confidence". Default: "Pay Into China" */
  title?: string;
  /** Subtitle text. Default: "Verify your supplier, escrow your payment, and pay same-day into China" */
  subtitle?: string;
  /** Extra text appended to escrow paragraph. Home page uses the Trade Assurance line. */
  escrowSuffix?: string;
}

export default function PaymentSection({
  title = "Pay Into China",
  subtitle = "Verify your supplier, escrow your payment, and pay same-day into China",
  escrowSuffix = " — like Trade Assurance, but for off-platform payments.",
}: PaymentSectionProps) {
  return (
    <section id="payment" className="py-16 md:py-24 bg-wf-purple-glow relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-wf-red/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            {title} with <span className="text-wf-red">Confidence</span>
          </h2>
          <p className="text-white/60 text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
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

        {/* Escrow block */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-10">
                <div className="w-12 h-12 rounded-xl bg-wf-red/10 flex items-center justify-center mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Escrow Your Supplier Payments
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">
                  Before your money moves, we verify your supplier&apos;s business registration
                  against their bank account. WorldTrade holds your payment in escrow until
                  shipment is confirmed{escrowSuffix}
                </p>
                <ul className="space-y-2.5 mb-6">
                  {[
                    "Bank account cross-checked against business registration",
                    "Factory vs trading company status verified",
                    "Funds held in escrow until shipment confirmed",
                    "Free with every World Account",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/60">
                      <svg className="mt-0.5 flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://www.worldfirst.com/uk/worldtrade/" target="_blank" rel="noopener noreferrer" className="btn-pill inline-flex items-center gap-2 px-6 py-3 bg-wf-red text-white text-sm font-medium hover:bg-wf-red-hover">
                  Learn about WorldTrade
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </a>
              </div>

              <div className="bg-white/5 p-8 md:p-10 flex flex-col justify-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
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

        {/* How it works + YouTube */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="text-xl font-semibold text-white text-center mb-8">How It Works</h3>
          <div className="grid md:grid-cols-2 gap-8">
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
            <div className="relative rounded-2xl overflow-hidden bg-black min-h-[280px]">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/r6SSaaOXOUY" title="Pay Into China with WorldFirst" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" />
            </div>
          </div>
        </div>

        {/* 3 feature cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {[
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>, title: "Same-Day Payments", desc: "80% arrive same day via Chinese domestic banking rails.", stat: "80%", statLabel: "same-day arrival" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, title: "Save on Every Payment", desc: "Competitive mid-market rates. Lock rates with forwards.", stat: "2-4%", statLabel: "saved on bank FX margins" },
            { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FF0051" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>, title: "150k+ Supplier Network", desc: "Payments between WorldFirst accounts are instant and free.", stat: "150k+", statLabel: "verified suppliers in Asia" },
          ].map(({ icon, title, desc, stat, statLabel }) => (
            <div key={title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-7">
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                {icon}
                {title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-3">{desc}</p>
              <div className="text-2xl font-semibold text-wf-red">{stat}</div>
              <div className="text-xs text-white/40">{statLabel}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a href="https://www.worldfirst.com/uk/register/" target="_blank" rel="noopener noreferrer" className="btn-pill inline-flex items-center gap-2 px-8 py-3.5 bg-wf-red text-white font-medium text-sm hover:bg-wf-red-hover">
            Open your WorldFirst account
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <p className="text-white/40 text-sm mt-3">It&apos;s free</p>
        </div>
      </div>
    </section>
  );
}
