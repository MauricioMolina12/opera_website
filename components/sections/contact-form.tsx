"use client";

import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ContactSectionContent } from "@/types/content";

interface ContactFormProps {
  content: ContactSectionContent;
}

type Status = "idle" | "submitting" | "success" | "error";

interface FieldProps {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}

function Field({ id, label, type = "text", required, textarea }: FieldProps) {
  const inputClasses =
    "w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 " +
    "placeholder-ink-300 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-100";

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-700">
        {label}
        {required && <span className="ml-0.5 text-brand-600">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={4}
          className={cn(inputClasses, "resize-none")}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          className={inputClasses}
        />
      )}
    </div>
  );
}

/**
 * "Hablemos sobre tu próximo proyecto": contact form beside an illustrative
 * image.
 *
 * NOTE: submission is currently a client-side stub. To make it functional,
 * wire `handleSubmit` to a Next.js Route Handler (e.g. `app/api/contact/route.ts`)
 * or a Server Action that sends an email / creates a CMS lead.
 */
export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      // TODO: replace with a real POST to /api/contact (or a Server Action).
      const data = Object.fromEntries(new FormData(event.currentTarget));
      console.info("Contact form submission (stub):", data);
      await new Promise((resolve) => setTimeout(resolve, 600));
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Form */}
      <div>
        <h2 className="text-3xl font-semibold tracking-tight text-ink-900 text-balance sm:text-4xl">
          {content.title}
        </h2>
        <p className="mt-4 max-w-md text-ink-500 text-pretty">
          {content.subtitle}
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="nombre" label="Nombre" required />
            <Field id="correo" label="Correo" type="email" required />
          </div>
          <Field id="empresa" label="Empresa (opcional)" />
          <Field id="telefono" label="Teléfono / WhatsApp" type="tel" />
          <Field id="mensaje" label="Mensaje" textarea required />

          <div className="flex flex-wrap items-center gap-4">
            <Button type="submit" size="lg" disabled={status === "submitting"}>
              {status === "submitting" ? "Enviando…" : content.submitLabel}
            </Button>

            {status === "success" && (
              <p role="status" className="text-sm font-medium text-brand-700">
                ¡Gracias! Te contactaremos muy pronto.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="text-sm font-medium text-red-600">
                Ocurrió un error. Inténtalo de nuevo.
              </p>
            )}
          </div>
        </form>
      </div>

      {/* Illustration */}
      <div className="relative min-h-72 overflow-hidden rounded-2xl bg-ink-50 lg:min-h-full">
        <Image
          src={content.image.src}
          alt={content.image.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain"
        />
      </div>
    </div>
  );
}
