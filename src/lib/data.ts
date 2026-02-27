import basePath from "./basePath";

export interface City {
  name: string;
  slug: string;
  topCategories: string[];
  description: string;
  isGuangdong: boolean;
  imageUrl: string;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  topCities: string[];
}

export const cities: City[] = [
  {
    name: "Guangzhou",
    slug: "guangzhou",
    topCategories: ["Electronics", "Apparel", "Beauty"],
    description: "Canton Fair host city and gateway to the Guangdong manufacturing belt.",
    isGuangdong: true,
    imageUrl: `${basePath}/images/guangzhou.webp`,
  },
  {
    name: "Shenzhen",
    slug: "shenzhen",
    topCategories: ["Electronics", "Hardware", "LED"],
    description: "China\u2019s tech manufacturing powerhouse.",
    isGuangdong: true,
    imageUrl: `${basePath}/images/shenzhen.webp`,
  },
  {
    name: "Dongguan",
    slug: "dongguan",
    topCategories: ["Electronics", "Toys", "Apparel"],
    description: "The world\u2019s factory floor.",
    isGuangdong: true,
    imageUrl: `${basePath}/images/dongguan.webp`,
  },
  {
    name: "Foshan",
    slug: "foshan",
    topCategories: ["Building", "Furniture", "Ceramics"],
    description: "Building materials capital of China.",
    isGuangdong: true,
    imageUrl: `${basePath}/images/foshan.webp`,
  },
  {
    name: "Yiwu",
    slug: "yiwu",
    topCategories: ["Commodities", "Packaging", "Toys"],
    description: "World\u2019s largest small commodities market.",
    isGuangdong: false,
    imageUrl: `${basePath}/images/yiwu.webp`,
  },
  {
    name: "Ningbo",
    slug: "ningbo",
    topCategories: ["Home", "Appliances", "Auto Parts"],
    description: "Major port city with diverse manufacturing.",
    isGuangdong: false,
    imageUrl: `${basePath}/images/ningbo.webp`,
  },
  {
    name: "Shanghai",
    slug: "shanghai",
    topCategories: ["Trade Hub", "Fashion", "Finance"],
    description: "China\u2019s international trade and logistics hub.",
    isGuangdong: false,
    imageUrl: `${basePath}/images/shanghai.webp`,
  },
];

export const categoriesInitial: Category[] = [
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

export const categoriesExpanded: Category[] = [
  { name: "Pet Supplies", slug: "pet-supplies", description: "", topCities: [] },
  { name: "Sports & Outdoors", slug: "sports-outdoors", description: "", topCities: [] },
  { name: "Bags & Luggage", slug: "bags-luggage", description: "", topCities: [] },
  { name: "Stationery & Office", slug: "stationery-office", description: "", topCities: [] },
  { name: "Garden & Landscaping", slug: "garden-landscaping", description: "", topCities: [] },
  { name: "Jewelry & Accessories", slug: "jewelry-accessories", description: "", topCities: [] },
  { name: "Tools & Hardware", slug: "tools-hardware", description: "", topCities: [] },
  { name: "Cleaning Supplies", slug: "cleaning-supplies", description: "", topCities: [] },
  { name: "Food & Beverage Equipment", slug: "food-equipment", description: "", topCities: [] },
  { name: "Safety & Security", slug: "safety-security", description: "", topCities: [] },
  { name: "Textiles & Fabrics", slug: "textiles-fabrics", description: "", topCities: [] },
  { name: "Machinery & Industrial", slug: "machinery-industrial", description: "", topCities: [] },
];
