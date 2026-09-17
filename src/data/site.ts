/**
 * Page 01 and page 04 copy. Carried from the design system's own UI kit
 * (`ui_kits/portfolio-site/`) so the site and the specimen cards cannot drift.
 */

export const person = {
  name: "Krishna Kumar Singh",
  /** stacked in the hero at --leading-tight */
  nameLines: ["Krishna", "Kumar", "Singh"],
  /** mono label eyebrow */
  eyebrow: "Full-stack & AI engineer · India",
  /** the ceiling for how promotional any copy on this site is allowed to be */
  statement: "Building software that ships, scales & earns trust.",
  education: "Final-year B.Tech CSE · NIET Greater Noida",
};

export interface Role {
  role: string;
  org: string;
  when: string;
  stack: string[];
}

export const roles: Role[] = [
  {
    role: "Software Developer Intern",
    org: "SchoolSaavy",
    when: "2025 — present",
    stack: ["Laravel", "React", "MySQL"],
  },
  {
    role: "Frontend Intern",
    org: "Dabster SoftTech",
    when: "Aug 2025",
    stack: ["React", "Tailwind"],
  },
  {
    role: "B.Tech CSE, final year",
    org: "NIET Greater Noida",
    when: "2026",
    stack: [],
  },
];

export interface ContactEntry {
  label: string;
  value: string;
  href?: string;
  copyable?: boolean;
}

export const contacts: ContactEntry[] = [
  { label: "Email", value: "kkandsingh000@gmail.com", copyable: true },
  {
    label: "GitHub",
    value: "github.com/kksingh000",
    href: "https://github.com/kksingh000",
  },
  {
    label: "SchoolSaavy",
    value: "schoolsaavy.com",
    href: "https://schoolsaavy.com",
  },
  {
    label: "Live site",
    value: "kksrizzz.online",
    href: "https://kksrizzz.online",
  },
];

export const pages = [
  { id: "hero", index: 1, nav: "Hero" },
  { id: "stack", index: 2, nav: "Stack" },
  { id: "work", index: 3, nav: "Work" },
  { id: "contact", index: 4, nav: "Contact" },
] as const;
