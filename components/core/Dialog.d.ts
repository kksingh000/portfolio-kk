import type * as React from "react";

/** Full-screen scrim + dark floating panel. Used for the project popup and any expanded detail. */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  /** small mono line above the title — teal, the one place accent leads */
  eyebrow?: React.ReactNode;
  onClose?: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}
export function Dialog(props: DialogProps): JSX.Element | null;
