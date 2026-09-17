import type * as React from "react";

/**
 * The card that breaks off the front-center of the project ring: cover, serif name, mono category line,
 * teal "CLICK TO ENLARGE +" CTA. Full contrast — everything still on the ring stays monochrome.
 * @startingPoint section="Portfolio" subtitle="Front-center project focus card" viewport="700x520"
 */
export interface ProjectFocusPanelProps {
  name: string;
  /** stack line, rendered uppercase mono, e.g. "SAAS · LARAVEL + REACT" */
  category: string;
  cover?: string;
  coverAlt?: string;
  onEnlarge?: () => void;
  width?: number;
  style?: React.CSSProperties;
}
export function ProjectFocusPanel(props: ProjectFocusPanelProps): JSX.Element;
