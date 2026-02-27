import type { Metadata } from "next";
import ElectronicsPage from "@/components/electronics/ElectronicsPage";

export const metadata: Metadata = {
  title:
    "Electronics Sourcing Guide — Factories, Markets & Suppliers | China Sourcing Navigator",
  description:
    "Complete guide to sourcing electronics from China. Shenzhen, Dongguan & Guangzhou factory districts, 1688 supplier discovery, trade shows, and payment solutions. By WorldFirst.",
  keywords: [
    "electronics sourcing China",
    "Shenzhen electronics",
    "Huaqiangbei market",
    "Dongguan electronics factory",
    "China electronics supplier",
    "1688 electronics",
    "PCB sourcing",
    "consumer electronics import",
    "WorldFirst",
  ],
};

export default function Page() {
  return <ElectronicsPage />;
}
