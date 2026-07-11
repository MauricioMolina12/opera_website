import "server-only";

import { aboutContent } from "@/content/about";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/content/site";
import { solutionsContent } from "@/content/solutions";
import type {
  AboutPageContent,
  HomeContent,
  Service,
  SiteConfig,
  SolutionsPageContent,
} from "@/types/content";

/**
 * Content provider — the single boundary between the UI and the data source.
 *
 * Every component reads content through these functions instead of importing
 * the `/content` files directly. That keeps the swap to Sanity a one-file
 * change: replace the bodies below with Sanity `client.fetch(...)` calls and
 * the rest of the app stays exactly the same.
 *
 * The functions are intentionally `async` today (even though local data is
 * synchronous) so signatures don't change when real fetching is introduced.
 *
 * `server-only` guards against this module — and any future API tokens it
 * uses — ever being bundled into client components.
 */

export async function getSiteConfig(): Promise<SiteConfig> {
  return siteConfig;
}

export async function getHomeContent(): Promise<HomeContent> {
  return homeContent;
}

export async function getAboutContent(): Promise<AboutPageContent> {
  return aboutContent;
}

export async function getSolutionsContent(): Promise<SolutionsPageContent> {
  return solutionsContent;
}

/** All services (used by the home grid and, later, the /solutions index). */
export async function getServices(): Promise<Service[]> {
  return homeContent.services.items;
}

/** A single service by slug (for the future /solutions/[slug] route). */
export async function getServiceBySlug(
  slug: string,
): Promise<Service | undefined> {
  return homeContent.services.items.find((service) => service.slug === slug);
}
