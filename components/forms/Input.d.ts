import type * as React from "react";

/** Underline-only mono field. The rule is a gray hairline that turns teal on focus. */
export interface InputProps {
  label?: React.ReactNode;
  hint?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  invalid?: boolean;
  id?: string;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
