/**
 * Main contact modal.
 *
 * Renders at the layout level via the ContactProvider. The single modal
 * instance guarantees a consistent z-index regardless of which component
 * opens it (floating button, banner, etc.).
 *
 * The PQRSF view uses a flex layout so the form body scrolls internally
 * while the submit button stays pinned at the bottom (never overflows).
 */

"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { ContactOptions } from "@/components/contact/ContactOptions";
import { PqrsfForm } from "@/components/contact/PqrsfForm";
import { CloseIcon } from "@/components/ui/icons";
import { useContactContext } from "@/context/contact-context";
import { usePqrsfForm } from "@/hooks/usePqrsfForm";

export function ContactModal() {
  const { isOpen, initialView, close } = useContactContext();
  const [view, setView] = useState<"options" | "pqrsf-form">(initialView);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const pqrsf = usePqrsfForm();

  useEffect(() => {
    if (isOpen) {
      setView(initialView);
      pqrsf.reset();
      setIsAnimatingOut(false);
    }
  }, [isOpen, initialView]);

  const handleClose = useCallback(() => {
    setIsAnimatingOut(true);
    setTimeout(() => {
      setIsAnimatingOut(false);
      close();
    }, 250);
  }, [close]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      requestAnimationFrame(() => panelRef.current?.focus());
    }
  }, [isOpen, view]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) handleClose();
    },
    [handleClose],
  );

  if (!isOpen && !isAnimatingOut) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label="Contacto Opera"
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 transition-colors duration-250 ${
        isAnimatingOut
          ? "bg-black/0"
          : "bg-black/40 backdrop-blur-sm"
      }`}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        className={`relative flex max-h-[85vh] w-full max-w-xl flex-col rounded-2xl bg-white shadow-2xl transition-all duration-250 focus-visible:outline-none ${
          isAnimatingOut
            ? "scale-95 opacity-0"
            : "scale-100 opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Cerrar"
          className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-800 focus-visible:outline-2 focus-visible:outline-brand-600"
        >
          <CloseIcon className="size-5" />
        </button>

        <div className="flex-shrink-0 px-6 pt-6 pb-2">
          {view === "options" && (
            <ContactOptions onSelectPqrsf={() => setView("pqrsf-form")} />
          )}

          {view === "pqrsf-form" && (
            <>
              <button
                type="button"
                onClick={() => setView("options")}
                className="flex items-center gap-1.5 text-sm text-ink-600 transition-colors hover:text-ink-900 focus-visible:outline-2 focus-visible:outline-brand-600"
              >
                <svg
                  className="size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
                Volver
              </button>

              <h3 className="mt-3 text-lg font-semibold text-ink-900">
                Crear PQRSF
              </h3>
            </>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-6 pb-6">
          {view === "pqrsf-form" && (
            <PqrsfForm
              formData={pqrsf.formData}
              errors={pqrsf.errors}
              isSubmitting={pqrsf.isSubmitting}
              isSuccess={pqrsf.isSuccess}
              submitError={pqrsf.submitError}
              onFieldChange={pqrsf.updateField}
              onSubmit={pqrsf.handleSubmit}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}