import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  /** Render as a different element (e.g. "section", "header"). Defaults to "div". */
  as?: ElementType;
  /** Max-width preset. "default" ≈ 1200px content width. */
  size?: "default" | "wide" | "narrow";
  /** Anchor id (useful when rendered as a section). */
  id?: string;
  /** Accessible label, forwarded to the rendered element. */
  "aria-label"?: string;
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-[90rem]",
};

/**
 * Centers content and applies the site's horizontal gutters. Use everywhere a
 * block of content should align to the global grid.
 */
export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
  id,
  "aria-label": ariaLabel,
}: ContainerProps) {
  return (
    <Component
      id={id}
      aria-label={ariaLabel}
      className={cn("mx-auto w-full container-gutter", sizeClasses[size], className)}
    >
      {children}
    </Component>
  );
}
