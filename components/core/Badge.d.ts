import type * as React from "react";

/**
 * Tech / stack tag. Gray by default, teal only when active or hovered.
 * @startingPoint section="Core" subtitle="Stack tags, default and active" viewport="700x150"
 */
export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "solid";
  /** currently-matched tech — renders teal */
  active?: boolean;
  /** enables hover lighting + pointer */
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Badge(props: BadgeProps): JSX.Element;
