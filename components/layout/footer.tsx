"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import {
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  SocialIcon,
} from "@/components/ui/icons";
import { Logo } from "@/components/ui/logo";
import type { SiteConfig } from "@/types/content";
import { message_whatsapp, whatsAppRedirect, whatsAppUrl } from "@/lib/whatsapp";

interface FooterProps {
  config: SiteConfig;
}

const currentYear = new Date().getFullYear();

const socialLabels: Record<string, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  youtube: "YouTube",
  whatsapp: "WhatsApp",
};



/**
 * Site footer: brand + contact, navigation columns, a closing CTA card and a
 * legal bottom bar. Pure Server Component — all data comes from `config`.
 */
export function Footer({ config }: FooterProps) {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <Container size="wide" className="py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-500">
              {config.tagline}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-ink-600">
              <li>
                <a
                  href={`mailto:${config.contact.email}`}
                  className="inline-flex items-center gap-2.5 hover:text-brand-700"
                >
                  <MailIcon className="size-4 text-brand-600" />
                  {config.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${config.contact.phone}`}
                  className="inline-flex items-center gap-2.5 hover:text-brand-700"
                >
                  <PhoneIcon className="size-4 text-brand-600" />
                  {config.contact.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPinIcon className="size-4 text-brand-600" />
                {config.contact.location}
              </li>
            </ul>
{/* 
            {config.socials.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                {config.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={socialLabels[social.platform] ?? social.platform}
                    className="grid size-9 place-items-center rounded-full bg-ink-50 text-ink-600 transition-colors hover:bg-brand-600 hover:text-white"
                  >
                    <SocialIcon platform={social.platform} className="size-4" />
                  </a>
                ))}
              </div>
            )} */}
          </div>

          {/* Navigation columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {config.footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold text-ink-900">
                  {column.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-500 transition-colors hover:text-brand-700"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Closing CTA card */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-brand-700 p-6 text-white">
              <h3 className="text-lg font-semibold">
                ¿Necesitas una solución profesional?
              </h3>
              <p className="mt-2 text-sm text-ink-300">
                Estamos para ayudarte con servicios eficientes, confiables y
                adaptados a tus necesidades.
              </p>
              <Button onClick={() => whatsAppRedirect(message_whatsapp)} variant="white" className="mt-5 w-full">
                Solicita tu cotización
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Legal bottom bar */}
      <div className="border-t border-ink-100">
        <Container
          size="wide"
          className="flex flex-col items-center justify-between gap-4 py-6 text-sm text-ink-400 sm:flex-row"
        >
          <p>
            © {currentYear} Opera. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {config.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-brand-700">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
