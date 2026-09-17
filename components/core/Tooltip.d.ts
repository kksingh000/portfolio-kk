import type * as React from "react";

/** Mono micro-label on hover. Dark chip with a teal hairline (it only exists in a hover state). */
export interface TooltipProps {
  label: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Tooltip(props: TooltipProps): JSX.Element;
