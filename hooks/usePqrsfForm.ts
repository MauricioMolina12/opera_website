/**
 * Hook that manages the PQRSF form state, validation, and submission.
 */

"use client";

import { useCallback, useState } from "react";

import { sendPqrsf } from "@/lib/email-service";
import { hasErrors, validatePqrsfForm } from "@/lib/validations";
import type { PqrsfFormData, PqrsfFormErrors, PqrsfType } from "@/types/contact";

interface UsePqrsfFormReturn {
  formData: PqrsfFormData;
  errors: PqrsfFormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  submitError: string | null;
  updateField: (field: keyof PqrsfFormData, value: string) => void;
  handleSubmit: () => Promise<void>;
  reset: () => void;
}

const INITIAL_FORM: PqrsfFormData = {
  nombre: "",
  correo: "",
  tipo: "" as PqrsfType,
  asunto: "",
  descripcion: "",
};

export function usePqrsfForm(): UsePqrsfFormReturn {
  const [formData, setFormData] = useState<PqrsfFormData>({ ...INITIAL_FORM });
  const [errors, setErrors] = useState<PqrsfFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = useCallback((field: keyof PqrsfFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    /* Clear the error for the field being edited */
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    /* Reset success / error when user starts editing again */
    setIsSuccess(false);
    setSubmitError(null);
  }, []);

  const handleSubmit = useCallback(async () => {
    /* Validate */
    const validationErrors = validatePqrsfForm(formData);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendPqrsf(formData);
      setIsSuccess(true);
      setFormData({ ...INITIAL_FORM });
    } catch {
      setSubmitError(
        "No pudimos enviar tu solicitud. Por favor, inténtalo de nuevo.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const reset = useCallback(() => {
    setFormData({ ...INITIAL_FORM });
    setErrors({});
    setIsSubmitting(false);
    setIsSuccess(false);
    setSubmitError(null);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    updateField,
    handleSubmit,
    reset,
  };
}