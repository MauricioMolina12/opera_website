import Image from "next/image";

import { SocialIcon } from "@/components/ui/icons";
import type { AboutPageContent, TeamMember } from "@/types/content";

interface AboutTeamProps {
  content: AboutPageContent["team"];
}

/** Two-letter initials from a person's name, e.g. "Yesid Clavijo" → "YC". */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function MemberCard({ member }: { member: TeamMember }) {
  return (
    <figure className="flex flex-col">
      <div className="relative aspect-square h-[380px] overflow-hidden rounded-2xl bg-brand-50">
        {member.image ? (
          <Image
            src={member.image.src}
            alt={member.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-[0_top]"
          />
        ) : (
          <div
            aria-hidden
            className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-500 to-brand-700 text-5xl font-semibold text-white/90"
          >
            {initials(member.name)}
          </div>
        )}
      </div>

      <figcaption className="mt-4">
        <p className="text-base font-semibold text-ink-900">{member.name}</p>
        <p className="text-sm text-ink-500">{member.role}</p>
      </figcaption>

      {/* {member.socials && member.socials.length > 0 && (
        <div className="mt-3 flex items-center gap-3">
          {member.socials.map((social) => (
            <a
              key={social.platform}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} en ${social.platform}`}
              className="text-ink-400 transition-colors hover:text-brand-600"
            >
              <SocialIcon platform={social.platform} className="size-4" />
            </a>
          ))}
        </div>
      )} */}
    </figure>
  );
}

/**
 * "Conozca a las personas detrás del producto": a heading and a responsive
 * grid of team member cards.
 */
export function AboutTeam({ content }: AboutTeamProps) {
  return (
    <div>
      {content.eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {content.eyebrow}
        </p>
      )}
      <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-ink-900 text-balance sm:text-4xl">
        {content.title}
      </h2>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {content.members.map((member, index) => (
          <MemberCard key={member.name + index} member={member} />
        ))}
      </div>
    </div>
  );
}
