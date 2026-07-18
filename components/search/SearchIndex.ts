/**
 * Search index — a framework‑agnostic, in‑memory search engine.
 *
 * Build once at mount time, then search synchronously in < 1 ms.
 * The index is normalised and weighted so users find services even when
 * they type approximate terms ("piscina" → "Mantenimiento profesional de piscinas").
 *
 * Designed to be extended later to other entity types (projects, FAQs,
 * articles, resources) without changing the core algorithm.
 */

import type { Service } from "@/types/content";

/* ------------------------------------------------------------------ *
 *  Types
 * ------------------------------------------------------------------ */

/** A single searchable entity extracted from a Service. */
interface SearchDocument {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  icon?: string;
  /** Normalised text blob used for full‑text matching. */
  text: string;
}

/** A scored search result returned to the UI. */
export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  category: string;
  score: number;
}

/* ------------------------------------------------------------------ *
 *  Text normalisation (Spanish‑aware)
 * ------------------------------------------------------------------ */

const ACCENT_MAP: Record<string, string> = {
  á: "a", à: "a", â: "a", ä: "a", ã: "a",
  é: "e", è: "e", ê: "e", ë: "e",
  í: "i", ì: "i", î: "i", ï: "i",
  ó: "o", ò: "o", ô: "o", ö: "o", õ: "o",
  ú: "u", ù: "u", û: "u", ü: "u",
  ñ: "n", ç: "c",
};

function removeAccents(text: string): string {
  return text.replace(/[áàâäãéèêëíìîïóòôöõúùûüñç]/g, (ch) => ACCENT_MAP[ch] ?? ch);
}

/**
 * Convert text to a normalised form perfect for fuzzy‑ish matching:
 * lowercase, no accents, no punctuation, trimmed whitespace.
 */
function normalize(text: string): string {
  return removeAccents(text.toLowerCase())
    .replace(/[^a-z0-9\s]/g, " ")   // punctuation → space
    .replace(/\s+/g, " ")
    .trim();
}

/** Split a normalised string into unique tokens. */
function tokenize(text: string): Set<string> {
  if (!text) return new Set();
  return new Set(text.split(" ").filter(Boolean));
}

/* ------------------------------------------------------------------ *
 *  Search index
 * ------------------------------------------------------------------ */

export class SearchIndex {
  private docs: SearchDocument[] = [];

  /* ── Builder ──────────────────────────────────────────────────── */

  /**
   * Populate the index with services.
   *
   * Call once (e.g. in a React `useEffect` / `useMemo`) and keep the
   * instance around. Searching is synchronous and stateless.
   */
  static fromServices(services: Service[]): SearchIndex {
    const index = new SearchIndex();

    for (const service of services) {
      // Collect every searchable field into one normalised blob.
      const fields: string[] = [
        service.title,
        service.description,
        service.longDescription,
        ...(service.sectors ?? []),
        ...(service.includes ?? []),
        ...(service.benefits ?? []).flatMap((b) => [b.title, b.description]),
        ...(service.seo?.keywords ?? []),
        service.slug,
      ];

      const text = normalize(fields.join(" "));

      index.docs.push({
        id: service.slug,
        slug: service.slug,
        title: service.title,
        shortDescription: service.description,
        category: (service.sectors ?? [])[0] ?? "General",
        icon: service.icon,
        text,
      });
    }

    return index;
  }

  /* ── Query ─────────────────────────────────────────────────────── */

  /**
   * Search the index and return results sorted by relevance (best first).
   *
   * @param query  Raw user input (normalisation happens internally).
   * @param max    Max results to return (default 12).
   */
  search(query: string, max = 12): SearchResult[] {
    const raw = query.trim();
    if (!raw) return [];

    const normalised = normalize(raw);
    const queryTokens = tokenize(normalised);

    if (queryTokens.size === 0) return [];

    const scored: SearchResult[] = [];

    for (const doc of this.docs) {
      const score = this.computeScore(doc, raw, normalised, queryTokens);
      if (score > 0) {
        scored.push({
          slug: doc.slug,
          title: doc.title,
          description: doc.shortDescription,
          icon: doc.icon,
          category: doc.category,
          score,
        });
      }
    }

    // Sort descending by score, then alphabetically on ties.
    scored.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
    return scored.slice(0, max);
  }

