"use client";

import { Process } from "@/components/sections/process";
import { whatsAppRedirect, message_whatsapp } from "@/lib/whatsapp";
import type { ProcessStep, SectionIntro } from "@/types/content";

interface ProcessWhatsAppProps {
  intro: SectionIntro;
  steps: ProcessStep[];
}

export function ProcessWhatsApp({ intro, steps }: ProcessWhatsAppProps) {
  return (
    <Process
      intro={{ ...intro, event: () => whatsAppRedirect(message_whatsapp) }}
      steps={steps}
    />
  );
}
