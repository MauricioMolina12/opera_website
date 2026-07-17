import Image from "next/image";

import type { TeamMember } from "@/types/content";

/** Two-letter initials from a person's name, e.g. "Yesid Clavijo" → "YC". */
function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

interface TeamMemberPhotoProps {
  member: TeamMember;
}

/**
 * Avatar for a team member: photo when available, otherwise initials on a
 * brand gradient. Always 120×120px, rounded-2xl, with subtle ring.
 */
export function TeamMemberPhoto({ member }: TeamMemberPhotoProps) {
  return (
    <div className="relative size-[120px] shrink-0 overflow-hidden rounded-2xl ring-1 ring-black/5">
      {member.image ? (
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          sizes="120px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          aria-hidden
          className="grid h-full w-full place-items-center bg-gradient-to-br from-brand-500 to-brand-700 text-3xl font-semibold text-white/90"
        >
          {initials(member.name)}
        </div>
      )}
    </div>
  );
}