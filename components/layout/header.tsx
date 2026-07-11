"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  ChevronDownIcon,
  CloseIcon,
  MenuIcon,
  SolutionIcon,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import type { Service, SiteConfig } from "@/types/content";

interface HeaderProps {
  /** Navigation + CTA come from the content provider (passed by the layout). */
  nav: SiteConfig["nav"];
  cta: SiteConfig["headerCta"];
  /** Services powering the "Soluciones" mega-menu, grouped by sector. */
  solutions: Service[];
}

/** The nav item that opens the solutions mega-menu. */
const SOLUTIONS_HREF = "/solutions";

/** Preferred left-to-right order for the sector columns. */
const SECTOR_ORDER = ["Corporativo", "Residencial", "Salud", "Industrial"];

/** Group services by the sectors they serve, in `SECTOR_ORDER`. */
function groupBySector(services: Service[]) {
  const map = new Map<string, Service[]>();
  for (const service of services) {
    for (const sector of service.sectors ?? []) {
      const list = map.get(sector) ?? [];
      list.push(service);
      map.set(sector, list);
    }
  }
  return [...map.entries()].sort(
    ([a], [b]) => SECTOR_ORDER.indexOf(a) - SECTOR_ORDER.indexOf(b),
  );
}

/**
 * Fixed site header: logo pinned to the left, navigation links and the CTA
 * grouped on the right. The "Soluciones" item stays a normal link but also
 * reveals a mega-menu of services grouped by sector on hover/focus.
 */
export function Header({ nav, cta, solutions }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  // Small hover-intent delay so moving between the trigger and the panel
  // (across the header bar) doesn't flicker the menu closed.
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sectorGroups = useMemo(() => groupBySector(solutions), [solutions]);

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

  // Close both menus whenever the route changes.
  useEffect(() => {
    setSolutionsOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  const openSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setSolutionsOpen(true);
  };
  const scheduleCloseSolutions = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setSolutionsOpen(false), 120);
  };

  const hasMegaMenu = (href: string) =>
    href === SOLUTIONS_HREF && sectorGroups.length > 0;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-white/90 backdrop-blur-md transition-shadow duration-300",
          scrolled || solutionsOpen
            ? "border-ink-100 shadow-sm"
            : "border-transparent",
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
              {nav.map((item) =>
                hasMegaMenu(item.href) ? (
                  <div
                    key={item.href + item.label}
                    className="relative"
                    onMouseEnter={openSolutions}
                    onMouseLeave={scheduleCloseSolutions}
                  >
                    <Link
                      href={item.href}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      aria-expanded={solutionsOpen}
                      onFocus={openSolutions}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium text-ink-600 transition-colors hover:text-brand-700",
                        (isActive(item.href) || solutionsOpen) &&
                          "text-brand-700",
                      )}
                    >
                      {item.label}
                      <ChevronDownIcon
                        aria-hidden
                        className={cn(
                          "size-4 transition-transform duration-200",
                          solutionsOpen && "rotate-180",
                        )}
                      />
                    </Link>
                  </div>
                ) : (
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
                ),
              )}
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

        {/* Solutions mega-menu (desktop) */}
        <div
          onMouseEnter={openSolutions}
          onMouseLeave={scheduleCloseSolutions}
          className={cn(
            "absolute inset-x-0 top-full hidden origin-top border-b border-ink-100 bg-white shadow-lg backdrop-blur-md transition-[opacity,transform] duration-200 ease-out lg:block",
            solutionsOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <div className="mx-auto max-w-[90rem] container-gutter py-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-400">
                Soluciones por sector
              </p>
              <Link
                href={SOLUTIONS_HREF}
                className="text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Ver todas las soluciones
              </Link>
            </div>

            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {sectorGroups.map(([sector, services]) => (
                <div key={sector}>
                  <p className="mb-3 text-sm font-semibold text-ink-900">
                    {sector}
                  </p>
                  <ul className="space-y-1">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`${SOLUTIONS_HREF}/${service.slug}`}
                          className="group/link flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-brand-50"
                        >
                          <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 transition-colors group-hover/link:bg-brand-600 group-hover/link:text-white">
                            <SolutionIcon
                              name={service.icon}
                              className="size-5"
                            />
                          </span>
                          <span className="text-sm font-medium text-ink-600 transition-colors group-hover/link:text-brand-700">
                            {service.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu panel — full screen overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-20 z-40 flex flex-col overflow-y-auto bg-white lg:hidden">
          <nav
            aria-label="Principal (móvil)"
            className="flex flex-1 flex-col items-center justify-center gap-6 py-10"
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

            {/* Quick access to individual solutions on mobile */}
            {solutions.length > 0 && (
              <div className="mt-2 flex flex-wrap justify-center gap-2 px-6">
                {solutions.map((service) => (
                  <Link
                    key={service.slug}
                    href={`${SOLUTIONS_HREF}/${service.slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 text-sm text-ink-600 hover:border-brand-600 hover:text-brand-700"
                  >
                    <SolutionIcon name={service.icon} className="size-4" />
                    {service.title}
                  </Link>
                ))}
              </div>
            )}

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
