const shows = [
  { month: "Mar", dates: "4-6", name: "Sino-Pack / PACKINNO", focus: "Packaging, printing, labelling" },
  { month: "Mar", dates: "10-12", name: "CIBE Beauty Expo", focus: "Cosmetics, skincare, salon equipment" },
  { month: "Mar", dates: "18-21", name: "CIFF Phase 1", focus: "Home furniture, outdoor, decor" },
  { month: "Mar", dates: "28-31", name: "CIFF Phase 2", focus: "Office furniture, commercial" },
  { month: "Apr", dates: "15-19", name: "Canton Fair Phase 1", focus: "Electronics, hardware, tools, lighting", highlight: true },
  { month: "Apr", dates: "23-27", name: "Canton Fair Phase 2", focus: "Home, gifts, ceramics, building materials", highlight: true },
  { month: "May", dates: "1-5", name: "Canton Fair Phase 3", focus: "Textiles, apparel, shoes, bags", highlight: true },
  { month: "Jun", dates: "9-12", name: "GILE Lighting Exhibition", focus: "All lighting — 3,200+ exhibitors" },
  { month: "Sep", dates: "4-6", name: "CIBE Autumn Beauty", focus: "Cosmetics, beauty (autumn)" },
  { month: "Oct", dates: "15-19", name: "Canton Fair Phase 1 (Aut)", focus: "Electronics, hardware, tools", highlight: true },
  { month: "Oct", dates: "23-27", name: "Canton Fair Phase 2 (Aut)", focus: "Home, gifts, ceramics", highlight: true },
  { month: "Nov", dates: "31 Oct-4", name: "Canton Fair Phase 3 (Aut)", focus: "Textiles, apparel", highlight: true },
];

export default function TradeShowCalendar() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-wf-text mb-2">2026 Trade Show Calendar</h4>
      <p className="text-sm text-wf-text-muted mb-6">All shows at or near Canton Fair Complex, Pazhou · Metro Line 8</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {shows.map((show) => (
          <div
            key={show.name}
            className={`flex items-start gap-3 p-4 rounded-xl border ${
              show.highlight
                ? "bg-wf-red/5 border-wf-red/20"
                : "bg-white border-wf-border"
            }`}
          >
            {/* Date badge */}
            <div className={`flex-shrink-0 w-12 text-center py-2 rounded-lg ${
              show.highlight ? "bg-wf-red text-white" : "bg-wf-bg-light text-wf-text"
            }`}>
              <div className="text-[10px] uppercase font-medium leading-none mb-0.5">{show.month}</div>
              <div className="text-sm font-bold leading-none">{show.dates}</div>
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
              <h5 className="text-sm font-medium text-wf-text leading-tight">{show.name}</h5>
              <p className="text-xs text-wf-text-muted mt-1">{show.focus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
