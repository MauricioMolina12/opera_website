"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import type { SiteConfig } from "@/types/content";

interface HeaderProps {
  /** Navigation + CTA come from the content provider (passed by the layout). */
  nav: SiteConfig["nav"];
  cta: SiteConfig["headerCta"];
}

/**
 * Fixed site header: logo pinned to the left, navigation links and the CTA
 * grouped on the right. Solid white bar that gains a subtle shadow on scroll.
 * A spacer below keeps page content clear of the fixed bar.
 */
export function Header({ nav, cta }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /**
   * Whether a nav item points to the current route. In-page anchors (e.g.
   * "/#experiencia") aren't standalone routes, so they're never highlighted.
   */
  const isActive = (href: string) => {
    if (href.startsWith("#") || href.startsWith("/#")) return false;
    const path = href.split(/[?#]/)[0] || "/";
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300",
          scrolled ? "border-ink-100 shadow-sm" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between container-gutter">
          {/* Left: logo */}
          <Logo />

          {/* Right: navigation + CTA */}
          <div className="flex items-center gap-8">
            <nav
              aria-label="Principal"
              className="hidden items-center gap-8 lg:flex"
            >
              {nav.map((item) => (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "text-sm font-medium text-ink-600 transition-colors hover:text-brand-700",
                    isActive(item.href) &&
                      "active text-brand-700 underline decoration-2 underline-offset-8",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button
              href={cta.href}
              size="sm"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              {cta.label}
            </Button>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-10 cursor-pointer place-items-center rounded-full text-ink-700 transition-colors hover:bg-ink-100 lg:hidden"
            >
              {menuOpen ? (
                <CloseIcon className="size-6" />
              ) : (
                <MenuIcon className="size-6" />
              )}
            </button>
          </div>
        </div>

      </header>

      {/* Mobile menu panel — full screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col bg-white lg:hidden">
          <nav
            aria-label="Principal (móvil)"
            className="flex flex-1 flex-col items-center justify-center gap-6"
          >
            {nav.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-2xl font-semibold text-ink-800 transition-colors hover:text-brand-700",
                  isActive(item.href) && "active text-brand-700",
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="mt-4"
            >
              {cta.label}
            </Button>
          </nav>
        </div>
      )}

      {/* Spacer keeps content clear of the fixed header. */}
      <div aria-hidden className="h-20" />
    </>
  );
}
