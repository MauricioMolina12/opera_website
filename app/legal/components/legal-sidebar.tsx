"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    href: "/legal/privacy-policy",
    label: "Política de Privacidad",
  },
  {
    href: "/legal/cookies-policy",
    label: "Política de Cookies",
  },
  {
    href: "/legal/terms-and-conditions",
    label: "Términos de Servicio",
  },
];

export function LegalSidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:sticky lg:top-28 lg:h-fit bg-[var(--color-brand-50)] p-[14px] rounded-2xl">
      <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
        Información legal
      </p>

      <nav className="mt-6 space-y-2">
        {items.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-xl px-4 py-3 text-sm font-medium transition-all",
                active
                  ? "bg-brand-50 text-brand-700"
                  : "text-ink-600 hover:bg-neutral-100 hover:text-ink-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}