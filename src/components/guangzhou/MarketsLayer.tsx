import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Shisanhang (十三行)", nameCn: "十三行", address: "广州市荔湾区十三行路1号新中国大厦", specialty: "Mid-range fashion. 6,000+ vendors across multiple buildings. China's oldest garment wholesale district.", gradient: "market-grad-apparel", bestFor: "Mid-range women's fashion, fast-turnaround orders" },
  { nameEn: "Baima Garment Market", nameCn: "白马服装市场", address: "广州市越秀区站南路16号白马大厦", specialty: "Premium, brand-focused fashion. Higher price tier. Many vendors accept low MOQs.", gradient: "market-grad-apparel", bestFor: "Higher-end fashion, brand buyers" },
  { nameEn: "Shahe Clothing Market", nameCn: "沙河服装批发市场", address: "广州市天河区沙河大街濂泉路", specialty: "Budget-to-mid fashion. Enormous volume. Primary supplier to Chinese e-commerce sellers.", gradient: "market-grad-apparel", bestFor: "Budget fashion, high volume, e-commerce" },
  { nameEn: "Zhongda Fabric Market", nameCn: "中大布料市场", address: "广州市海珠区瑞康路中大纺织商圈", specialty: "Asia's largest fabric market. 20,000+ shops across 50+ buildings. Every fabric type imaginable.", gradient: "market-grad-textiles", bestFor: "Fabric sourcing, trims, accessories" },
  { nameEn: "Shiling Leather City", nameCn: "狮岭皮革城", address: "广州市花都区狮岭镇阳光路皮革皮具城", specialty: "China's Capital of Leather. Factory + showroom in one town. Handbags, wallets, luggage, belts.", gradient: "market-grad-leather", bestFor: "Leather goods, bags, wallets, luggage" },
  { nameEn: "Sanyuanli Leather Market", nameCn: "三元里皮具城", address: "广州市白云区三元里大道梓元岗皮具城", specialty: "Urban leather wholesale. More convenient than Shiling. Good for samples and comparisons.", gradient: "market-grad-leather", bestFor: "Quick leather goods comparison, samples" },
  { nameEn: "Meibo Cheng (Beauty City)", nameCn: "美博城", address: "广州市白云区三元里大道美博城", specialty: "OEM cosmetics, skincare, beauty tools, packaging. Co-located manufacturers and suppliers.", gradient: "market-grad-beauty", bestFor: "Cosmetics OEM/ODM, beauty tools" },
  { nameEn: "Yide Road Toy District", nameCn: "一德路", address: "广州市越秀区一德路玩具精品城", specialty: "Plush toys, educational, seasonal, promotional goods. Adjacent to dried goods market.", gradient: "market-grad-toys", bestFor: "Toys, seasonal goods, party supplies" },
  { nameEn: "Liwan Plaza", nameCn: "荔湾广场", address: "广州市荔湾区下九路荔湾广场", specialty: "Jade, crystals, semi-precious stones. Southeast Asia's largest crystal wholesale market.", gradient: "market-grad-jewelry", bestFor: "Jade, crystals, precious stones" },
  { nameEn: "Xijiao Building", nameCn: "西郊大厦", address: "广州市荔湾区站前路西郊大厦", specialty: "Fashion jewelry, hair accessories, costume jewelry. High variety, low MOQ.", gradient: "market-grad-jewelry", bestFor: "Fashion jewelry, accessories" },
  { nameEn: "Dashatou Electronics", nameCn: "大沙头电器城", address: "广州市越秀区大沙头二马路大沙头电器城", specialty: "Consumer electronics accessories, phone cases, chargers, audio.", gradient: "market-grad-electronics", bestFor: "Phone accessories, chargers, audio" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayMarkets.map((m) => (
        <MarketCard key={m.nameEn} {...m} />
      ))}
    </div>
  );
}
