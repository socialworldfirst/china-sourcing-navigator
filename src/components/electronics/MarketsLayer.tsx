import MarketCard from "@/components/MarketCard";

const markets = [
  { nameEn: "Huaqiangbei Electronics Market", nameCn: "华强北电子市场", address: "深圳市福田区华强北路华强电子世界", specialty: "World's largest electronics market. Components, modules, off-the-shelf products. Every component for a consumer device within walking distance.", gradient: "market-grad-electronics", bestFor: "Components, prototyping, small-batch sourcing" },
  { nameEn: "SEG Electronics Market", nameCn: "赛格电子市场", address: "深圳市福田区华强北路赛格广场", specialty: "10 floors of electronic components. ICs, LEDs, connectors, PCB materials. The go-to building for BOM fulfilment.", gradient: "market-grad-electronics", bestFor: "Specific component sourcing, BOM fulfilment" },
  { nameEn: "Baoan Factory District", nameCn: "宝安工业区", address: "深圳市宝安区新安街道工业园区", specialty: "Shenzhen's largest manufacturing zone. PCB assembly, smart hardware, consumer electronics factories at scale.", gradient: "market-grad-electronics", bestFor: "Custom electronics manufacturing, OEM/ODM" },
  { nameEn: "Chang'an Electronics Zone", nameCn: "长安电子产业区", address: "东莞市长安镇电子信息产业园", specialty: "Hardware accessories, connectors, precision metal parts. Many suppliers here serve Shenzhen assemblers upstream.", gradient: "market-grad-electronics", bestFor: "Hardware components, metal parts, connectors" },
  { nameEn: "Tangxia Manufacturing Zone", nameCn: "塘厦制造业区", address: "东莞市塘厦镇电子工业园", specialty: "Audio equipment, peripherals, power supplies. Lower rents than Shenzhen mean better pricing on high-volume orders.", gradient: "market-grad-electronics", bestFor: "Audio, peripherals, power accessories" },
  { nameEn: "Dashatou Electronics City", nameCn: "大沙头电器城", address: "广州市越秀区大沙头二马路大沙头电器城", specialty: "Consumer electronics accessories, phone cases, chargers, audio. Not in Shenzhen's league for core electronics.", gradient: "market-grad-electronics", bestFor: "Phone accessories, chargers, audio" },
];

export default function MarketsLayer({ limit }: { limit?: number }) {
  const displayMarkets = limit ? markets.slice(0, limit) : markets;

  return (
    <div>
      <p className="text-sm text-wf-text-secondary leading-relaxed mb-6 max-w-3xl">
        Unlike apparel or leather, electronics sourcing is less about traditional wholesale markets and more about
        concentrated factory districts and component markets. Here are the key locations across the Pearl River Delta.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayMarkets.map((m) => (
          <MarketCard key={m.nameEn} {...m} />
        ))}
      </div>
    </div>
  );
}
