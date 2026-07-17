"use client";

import Image from "next/image";
import { useState } from "react";
import emailjs from "@emailjs/browser";

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

export function ContactForm({ content }: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [toast, setToast] = useState<{ message: string } | null>(null);

  const showToast = (message: string) => {
    setToast({ message });
    setTimeout(() => setToast(null), 4000);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setToast(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    // Validación client-side
    const errors: string[] = [];
    if (!data.nombre?.trim()) errors.push("El nombre es obligatorio");
    if (!data.correo?.trim()) errors.push("El correo es obligatorio");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) errors.push("El correo no es válido");
    if (!data.mensaje?.trim()) errors.push("El mensaje es obligatorio");

    if (errors.length > 0) {
      showToast(errors.join(" · "));
      return;
    }

    setStatus("submitting");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          nombre: data.nombre,
          correo: data.correo,
          empresa: data.empresa || "No especificó",
          telefono: data.telefono || "No especificó",
          mensaje: data.mensaje,
          date: new Date().toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          time: new Date().toLocaleTimeString("es-CO", {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="relative">
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
              <p role="status" className="text-sm font-medium text-green-600">
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

        {toast && (
          <div
            role="alert"
            className="fixed bottom-6 right-6 z-50 max-w-sm animate-fade-up rounded-xl border border-red-200 bg-white px-5 py-4 shadow-lg"
          >
            <div className="flex items-start gap-3">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-red-100 text-xs font-bold text-red-600">
                !
              </span>
              <p className="text-sm leading-relaxed text-red-700">
                {toast.message}
              </p>
            </div>
          </div>
        )}
      </div>

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