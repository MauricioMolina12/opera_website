/**
 * Contact Modal context.
 *
 * Provides a global state for the single ContactModal instance, allowing
 * any component (floating button, banner, etc.) to open it without nesting
 * modals inside different stacking contexts.
 */

"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

type View = "options" | "pqrsf-form";

interface ContactContextValue {
  isOpen: boolean;
  initialView: View;
  open: (view?: View) => void;
  close: () => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [initialView, setInitialView] = useState<View>("options");

  const open = useCallback((view: View = "options") => {
    setInitialView(view);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ isOpen, initialView, open, close }),
    [isOpen, initialView, open, close],
  );

  return (
    <ContactContext.Provider value={value}>{children}</ContactContext.Provider>
  );
}

export function useContactContext(): ContactContextValue {
  const ctx = useContext(ContactContext);
  if (!ctx) {
    throw new Error("useContactContext must be used within a ContactProvider");
  }
  return ctx;
}