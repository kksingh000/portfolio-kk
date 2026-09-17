import React from "react";

export interface CardProps {
  children?: React.ReactNode;
  elevation?: "flat" | "contact" | "raised" | "float";
  interactive?: boolean;
  /** currently-highlighted — same teal treatment as hover */
  focused?: boolean;
  padding?: string;
  theme?: "deep";
  onClick?: (e: React.MouseEvent) => void;
  /** names the card when `interactive` + `onClick` make it a button */
  ariaLabel?: string;
  style?: React.CSSProperties;
}

const shadows = {
  flat: "none",
  contact: "var(--shadow-contact)",
  raised: "var(--shadow-raised)",
  float: "var(--shadow-float)",
} as const;

export function Card({
  children,
  elevation = "contact",
  interactive = false,
  focused = false,
  padding = "var(--space-5)",
  theme,
  onClick,
  ariaLabel,
  style,
}: CardProps) {
  const [hover, setHover] = React.useState(false);
  const lit = focused || (interactive && hover);
  const shadow = shadows[elevation];

  // An interactive card that only answers to a click is unreachable by keyboard.
  // When it is given something to do, it behaves like the button it already
  // looks like — focusable, operable by Enter and Space, and lit on focus.
  const operable = interactive && Boolean(onClick);

  return (
    <div
      data-theme={theme}
      role={operable ? "button" : undefined}
      tabIndex={operable ? 0 : undefined}
      aria-label={operable ? ariaLabel : undefined}
      onClick={onClick}
      onKeyDown={
        operable
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick?.(e as unknown as React.MouseEvent);
              }
            }
          : undefined
      }
      onFocus={() => operable && setHover(true)}
      onBlur={() => operable && setHover(false)}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)",
        color: "var(--text-primary)",
        border:
          "var(--border-hair) solid " +
          (lit ? "var(--accent)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-lg)",
        padding,
        boxShadow: lit
          ? "var(--glow-md)," +
            (shadow === "none" ? "var(--shadow-raised)" : shadow)
          : shadow,
        transform: lit ? "translateY(-2px)" : "none",
        transition: "var(--transition-interactive)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
