import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "white";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-600 text-white hover:bg-brand-700 shadow-sm",
  secondary: "bg-ink-900 text-white hover:bg-ink-800",
  outline:
    "border border-ink-200 bg-white text-ink-800 hover:border-brand-600 hover:text-brand-700",
  ghost: "text-brand-700 hover:bg-brand-50",
  white: "bg-white text-brand-700 hover:bg-brand-50 shadow-sm",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2",
};

const baseClasses =
  "inline-flex cursor-pointer items-center justify-center rounded-full font-medium " +
  "transition-colors duration-200 disabled:opacity-60 disabled:pointer-events-none " +
  "whitespace-nowrap select-none";

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  /** Open in a new tab (adds rel="noopener"). */
  external?: boolean;
  /** Optional click handler (e.g. to close a menu before navigating). */
  onClick?: () => void;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

function classesFor(variant: Variant, size: Size, className?: string) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

/**
 * Polymorphic action element.
 *
 * - Pass `href` → renders a Next.js `<Link>` (or external `<a>`).
 * - Omit `href` → renders a native `<button>` (supports `onClick`, `type`, …).
 *
 * Safe to use in both Server and Client Components: it holds no state.
 */
export function Button(props: ButtonAsLink | ButtonAsButton) {
  if ("href" in props) {
    const {
      children,
      href,
      external,
      onClick,
      variant = "primary",
      size = "md",
      className,
    } = props;
    const classes = classesFor(variant, size, className);

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} onClick={onClick} className={classes}>
        {children}
      </Link>
    );
  }

  // Native <button>: `...rest` carries only valid button attributes
  // (onClick, type, disabled, …) since the custom props are destructured out.
  const { children, variant = "primary", size = "md", className, ...rest } = props;
  return (
    <button className={classesFor(variant, size, className)} {...rest}>
      {children}
    </button>
  );
}
