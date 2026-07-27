/**
 * PQRSF type definitions.
 *
 * Petición, Queja, Reclamo, Sugerencia, Felicitación
 */

export type PqrsfType =
  | "Petición"
  | "Queja"
  | "Reclamo"
  | "Sugerencia"
  | "Felicitación";

export interface PqrsfFormData {
  nombre: string;
  correo: string;
  tipo: PqrsfType;
  asunto: string;
  descripcion: string;
}

export interface PqrsfFormErrors {
  nombre?: string;
  correo?: string;
  tipo?: string;
  asunto?: string;
  descripcion?: string;
}

export type ModalStep = "options" | "pqrsf-form" | "success" | "error";

export type ContactModalView = "options" | "pqrsf-form";