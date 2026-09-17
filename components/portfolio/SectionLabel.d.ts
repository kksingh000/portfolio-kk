import type * as React from "react";

/**
 * Numbered mono eyebrow that marks each of the four pages. Always gray — it is never interactive.
 * @startingPoint section="Portfolio" subtitle="Numbered section eyebrow" viewport="700x120"
 */
export interface SectionLabelProps {
  /** zero-padded automatically: 2 -> "02" */
  index?: number;
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "deep";
  style?: React.CSSProperties;
}
export function SectionLabel(props: SectionLabelProps): JSX.Element;
