/**
 * Client wrapper that renders the floating contact button together with the
 * ContactModal via the shared contact context.
 *
 * The ContactModal is rendered once at the layout level by the ContactProvider,
 * so its z-index always stacks above the entire page.
 */

"use client";

import { useContactContext } from "@/context/contact-context";
import { ContactBtn } from "@/components/ui/contactBtn";

export function ContactButtonWrapper() {
  const { open } = useContactContext();

  return <ContactBtn onClick={() => open("options")} />;
}