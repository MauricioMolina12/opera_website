import type { AboutPageContent } from "@/types/content";
import { TeamMemberCard } from "@/components/ui/team-member-card";

interface AboutTeamProps {
  content: AboutPageContent["team"];
}

/**
 * "Conozca a las personas detrás del producto": a heading and a responsive
 * grid of team member cards with premium expand-on-hover behaviour.
 *
 * Server Component — only the individual cards are Client Components.
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

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {content.members.map((member, index) => (
          <TeamMemberCard key={member.name + index} member={member} />
        ))}
      </div>
    </div>
  );
}