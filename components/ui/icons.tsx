import type { SVGProps } from "react";

import type { SocialLink } from "@/types/content";

/**
 * Icon registry.
 *
 * UI icons come from `lucide-react`. They are re-exported here under stable
 * names so the rest of the app imports icons from a single module
 * (`@/components/ui/icons`) regardless of the underlying library.
 *
 * Brand/social icons are kept as inline SVGs because lucide no longer ships
 * trademarked brand glyphs — rendering official brand marks as SVG is the
 * correct approach.
 */
import {
  Building2,
  Grid2x2,
  Leaf,
  SprayCan,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export {
  ArrowRight as ArrowRightIcon,
  ArrowUpRight as ArrowUpRightIcon,
  Check as CheckIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  Menu as MenuIcon,
  X as CloseIcon,
  Minus as MinusIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  ShieldCheck as ShieldCheckIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement>;

/* ---------------------------- Solution icons ---------------------------- */
/* Maps a `Service.icon` key (plain string kept in content) to a lucide icon.
   Used by the header "Soluciones" mega-menu. */

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "civil-works": Wrench,
  cleaning: SprayCan,
  facade: Building2,
  floor: Grid2x2,
  gardening: Leaf,
};

export function SolutionIcon({
  name,
  ...props
}: { name?: string } & IconProps) {
  const Icon = (name && SOLUTION_ICONS[name]) || Grid2x2;
  return <Icon {...props} />;
}


function LinkedinIcon(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8.25h4V24h-4V8.25ZM8 8.25h3.84v2.15h.05c.53-1 1.84-2.15 3.79-2.15 4.05 0 4.8 2.67 4.8 6.14V24h-4v-6.96c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.66 1.8-2.66 3.67V24H8V8.25Z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.39.19-1.72.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.82-.32 1.72-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.04.9.19 1.39.32 1.72.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.82.28 1.72.32 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.39-.19 1.72-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.82.32-1.72.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.39-.32-1.72a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.33-.13-.82-.28-1.72-.32-1.24-.06-1.61-.07-4.76-.07Zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96Zm0 8.21a3.23 3.23 0 1 0 0-6.46 3.23 3.23 0 0 0 0 6.46Zm6.34-8.41a1.16 1.16 0 1 1-2.33 0 1.16 1.16 0 0 1 2.33 0Z" />
    </svg>
  );
}

function FacebookIcon(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07Z" />
    </svg>
  );
}

function YoutubeIcon(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M23.5 6.2a3 3 0 0 0-2.12-2.12C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.53A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.12 2.12c1.88.53 9.38.53 9.38.53s7.5 0 9.38-.53a3 3 0 0 0 2.12-2.12A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
    </svg>
  );
}

export function WhatsappIcon(props: IconProps) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M.06 24l1.69-6.16A11.86 11.86 0 0 1 .16 11.9C.16 5.33 5.5 0 12.07 0a11.82 11.82 0 0 1 8.41 3.49 11.82 11.82 0 0 1 3.48 8.42c0 6.57-5.34 11.9-11.9 11.9a11.9 11.9 0 0 1-5.69-1.45L.06 24Zm6.6-3.8c1.68.99 3.27 1.59 5.4 1.59 5.45 0 9.9-4.43 9.9-9.88a9.82 9.82 0 0 0-2.9-7 9.78 9.78 0 0 0-6.98-2.9c-5.46 0-9.9 4.43-9.9 9.88 0 2.24.66 3.92 1.76 5.68l-1 3.65 3.72-.97v-.05Zm10.8-5.6c-.07-.12-.27-.2-.57-.35-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42Z" />
    </svg>
  );
}

/** Map a social platform to its brand icon. */
export function SocialIcon({
  platform,
  ...props
}: { platform: SocialLink["platform"] } & IconProps) {
  switch (platform) {
    case "linkedin":
      return <LinkedinIcon {...props} />;
    case "instagram":
      return <InstagramIcon {...props} />;
    case "facebook":
      return <FacebookIcon {...props} />;
    case "youtube":
      return <YoutubeIcon {...props} />;
    case "whatsapp":
      return <WhatsappIcon {...props} />;
    default:
      return null;
  }
}
