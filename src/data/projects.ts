/**
 * The six projects featured on page 03.
 *
 * CONTENT RULE (readme.md): first person, past tense, one sentence, and every claim
 * attached to a mechanism. No metrics that are not measured, no marketing verbs.
 *
 * PROVENANCE
 *   SchoolSaavy, VisaMitra, LabMitra  blurbs carried over verbatim from the design
 *                                     system's own `ui_kits/portfolio-site/projects.js`.
 *   AgentLab, Alt-Text Auditor,       written from each repository's own README on
 *   Swap / Swap-AI                    github.com/kksingh000 — the mechanisms, stacks
 *                                     and live URLs below are what those projects
 *                                     actually document about themselves.
 */

export interface Project {
  name: string;
  /** mono uppercase, separated by `·` */
  category: string;
  /** one sentence, mechanism-first */
  blurb: string;
  stack: string[];
  live: string | null;
  repo: string | null;
  /** set when a blurb is a draft rather than a sourced claim — none currently are */
  needsReview?: boolean;
}

export const projects: Project[] = [
  {
    name: "SchoolSaavy",
    category: "SAAS · LARAVEL + REACT",
    blurb:
      "Multi-tenant school management SaaS. Tenant isolation via JWT middleware plus a global Eloquent scope.",
    stack: ["Laravel", "React", "MySQL", "JWT", "Docker"],
    live: "https://schoolsaavy.com",
    repo: null,
  },
  {
    name: "VisaMitra",
    category: "AI · FASTAPI + GPT-4o-MINI",
    blurb:
      "AI visa navigator covering 10 corridors, with SSE-streamed answers over a MongoDB Atlas knowledge base.",
    stack: ["FastAPI", "OpenAI API", "MongoDB Atlas", "SSE"],
    live: null,
    repo: "https://github.com/kksingh000/visamitra-backend",
  },
  {
    name: "LabMitra",
    category: "HEALTH · PYTHON + LLM",
    blurb:
      "Blood report PDF parser: deterministic regex extraction against ICMR/WHO ranges, then LLM narration.",
    stack: ["FastAPI", "Regex", "OpenAI API", "Render"],
    live: null,
    repo: "https://github.com/kksingh000",
  },
  {
    name: "AgentLab",
    category: "AI · FASTAPI + CLAUDE",
    blurb:
      "Agentic-AI concepts taught as live runs: every module streams a real Claude loop to the browser over SSE, against deterministic mock tools and Supabase-backed per-session rate limiting.",
    stack: ["React", "FastAPI", "Anthropic SDK", "SSE", "Supabase"],
    live: "https://agent-lab-azure.vercel.app",
    repo: "https://github.com/kksingh000/AgentLab",
  },
  {
    name: "Alt-Text Auditor",
    category: "ACCESSIBILITY · TYPESCRIPT + PYTHON",
    blurb:
      "Rule-based alt-text auditor with no model in the loop: one canonical JSON spec generates both the TypeScript and Python scorers, and shared golden fixtures fail the build when the two drift.",
    stack: ["TypeScript", "Python", "Manifest V3", "FastAPI", "React"],
    live: null,
    repo: "https://github.com/kksingh000/alt-text",
  },
  {
    name: "Swap / Swap-AI",
    category: "MARKETPLACE · MERN + VOICE AI",
    blurb:
      "Peer-to-peer clothing swap marketplace whose server enforces every legal swap-lifecycle transition; the Swap-AI voice agent scores each lead live and dispatches a WhatsApp catalogue mid-call.",
    stack: ["React", "Express", "MongoDB", "JWT", "FastAPI", "Twilio"],
    live: "https://swap-atelier.vercel.app",
    repo: "https://github.com/kksingh000/swap",
  },
];
