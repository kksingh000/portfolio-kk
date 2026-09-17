import type * as React from "react";

/**
 * Mono, uppercase, letter-spaced action. Accent teal appears on hover only.
 * @startingPoint section="Core" subtitle="Primary, secondary and ghost actions" viewport="700x150"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = ink fill; secondary = hairline outline; ghost = text only */
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  /** renders an <a> instead of a <button> */
  href?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
