"use client";

import Link from "next/link";
import { useCallback, useState } from "react";

import { TeamMemberPhoto } from "@/components/ui/team-member-photo";
import { ArrowRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import type { TeamMember } from "@/types/content";

interface TeamMemberCardProps {
  member: TeamMember;
}

/**
 * Premium team member card.
 *
 * Desktop: hover reveals bio, technologies, certifications and a "Ver perfil" CTA.
 * Mobile:  tap toggles the expanded state.
 *
 * Transitions use only CSS `max-height`, `opacity`, and `translate` — no JS
 * animation libraries.
 */
export function TeamMemberCard({ member }: TeamMemberCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isExpanded = expanded;

  const toggle = useCallback(() => setExpanded((p) => !p), []);
  const close = useCallback(() => setExpanded(false), []);

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label={`${member.name} — ${member.role}. Presiona para ${
        isExpanded ? "colapsar" : "expandir"
      } detalles`}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
        if (e.key === "Escape") close();
      }}
      className={cn(
        "group cursor-pointer rounded-2xl border bg-white p-5 transition-all duration-300",
        isExpanded
          ? "border-brand-200 shadow-sm"
          : "border-ink-100 hover:border-ink-200",
        // Desktop hover — expand content
        "lg:hover:border-brand-200 lg:hover:shadow-sm",
      )}
    >
      {/* Top row: photo + name/role/specialties */}
      <div className="flex items-start gap-4">
        <TeamMemberPhoto member={member} />

        <div className="flex-1 pt-1">
          <h3 className="text-lg font-semibold text-ink-900">
            {member.name}
          </h3>
          <p className="mt-0.5 text-sm font-medium text-brand-600">
            {member.role}
          </p>
          {member.specialties && (
            <p className="mt-1 text-xs text-ink-400">
              {member.specialties}
            </p>
          )}
        </div>
      </div>

      {/* Expandable section — max-height transition for smooth reveal */}
      <div
        className={cn(
          "grid transition-all duration-400 ease-out",
          isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          // Desktop: hover expands
          "lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100",
        )}
      >
        <div className="overflow-hidden">
          <div className="mt-5 space-y-4 border-t border-ink-100 pt-5">
            {/* Bio */}
            {member.bio && (
              <p className="text-sm leading-relaxed text-ink-500">
                {member.bio}
              </p>
            )}

            {/* Years + technologies */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {member.years && (
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Experiencia
                  </span>
                  <p className="mt-0.5 text-sm font-semibold text-ink-800">
                    {member.years}
                  </p>
                </div>
              )}

              {member.technologies && member.technologies.length > 0 && (
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                    Tecnologías
                  </span>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {member.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex rounded-md bg-ink-100 px-2 py-0.5 text-xs font-medium text-ink-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Certifications */}
            {member.certifications && member.certifications.length > 0 && (
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-ink-400">
                  Certificaciones
                </span>
                <ul className="mt-1 space-y-0.5">
                  {member.certifications.map((cert) => (
                    <li
                      key={cert}
                      className="text-sm text-ink-500 before:mr-2 before:text-brand-500 before:content-['▹']"
                    >
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Ver perfil (futuro) */}
            {member.slug && (
              <div className="pt-1">
                <Link
                  href={`/team/${member.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800"
                >
                  Ver perfil
                  <ArrowRightIcon className="size-4" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}