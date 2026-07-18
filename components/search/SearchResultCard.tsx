"use client";

import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import type { SearchResult } from "./SearchIndex";
import { SolutionIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface Props {
  result: SearchResult;
  active?: boolean;
  onNavigate?: () => void;
}

export function SearchResultCard({ result, active, onNavigate }: Props) {
  return (
    <Link
      href={`/solutions/${result.slug}`}
      onClick={onNavigate}
      className={cn(
        "group flex items-start gap-4 rounded-xl border p-4 transition-all duration-150",
        active
          ? "border-brand-200 bg-brand-50/60 shadow-sm"
          : "border-transparent bg-white hover:border-brand-100 hover:bg-brand-50/30 hover:shadow-sm",
      )}
      role="option"
      aria-selected={active}
    >
      {/* Icon */}
      <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
        <SolutionIcon name={result.icon} className="size-5" />
      </span>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-semibold text-ink-800 transition-colors group-hover:text-brand-700">
            {result.title}
          </h3>
          <span className="shrink-0 rounded-full bg-ink-100 px-2.5 py-0.5 text-[11px] font-medium text-ink-500">
            {result.category}
          </span>
        </div>
        <p className="mt-0.5 line-clamp-1 text-sm text-ink-500">
          {result.description}
        </p>
      </div>

      {/* Arrow */}
      <span className="mt-2 shrink-0 text-ink-300 transition-colors group-hover:text-brand-600">
        <ArrowUpRightIcon className="size-4" strokeWidth={2} />
      </span>
    </Link>
  );
}