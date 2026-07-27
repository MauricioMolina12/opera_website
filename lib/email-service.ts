/**
 * Email service abstraction.
 *
 * Encapsulates EmailJS integration so that components never import
 * `@emailjs/browser` directly. When a backend replaces EmailJS, only this
 * file needs to change — the rest of the app stays untouched.
 *
 * Variables are read from environment (`.env.local`):
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID_PQRSF
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PQRSF
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_PQRSF
 */

import emailjs from "@emailjs/browser";

import type { PqrsfFormData } from "@/types/contact";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID_PQRSF ?? "";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_PQRSF ?? "";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY_PQRSF ?? "";

/**
 * Format a date as `27 de julio de 2026`.
 */
function formatDate(date: Date): string {
  const months = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} de ${month} de ${year}`;
}

/**
 * Format a time as `HH:MM` (24-hour, zero-padded).
 */
function formatTime(date: Date): string {
  const hh = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  return `${hh}:${mm}`;
}

export interface EmailPayload extends PqrsfFormData {
  date: string;
  time: string;
}
  
/**
 * Send a PQRSF via EmailJS.
 *
 * @returns A promise that resolves when the email is sent.
 */
export async function sendPqrsf(data: PqrsfFormData): Promise<void> {
  const now = new Date();

  const payload: EmailPayload = {
    ...data,
    date: formatDate(now),
    time: formatTime(now),
  };

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    payload as unknown as Record<string, unknown>,
    PUBLIC_KEY,
  );
}