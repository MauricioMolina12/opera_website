/**
 * Floating contact button.
 *
 * Replaces the WhatsApp floating button. Opens the ContactModal with the
 * options view ("Hablar con Opera" / "Crear una PQRSF").
 */

"use client";

import { MailIcon } from "@/components/ui/icons";

interface ContactBtnProps {
  onClick: () => void;
}

export function ContactBtn({ onClick }: ContactBtnProps) {
  return (
    <button
      type="button"
      aria-label="Contactar"
      title="Contactar"
      onClick={onClick}
      className="fixed bottom-14 right-8 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full bg-brand-600 p-3 text-white shadow-lg transition-all hover:scale-110 hover:shadow-2xl"
    >
      <MailIcon className="size-6" />
    </button>
  );
}