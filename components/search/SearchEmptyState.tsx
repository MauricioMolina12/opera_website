"use client";

import { MessageCircle } from "lucide-react";

interface Props {
  query: string;
  onContact?: () => void;
}

export function SearchEmptyState({ query, onContact }: Props) {
  return (
    <div className="flex flex-col items-center px-6 py-16 text-center">
      {/* Icon */}
      <div className="grid size-14 place-items-center rounded-full bg-brand-50 text-brand-600">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
      </div>

      <h3 className="mt-4 text-base font-semibold text-ink-800">
        No encontramos un servicio con ese nombre.
      </h3>

      <p className="mt-2 max-w-sm text-sm text-ink-500">
        ¿Quieres que uno de nuestros asesores te ayude a encontrar lo que
        necesitas?
      </p>

      <button
        type="button"
        onClick={onContact}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
      >
        <MessageCircle className="size-4" />
        Contactar asesor
      </button>
    </div>
  );
}