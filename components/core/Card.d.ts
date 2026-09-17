import type * as React from "react";

/**
 * Hairline surface with a neutral contact shadow; gains a teal ring + lift when focused or hovered.
 * @startingPoint section="Core" subtitle="Hairline card, four elevations" viewport="700x220"
 */
export interface CardProps {
  children?: React.ReactNode;
  elevation?: "flat" | "contact" | "raised" | "float";
  interactive?: boolean;
  /** forces the lit (teal) state — used by the ring's front-center card */
  focused?: boolean;
  padding?: string;
  /** "deep" flips the card onto the dark scene palette */
  theme?: "deep";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Card(props: CardProps): JSX.Element;
