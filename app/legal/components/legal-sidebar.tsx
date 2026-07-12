"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ChevronLeft } from "lucide-react";
import { useState } from "react";


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
  const [open, setOpen] = useState(false);


  const toggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 lg:hidden",
          open
            ? "opacity-100 pointer-events-auto"
            : "pointer-events-none opacity-0",
        ].join(" ")}
      />

      {/* Sidebar */}
      <aside
        className={[
          "fixed inset-y-0 left-0 z-50 w-80 max-w-[85vw] bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:sticky lg:top-28 lg:h-fit lg:w-auto lg:max-w-none lg:translate-x-0 lg:rounded-2xl lg:bg-[var(--color-brand-50)] lg:p-[14px] lg:shadow-none",
        ].join(" ")}
      >
        {/* Encabezado */}
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
            Información legal
          </p>

          <button
            onClick={() => setOpen(false)}
            className="rounded-lg p-2 hover:bg-neutral-100 lg:hidden"
            aria-label="Cerrar menú"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-2">
          {items.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
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
        <button
          onClick={() => toggle()}
          className={`inline-flex items-center gap-2 rounded-[10px] border border-neutral-200 bg-white text-gray-600 p-2 text-sm font-medium shadow-sm lg:hidden absolute ${open ? 'right-[-20px]' : 'right-[-35px]'}  top-1/2`}
        >
          {open ? <ChevronLeft></ChevronLeft> : <ChevronRight></ChevronRight>
          }
        </button>
      </aside>
    </>
  );
}
