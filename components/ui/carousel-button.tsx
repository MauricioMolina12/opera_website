"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface CarouselButtonProps {
  /** Picks the chevron and the accessible label. */
  direction: "prev" | "next";
  onClick: () => void;
  disabled?: boolean;
  /** "solid" = filled brand circle, "outline" = bordered (hover fills). */
  variant?: "solid" | "outline";
  className?: string;
}

const LABELS = { prev: "Anterior", next: "Siguiente" } as const;

/**
 * Round prev/next control shared by every carousel on the site. Keeps the two
 * arrow treatments (solid / outline) consistent in one place.
 */
export function CarouselButton({
  direction,
  onClick,
  disabled = false,
  variant = "solid",
  className,
}: CarouselButtonProps) {
  const Icon = direction === "prev" ? ChevronLeftIcon : ChevronRightIcon;
  const isSolid = variant === "solid";

  return (
    <button
      type="button"
      aria-label={LABELS[direction]}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "grid place-items-center rounded-full border transition-colors",
        isSolid ? "size-11" : "size-10",
        disabled
          ? "cursor-not-allowed border-ink-100 text-ink-300"
          : isSolid
            ? "cursor-pointer border-brand-600 bg-brand-600 text-white hover:bg-brand-700"
            : "cursor-pointer border-ink-200 text-ink-600 hover:border-brand-600 hover:bg-brand-600 hover:text-white",
        className,
      )}
    >
      <Icon className={isSolid ? "size-5" : "size-4"} />
    </button>
  );
}
