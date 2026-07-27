/**
 * PQRSF Form component.
 *
 * Renders the form fields and submit button. Designed to be placed inside
 * a flex container with a defined height (e.g. `flex-1 min-h-0`).
 *
 * Layout inside this component:
 *   <form flex-col>
 *     ├── flex-1 overflow-y-auto  ← fields scroll here
 *     └── flex-shrink-0            ← button + errors always visible
 */

"use client";

import {
  ArrowRightIcon,
  CheckIcon,
  CloseIcon,
} from "@/components/ui/icons";
import type { PqrsfFormData, PqrsfFormErrors, PqrsfType } from "@/types/contact";

const PQRSF_TYPES: PqrsfType[] = [
  "Petición",
  "Queja",
  "Reclamo",
  "Sugerencia",
  "Felicitación",
];

interface PqrsfFormProps {
  formData: PqrsfFormData;
  errors: PqrsfFormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  submitError: string | null;
  onFieldChange: (field: keyof PqrsfFormData, value: string) => void;
  onSubmit: () => void;
  onClose?: () => void;
}

export function PqrsfForm({
  formData,
  errors,
  isSubmitting,
  isSuccess,
  submitError,
  onFieldChange,
  onSubmit,
  onClose,
}: PqrsfFormProps) {
  /* — Success screen */
  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-green-100">
          <CheckIcon className="size-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-ink-900">
          ¡Solicitud enviada con éxito!
        </h3>
        <p className="mt-2 max-w-sm text-ink-600">
          Hemos recibido tu {formData.tipo.toLowerCase()}. Te responderemos a la
          mayor brevedad posible.
        </p>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="mt-6 rounded-lg bg-brand-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600"
          >
            Cerrar
          </button>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      noValidate
      className="flex min-h-0 flex-1 flex-col"
    >
      {/* Scrollable field area */}
      <div className="min-h-0 flex-1 space-y-5 overflow-y-auto px-2">
        {/* Tipo de solicitud */}
        <div>
          <label
            htmlFor="pqrsf-tipo"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Tipo de solicitud <span className="text-red-500">*</span>
          </label>
          <select
            id="pqrsf-tipo"
            value={formData.tipo}
            onChange={(e) => onFieldChange("tipo", e.target.value)}
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 ${
              errors.tipo ? "border-red-400" : "border-ink-200"
            }`}
          >
            <option value="">Selecciona una opción</option>
            {PQRSF_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.tipo && (
            <p className="mt-1 text-xs text-red-500">{errors.tipo}</p>
          )}
        </div>

        {/* Nombre */}
        <div>
          <label
            htmlFor="pqrsf-nombre"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            id="pqrsf-nombre"
            type="text"
            value={formData.nombre}
            onChange={(e) => onFieldChange("nombre", e.target.value)}
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 ${
              errors.nombre ? "border-red-400" : "border-ink-200"
            }`}
            placeholder="Tu nombre"
          />
          {errors.nombre && (
            <p className="mt-1 text-xs text-red-500">{errors.nombre}</p>
          )}
        </div>

        {/* Correo */}
        <div>
          <label
            htmlFor="pqrsf-correo"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            id="pqrsf-correo"
            type="email"
            value={formData.correo}
            onChange={(e) => onFieldChange("correo", e.target.value)}
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 ${
              errors.correo ? "border-red-400" : "border-ink-200"
            }`}
            placeholder="correo@ejemplo.com"
          />
          {errors.correo && (
            <p className="mt-1 text-xs text-red-500">{errors.correo}</p>
          )}
        </div>

        {/* Asunto */}
        <div>
          <label
            htmlFor="pqrsf-asunto"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Asunto <span className="text-red-500">*</span>
          </label>
          <input
            id="pqrsf-asunto"
            type="text"
            value={formData.asunto}
            onChange={(e) => onFieldChange("asunto", e.target.value)}
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 ${
              errors.asunto ? "border-red-400" : "border-ink-200"
            }`}
            placeholder="Asunto de tu solicitud"
          />
          {errors.asunto && (
            <p className="mt-1 text-xs text-red-500">{errors.asunto}</p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="pqrsf-descripcion"
            className="mb-1.5 block text-sm font-medium text-ink-800"
          >
            Descripción <span className="text-red-500">*</span>
          </label>
          <textarea
            id="pqrsf-descripcion"
            rows={4}
            value={formData.descripcion}
            onChange={(e) => onFieldChange("descripcion", e.target.value)}
            className={`w-full rounded-lg border bg-white px-3 py-2.5 text-sm text-ink-800 transition-colors focus-visible:outline-2 focus-visible:outline-brand-600 resize-y ${
              errors.descripcion ? "border-red-400" : "border-ink-200"
            }`}
            placeholder="Describe tu solicitud en detalle..."
          />
          {errors.descripcion && (
            <p className="mt-1 text-xs text-red-500">{errors.descripcion}</p>
          )}
        </div>
      </div>

      {/* Footer — submit error + button always visible */}
      <div className="flex-shrink-0 border-t border-ink-100 pt-4 mt-4">
        {submitError && (
          <div className="mb-3 flex items-start gap-2 rounded-lg bg-red-50 p-3 text-sm text-red-700">
            <CloseIcon className="mt-0.5 size-4 shrink-0 text-red-400" />
            <span>{submitError}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <svg
                className="size-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              Enviando...
            </>
          ) : (
            <>
              Enviar solicitud
              <ArrowRightIcon className="size-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}