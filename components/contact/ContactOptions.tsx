/**
 * Contact options panel.
 *
 * Shows two choices: "Hablar con Opera" (opens mailto) and
 * "Crear una PQRSF" (opens the PQRSF form).
 */

"use client";

import { MailIcon } from "@/components/ui/icons";

interface ContactOptionsProps {
  onSelectPqrsf: () => void;
}

const EMAIL = "multiserviciosoperasas@gmail.com";

export function ContactOptions({ onSelectPqrsf }: ContactOptionsProps) {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-xl font-semibold text-ink-900">
          Contáctanos
        </h3>
        <p className="mt-1 text-sm text-ink-600">
          Elige cómo deseas comunicarte con nosotros
        </p>
      </div>

      {/* Opción 1 — Hablar con Opera (mailto) */}
      <a
        href={`mailto:${EMAIL}`}
        className="group flex items-center gap-4 rounded-xl border border-ink-200 bg-white p-4 transition-all hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-600"
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600 transition-colors group-hover:bg-brand-200">
          <MailIcon className="size-6" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-ink-900">Hablar con Opera</p>
          <p className="text-sm text-ink-600">
            Envíanos un correo electrónico directo
          </p>
        </div>
      </a>

      {/* Opción 2 — Crear una PQRSF */}
      <button
        type="button"
        onClick={onSelectPqrsf}
        className="group flex w-full items-center gap-4 rounded-xl border border-ink-200 bg-white p-4 text-left transition-all hover:border-brand-200 hover:bg-brand-50 focus-visible:outline-2 focus-visible:outline-brand-600"
      >
        <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-600 transition-colors group-hover:bg-brand-100 group-hover:text-brand-600">
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            />
          </svg>
        </div>
        <div className="text-left">
          <p className="font-semibold text-ink-900">Crear una PQRSF</p>
          <p className="text-sm text-ink-600">
            Petición, queja, reclamo, sugerencia o felicitación
          </p>
        </div>
      </button>
    </div>
  );
}