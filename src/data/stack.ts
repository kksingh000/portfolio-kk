import type { StackZone } from "../design-system";

/**
 * The iceberg (page 02). Tiers rank honestly — they do not flatten into a logo wall,
 * and no submerged technology is promoted into a strength (readme.md).
 *
 * Tier labels are the plain ones the readme specifies; the items are the design
 * system's own `KK_STACK` data, tier for tier.
 */
export interface StackTier {
  zone: StackZone;
  /** mono uppercase tier caption */
  label: string;
  /** where the tier sits relative to the waterline, as a 0..1 depth for the 3D scene */
  depth: number;
  submerged: boolean;
  items: string[];
}

export const stack: StackTier[] = [
  {
    zone: "peak",
    label: "Daily driver",
    depth: 0,
    submerged: false,
    items: [
      "React",
      "JavaScript / TypeScript",
      "Node.js",
      "Laravel",
      "Tailwind",
    ],
  },
  {
    zone: "upper",
    label: "Shipped in production",
    depth: 0.25,
    submerged: false,
    items: ["Next.js", "Express", "FastAPI", "MongoDB", "Supabase"],
  },
  {
    zone: "below-shallow",
    label: "Working knowledge",
    depth: 0.6,
    submerged: true,
    items: ["Spring Boot", "PostgreSQL", "MySQL", "Redis", "Docker / CI-CD"],
  },
  {
    zone: "below-deep",
    label: "Exploring",
    depth: 1,
    submerged: true,
    items: ["LangChain", "RAG", "Prompt Engineering", "OpenAI API", "AWS"],
  },
];
