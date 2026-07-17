import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { whatsAppUrl } from "@/lib/whatsapp";

/**
 * PQRSR module — Peticiones, Quejas, Reclamos, Sugerencias y Requerimientos.
 *
 * A conversion banner integrated into the existing site design, directing users
 * to WhatsApp for submitting their requests.
 */
export function Pqrsr() {
  const whatsappLink = whatsAppUrl(
    "Hola, buen día. Deseo presentar una PQRSR (Petición, Queja, Reclamo, Sugerencia o Requerimiento) relacionada con los servicios de Opera. Agradezco su atención y pronta respuesta.",
  );

  return (
    <Container as="section" size="wide" aria-label="PQRSR">
      <div className="relative overflow-hidden rounded-3xl">
        <div
          aria-hidden
          className="absolute inset-0"
        />

        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center text-white sm:py-20">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
            PQRSR
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tienes una petición, queja, reclamo, sugerencia o requerimiento?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 text-pretty">
            En Opera queremos escucharte. Escríbenos por WhatsApp y te
            atenderemos con la mayor atención y compromiso para resolver tu
            solicitud de manera rápida y efectiva.
          </p>

          <Button
            href={whatsappLink}
            size="lg"
            variant="white"
            className="mt-8"
            external
          >
            Enviar PQRSR por WhatsApp
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}