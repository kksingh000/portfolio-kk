import React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "solid";
  /** currently-highlighted — renders identically to hover, by design */
  active?: boolean;
  interactive?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

export function Badge({
  children,
  tone = "neutral",
  active = false,
  interactive = false,
  onClick,
  style,
}: BadgeProps) {
  const [hover, setHover] = React.useState(false);
  const lit = active || (interactive && hover);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        padding: "5px 10px",
        borderRadius: "var(--radius-xs)",
        border:
          "var(--border-hair) solid " +
          (lit ? "var(--accent)" : "var(--border-subtle)"),
        background: lit
          ? "var(--accent-wash)"
          : tone === "solid"
            ? "var(--bg-sunken)"
            : "transparent",
        color: lit ? "var(--accent-on-light)" : "var(--text-secondary)",
        cursor: interactive ? "pointer" : "default",
        transition: "var(--transition-interactive)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
