import type * as React from "react";

/**
 * Full-width contact row: mono label, serif value, and a mono affordance that reads "copy" or "open".
 * @startingPoint section="Portfolio" subtitle="Contact rows, copy and open" viewport="700x260"
 */
export interface ContactLinkProps {
  label: React.ReactNode;
  value: string;
  href?: string;
  /** copies value to clipboard instead of navigating; shows "COPIED" for 1.4s */
  copyable?: boolean;
  theme?: "deep";
  style?: React.CSSProperties;
}
export function ContactLink(props: ContactLinkProps): JSX.Element;