  /* ── Scoring ───────────────────────────────────────────────────── */

  private computeScore(
    doc: SearchDocument,
    rawQuery: string,
    normalisedQuery: string,
    queryTokens: Set<string>,
  ): number {
    const docTitle = normalize(doc.title);
    const docText = doc.text;
    let score = 0;

    // 1. Exact match on title → highest priority.
    if (docTitle === normalisedQuery) {
      score += 100;
    } else if (docTitle.includes(normalisedQuery)) {
      score += 60;
    }

    // 2. Token‑by‑token match in title (partial).
    const titleTokens = tokenize(docTitle);
    for (const token of queryTokens) {
      for (const dt of titleTokens) {
        if (dt === token) {
          score += 30;
        } else if (dt.startsWith(token) || token.startsWith(dt)) {
          score += 15;
        } else if (dt.includes(token) || token.includes(dt)) {
          score += 8;
        }
      }
    }

    // 3. Token match in the full document text (lower weight).
    for (const token of queryTokens) {
      if (docText.includes(token)) {
        // Count occurrences for a rough relevance boost.
        const occurrences = (docText.match(new RegExp(token, "g")) ?? []).length;
        score += Math.min(occurrences, 5) * 3;
      }
    }

    // 4. Bonus when the query is a known synonym / related word.
    const synonymBonus = this.synonymScore(doc, rawQuery);
    score += synonymBonus;

    return score;
  }

  /* ── Synonym / related‑word boost ──────────────────────────────── */

  /**
   * A small, curated map of Spanish terms → related document concepts.
   * This lets "piscina" → pool maintenance, "edificio" → locative maint.,
   * "aseo" → cleaning services, without requiring exact title matches.
   */
  private readonly SYNONYM_MAP: Record<string, string[]> = {
    piscina: ["piscina", "pool", "piscinas", "alberca", "pileta"],
    alberca: ["piscina", "pool", "piscinas", "alberca"],
    edificio: ["edificio", "fachada", "conserjería", "conserjeria", "mantenimiento locativo"],
    fachada: ["fachada", "fachadas", "edificio", "lavado", "frente"],
    aseo: ["aseo", "limpieza", "limpiar", "desinfección", "desinfeccion", "cafetería", "cafeteria"],
    limpieza: ["aseo", "limpieza", "limpiar", "desinfección", "desinfeccion"],
    jardin: ["jardín", "jardin", "jardinería", "jardineria", "zona verde", "plantas", "poda", "jardines"],
    piso: ["piso", "pisos", "cristalizado", "pulido", "sellado", "abrillantado", "marmol", "mármol", "porcelanato"],
    recepcion: ["recepción", "recepcion", "recepcionista", "atención", "atencion", "front desk"],
    conserje: ["conserje", "conserjería", "conserjeria", "edificio", "portero", "vigilancia"],
    salvavidas: ["salvavidas", "piscina", "rescate", "seguridad acuática", "acuatica"],
    mantenimiento: ["mantenimiento", "reparación", "reparacion", "preventivo", "correctivo"],
    corporativo: ["corporativo", "empresa", "oficina", "corporación", "corporacion"],
    residencial: ["residencial", "conjunto", "edificio", "casa", "hogar"],
    salud: ["salud", "clínica", "clinica", "hospital", "médico", "medico"],
    industrial: ["industrial", "fábrica", "fabrica", "planta", "bodega"],
    altura: ["altura", "alturas", "andamio", "fachada"],
    vidrio: ["vidrio", "vidrios", "cristal", "cristales", "ventana"],
  };

  private synonymScore(doc: SearchDocument, rawQuery: string): number {
    const normalised = normalize(rawQuery);

    for (const [term, synonyms] of Object.entries(this.SYNONYM_MAP)) {
      if (normalised.includes(term) || term.includes(normalised)) {
        // Check if any synonym appears in the document text.
        for (const syn of synonyms) {
          if (doc.text.includes(syn)) {
            return 20;
          }
        }
      }
    }

    return 0;
  }
}