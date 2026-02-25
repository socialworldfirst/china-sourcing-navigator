import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  topCities: string[];
}

export default function CategoryCard({
  name,
  slug,
}: CategoryCardProps) {
  return (
    <Link href={`/china-sourcing-navigator/categories/${slug}`}>
      <div className="group flex items-center justify-between bg-white border border-wf-border rounded-xl px-5 py-4 hover:border-wf-red/30 hover:shadow-sm transition-all duration-200 cursor-pointer">
        <span className="text-wf-text font-medium text-[15px] group-hover:text-wf-red transition-colors">
          {name}
        </span>
        <svg
          className="text-wf-text-muted group-hover:text-wf-red group-hover:translate-x-1 transition-all duration-200 flex-shrink-0"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
