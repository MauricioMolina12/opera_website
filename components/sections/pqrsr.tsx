"use client";

import { useContactContext } from "@/context/contact-context";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRightIcon } from "@/components/ui/icons";

/**
 * PQRSF module — Peticiones, Quejas, Reclamos, Sugerencias y Felicitaciones.
 *
 * A conversion banner that opens the shared ContactModal via context, so the
 * modal always renders at the layout level with the correct z-index.
 */
export function Pqrsr() {
  const { open } = useContactContext();

  return (
    <Container as="section" size="wide" aria-label="PQRSF">
      <div className="relative overflow-hidden rounded-3xl">
        <div aria-hidden className="absolute inset-0" />

        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center text-white sm:py-20">
          <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
            PQRSF
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
            ¿Tienes una petición, queja, reclamo, sugerencia o felicitación?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85 text-pretty">
            En Opera queremos escucharte. Envíanos tu solicitud a través de
            nuestro formulario y te atenderemos con la mayor atención y
            compromiso para resolver tu solicitud de manera rápida y efectiva.
          </p>

          <Button
            onClick={() => open("pqrsf-form")}
            size="lg"
            variant="white"
            className="mt-8"
          >
            Crear PQRSF
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
}