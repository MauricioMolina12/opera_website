/**
 * Small, dependency-free utility helpers.
 */

type ClassValue = string | number | null | false | undefined;

/**
 * Conditionally join class names into a single string.
 *
 * Lightweight stand-in for `clsx` so we avoid an extra dependency. If the
 * project later needs Tailwind class de-duplication/merging, swap this for
 * `clsx` + `tailwind-merge`.
 *
 * @example cn("px-4", isActive && "bg-brand-600", undefined) // "px-4 bg-brand-600"
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
