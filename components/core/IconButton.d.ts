import type * as React from "react";

/** Square or circular single-glyph control (close, next, drag, external link). Pass a Lucide SVG as children. */
export interface IconButtonProps {
  children?: React.ReactNode;
  /** required accessible name */
  label: string;
  size?: "sm" | "md" | "lg";
  variant?: "outline" | "bare" | "circle";
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
