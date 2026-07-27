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
</path>
<task_progress>
- [x] Analyze existing codebase
- [x] Create types/contact.ts
- [ ] Create lib/email-service.ts
- [ ] Create lib/validations.ts
- [ ] Create hooks/useContactModal.ts
- [ ] Create hooks/usePqrsfForm.ts
- [ ] Create components/contact/ContactModal.tsx
- [ ] Create components/contact/ContactOptions.tsx
- [ ] Create components/contact/PqrsfModal.tsx
- [ ] Create components/contact/PqrsfForm.tsx
- [ ] Create components/ui/contactBtn.tsx
- [ ] Refactor components/sections/pqrsr.tsx to reuse PqrsfForm
- [ ] Update app/layout.tsx
</task_progress>
</write_to_file>