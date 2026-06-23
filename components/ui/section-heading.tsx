import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  /** Small uppercase label above the title. */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Text alignment. */
  align?: "left" | "center";
  /** Optional element rendered on the right (e.g. a "Ver todos" link). */
  action?: ReactNode;
  /** Use light text on dark/brand surfaces. */
  tone?: "dark" | "light";
  className?: string;
}

/**
 * Standard heading block used at the top of sections. Keeps title sizing,
 * spacing and eyebrow styling consistent across the site.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const isLight = tone === "light";

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        action ? "sm:flex-row sm:items-end sm:justify-between" : "",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", align === "center" && "mx-auto")}>
        {eyebrow && (
          <p
            className={cn(
              "mb-3 text-sm font-semibold uppercase tracking-wider",
              isLight ? "text-brand-200" : "text-brand-600",
            )}
          >
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
            isLight ? "text-white" : "text-ink-900",
          )}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed text-pretty",
              isLight ? "text-brand-100" : "text-ink-500",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
