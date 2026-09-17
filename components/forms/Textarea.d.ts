import type * as React from "react";

/** Multi-line mono field for the contact message. Boxed (unlike Input) because it has height. */
export interface TextareaProps {
  label?: React.ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  id?: string;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
