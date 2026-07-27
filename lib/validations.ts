/**
 * Form validation helpers for the PQRSF module.
 */

import type { PqrsfFormData, PqrsfFormErrors } from "@/types/contact";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate the PQRSF form fields.
 *
 * @returns An object with error messages per field, or empty strings when valid.
 */
export function validatePqrsfForm(data: PqrsfFormData): PqrsfFormErrors {
  const errors: PqrsfFormErrors = {};

  if (!data.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio.";
  } else if (data.nombre.trim().length < 2) {
    errors.nombre = "El nombre debe tener al menos 2 caracteres.";
  }

  if (!data.correo.trim()) {
    errors.correo = "El correo electrónico es obligatorio.";
  } else if (!EMAIL_RE.test(data.correo.trim())) {
    errors.correo = "Ingresa un correo electrónico válido.";
  }

  if (!data.tipo) {
    errors.tipo = "Selecciona un tipo de solicitud.";
  }

  if (!data.asunto.trim()) {
    errors.asunto = "El asunto es obligatorio.";
  } else if (data.asunto.trim().length < 5) {
    errors.asunto = "El asunto debe tener al menos 5 caracteres.";
  }

  if (!data.descripcion.trim()) {
    errors.descripcion = "La descripción es obligatoria.";
  } else if (data.descripcion.trim().length < 10) {
    errors.descripcion = "La descripción debe tener al menos 10 caracteres.";
  }

  return errors;
}

/**
 * Check whether an errors object has at least one error.
 */
export function hasErrors(errors: PqrsfFormErrors): boolean {
  return Object.values(errors).some((v) => v !== undefined);
}