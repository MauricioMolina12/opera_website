"use client";

import { useCallback, useEffect, useRef } from "react";
import { Search as SearchIcon } from "lucide-react";
import { useSearch } from "./SearchContext";
import { useSearchHotkey } from "./SearchHooks";
import { cn } from "@/lib/utils";

/**
 * Renders differently on desktop vs mobile:
 *
 * **Desktop** — a visible search input (≈440px wide) with a placeholder.
 * **Mobile** — just a Search icon; tapping opens the fullscreen modal.
 */
export function SearchInput() {
  const { open, setOpen } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  // Open the search modal.
  const handleOpen = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  // Register hotkeys (Ctrl/Cmd+K, /).
  useSearchHotkey(handleOpen);

  // Close on ESC.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  return (
    <>
      {/* Desktop input */}
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          "hidden sm:flex",
          "h-10 w-[440px] items-center gap-3",
          "rounded-xl border border-ink-200 bg-ink-50/50 px-4",
          "text-sm text-ink-400 transition-all duration-200",
          "hover:border-brand-300 hover:bg-brand-50/30 hover:text-ink-500",
          "focus-visible:border-brand-400 focus-visible:outline-2 focus-visible:outline-brand-500",
          "cursor-pointer select-none",
        )}
        aria-label="Abrir buscador (Ctrl + K)"
      >
        <SearchIcon className="size-4 shrink-0" />
        <span className="flex-1 text-left">¿Qué servicio estás buscando?</span>
        <kbd className="hidden rounded-md border border-ink-200 bg-white px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink-400 md:inline-block">
          Ctrl+K
        </kbd>
      </button>

      {/* Mobile icon */}
      <button
        type="button"
        onClick={handleOpen}
        className={cn(
          "grid size-10 place-items-center rounded-full sm:hidden",
          "text-ink-600 transition-colors hover:bg-ink-100 hover:text-brand-700",
          "cursor-pointer",
        )}
        aria-label="Abrir buscador"
      >
        <SearchIcon className="size-5" />
      </button>
    </>
  );
}