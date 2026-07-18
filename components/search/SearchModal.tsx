"use client";

import { useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search as SearchIcon, X as XIcon } from "lucide-react";
import { useSearch } from "./SearchContext";
import { SearchResultCard } from "./SearchResultCard";
import { SearchEmptyState } from "./SearchEmptyState";
import { useKeyboardNavigation } from "./SearchHooks";

const SUGGESTIONS = [
  { label: "Aseo integral empresarial", slug: "aseo-integral" },
  { label: "Mantenimiento de piscinas", slug: "limpieza-mantenimiento-piscinas" },
  { label: "Limpieza de fachadas", slug: "limpieza-fachadas" },
  { label: "Jardinería", slug: "jardineria" },
  { label: "Servicio de recepción", slug: "recepcionista" },
];

export function SearchModal() {
  const { open, setOpen, query, setQuery, results, idle } = useSearch();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const onSelect = useCallback(
    (index: number) => {
      const item = results[index];
      if (item) {
        setOpen(false);
        setQuery("");
        router.push(`/solutions/${item.slug}`);
      }
    },
    [results, setOpen, setQuery, router],
  );

  const { activeIndexRef, handleKey } = useKeyboardNavigation(
    results.length,
    onSelect,
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      handleKey(e.nativeEvent);
    },
    [handleKey],
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, [setOpen, setQuery]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    },
    [close],
  );

  const handleContact = useCallback(() => {
    setOpen(false);
    setQuery("");
    router.push("/#contacto");
  }, [setOpen, setQuery, router]);

  if (!open) return null;

  const hasResults = results.length > 0;
  const showSuggestions = idle && !hasResults;

  return (
    // Un solo contenedor: backdrop + modal.
    // Clics en el backdrop (el div en sí) cierran el modal.
    // Clics dentro del panel modal se detienen con stopPropagation.
    <div
      className="fixed inset-0 z-[60] bg-black/10"
      onKeyDown={handleKeyDown}
      onClick={close}
    >
      <div
        ref={containerRef}
        className="mx-auto mt-[5.5rem] flex w-full max-w-[700px] flex-col px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex flex-col overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-xl"
          style={{
            maxHeight: "min(70vh, 32rem)",
          }}
        >
          {/* Input bar */}
          <div className="flex items-center gap-3 border-b border-ink-100 px-5 py-4">
            <SearchIcon className="size-5 shrink-0 text-ink-400" />
            <input
              type="text"
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="¿Qué servicio estás buscando?"
              className="flex-1 bg-transparent text-base text-ink-800 placeholder:text-ink-400 focus:outline-none"
              aria-label="Buscar servicios"
            />
            <kbd className="hidden rounded-md border border-ink-200 bg-ink-50 px-2 py-0.5 text-[11px] font-medium text-ink-400 sm:inline-block">
              ESC
            </kbd>
            <button
              type="button"
              onClick={close}
              className="grid size-7 place-items-center rounded-lg text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-600"
              aria-label="Cerrar buscador"
            >
              <XIcon className="size-4" />
            </button>
          </div>

          {/* Results / Suggestions */}
          <div className="flex-1 overflow-y-auto px-3 py-3">
            {showSuggestions && (
              <div>
                <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                  Servicios destacados
                </p>
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s.slug}
                    type="button"
                    onClick={() => {
                      close();
                      router.push(`/solutions/${s.slug}`);
                    }}
                    className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-ink-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    <span className="text-ink-300">
                      <SearchIcon className="size-3.5" />
                    </span>
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {hasResults && (
              <div role="listbox" aria-label="Resultados de búsqueda">
                {results.map((result, i) => (
                  <SearchResultCard
                    key={result.slug}
                    result={result}
                    active={activeIndexRef.current === i}
                    onNavigate={close}
                  />
                ))}
              </div>
            )}

            {!idle && !hasResults && (
              <SearchEmptyState
                query={query}
                onContact={handleContact}
              />
            )}

            <div className="mt-2 px-2 text-[11px] text-ink-400">
              <span className="hidden sm:inline">
                <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-medium">↑</kbd>{" "}
                <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-medium">↓</kbd>{" "}
                navegar ·{" "}
                <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-medium">↵</kbd>{" "}
                seleccionar ·{" "}
                <kbd className="rounded border border-ink-200 bg-ink-50 px-1.5 py-0.5 font-mono text-[10px] font-medium">ESC</kbd>{" "}
                cerrar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}