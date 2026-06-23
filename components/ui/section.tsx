import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  /** Anchor id for in-page navigation (e.g. "soluciones"). */
  id?: string;
  className?: string;
  /** Vertical padding scale. */
  spacing?: "none" | "sm" | "md" | "lg";
  /** Background treatment. */
  surface?: "white" | "muted" | "brand" | "ink";
  /** Optional accessible label for the landmark. */
  "aria-label"?: string;
}

const spacingClasses: Record<NonNullable<SectionProps["spacing"]>, string> = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20",
  lg: "py-20 sm:py-28",
};

const surfaceClasses: Record<NonNullable<SectionProps["surface"]>, string> = {
  white: "bg-white text-ink-800",
  muted: "bg-ink-50 text-ink-800",
  brand: "bg-brand-600 text-white",
  ink: "bg-ink-900 text-white",
};

/**
 * A full-width page section with consistent vertical rhythm and surface color.
 * Content inside should still be wrapped in a `<Container>`.
 */
export function Section({
  children,
  id,
  className,
  spacing = "lg",
  surface = "white",
  "aria-label": ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        "scroll-mt-24",
        spacingClasses[spacing],
        surfaceClasses[surface],
        className,
      )}
    >
      {children}
    </section>
  );
}
