"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Service } from "@/types/content";
import { SearchIndex, type SearchResult } from "./SearchIndex";

/* ──────────────────────────────────────────────────────────────
 *  Context value
 * ────────────────────────────────────────────────────────────── */

interface SearchContextValue {
  /** Current raw query string (updated on every keystroke). */
  query: string;
  setQuery: (q: string) => void;

  /** Debounced results (updated after a short pause). */
  results: SearchResult[];

  /** Whether the search is in its initial idle state (no query typed yet). */
  idle: boolean;

  /** Open/close the modal. */
  open: boolean;
  setOpen: (v: boolean) => void;

  /** Memo‑ised search function for use outside React (e.g. hotkeys). */
  search: (q: string) => SearchResult[];

  /** All services (exposed so the modal can display suggestions when idle). */
  services: Service[];
}

const SearchContext = createContext<SearchContextValue | null>(null);

/* ──────────────────────────────────────────────────────────────
 *  Provider
 * ────────────────────────────────────────────────────────────── */

const DEBOUNCE_MS = 120;

export function SearchProvider({
  services,
  children,
}: {
  services: Service[];
  children: React.ReactNode;
}) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);

  // Build the index once — this is the entire search corpus in memory.
  const indexRef = useRef<SearchIndex | null>(null);
  if (!indexRef.current) {
    indexRef.current = SearchIndex.fromServices(services);
  }

  const search = useCallback((q: string): SearchResult[] => {
    if (!indexRef.current) return [];
    return indexRef.current.search(q);
  }, []);

  const idle = query.trim().length === 0;

  // Debounced search.
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const id = setTimeout(() => {
      setResults(search(query));
    }, DEBOUNCE_MS);

    return () => clearTimeout(id);
  }, [query, search]);

  const value = useMemo<SearchContextValue>(
    () => ({
      query,
      setQuery,
      results,
      idle,
      open,
      setOpen,
      search,
      services,
    }),
    [query, results, idle, open, search, services],
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}

/* ──────────────────────────────────────────────────────────────
 *  Hook
 * ────────────────────────────────────────────────────────────── */

export function useSearch(): SearchContextValue {
  const ctx = useContext(SearchContext);
  if (!ctx) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return ctx;
}