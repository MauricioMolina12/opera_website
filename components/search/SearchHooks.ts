"use client";

import { useCallback, useEffect, useRef, useState, type RefObject } from "react";

/* ──────────────────────────────────────────────────────────────
 *  useKeyboardNavigation
 *  Handle ↑ ↓ Enter from any parent that renders a list.
 * ────────────────────────────────────────────────────────────── */

export function useKeyboardNavigation(
  itemCount: number,
  onSelect: (index: number) => void,
) {
  const activeIndexRef = useRef(-1);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (itemCount === 0) {
        activeIndexRef.current = -1;
        return false;
      }

      let index = activeIndexRef.current;

      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          index = index < itemCount - 1 ? index + 1 : 0;
          activeIndexRef.current = index;
          return true;
        }
        case "ArrowUp": {
          e.preventDefault();
          index = index > 0 ? index - 1 : itemCount - 1;
          activeIndexRef.current = index;
          return true;
        }
        case "Enter": {
          e.preventDefault();
          if (index >= 0 && index < itemCount) {
            onSelect(index);
          }
          return true;
        }
        default:
          return false;
      }
    },
    [itemCount, onSelect],
  );

  // Reset index when results change.
  useEffect(() => {
    activeIndexRef.current = -1;
  }, [itemCount]);

  return { activeIndexRef, handleKey };
}

/* ──────────────────────────────────────────────────────────────
 *  useFocusTrap
 *  Keep focus cycling inside the modal while it's open.
 * ────────────────────────────────────────────────────────────── */

export function useFocusTrap(
  containerRef: RefObject<HTMLDivElement | null>,
  isActive: boolean,
) {
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const container = containerRef.current;
    if (!container) return;

    // Focus the first focusable element inside the modal.
    const focusable = container.querySelector<HTMLElement>(
      'input, button, [tabindex]:not([tabindex="-1"])',
    );
    focusable?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusableElements = container.querySelectorAll<HTMLElement>(
        'input, button, [tabindex]:not([tabindex="-1"])',
      );
      if (focusableElements.length === 0) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [containerRef, isActive]);
}

/* ──────────────────────────────────────────────────────────────
 *  useScrollLock
 *  Prevent background scroll while the modal is open.
 * ────────────────────────────────────────────────────────────── */

export function useScrollLock(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isActive]);
}

/* ──────────────────────────────────────────────────────────────
 *  useSearchHotkey
 *  Listen for Ctrl/Cmd+K and / to open the search.
 * ────────────────────────────────────────────────────────────── */

export function useSearchHotkey(onOpen: () => void) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Ignore when typing in inputs / textareas / contenteditable.
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      const isMod = e.metaKey || e.ctrlKey;
      if ((isMod && e.key === "k") || (!isMod && e.key === "/")) {
        e.preventDefault();
        onOpen();
      }
    };

    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onOpen]);
}

/* ──────────────────────────────────────────────────────────────
 *  useDebouncedValue
 *  Wait `ms` before updating the debounced value.
 * ────────────────────────────────────────────────────────────── */

export function useDebouncedValue<T>(value: T, ms = 150): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), ms);
    return () => clearTimeout(id);
  }, [value, ms]);

  return debounced;
}