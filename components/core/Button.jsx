import React from "react";

const pad = { sm: "8px 14px", md: "12px 22px", lg: "16px 30px" };
const fs = { sm: "var(--text-micro)", md: "var(--text-label)", lg: "var(--text-body-sm)" };

export function Button({
  children, variant = "primary", size = "md", href, iconLeft, iconRight,
  disabled = false, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const on = hover && !disabled;

  const base = {
    display: "inline-flex", alignItems: "center", gap: "var(--space-2)",
    font: "inherit", fontFamily: "var(--font-mono)", fontSize: fs[size],
    fontWeight: "var(--weight-medium)", letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase", textDecoration: "none",
    padding: pad[size], borderRadius: "var(--radius-sm)",
    border: "var(--border-hair) solid transparent", cursor: disabled ? "not-allowed" : "pointer",
    transition: "var(--transition-interactive)", minHeight: size === "sm" ? "34px" : "var(--hit-min)",
    transform: down && !disabled ? "translateY(1px)" : "none",
    opacity: disabled ? 0.38 : 1, whiteSpace: "nowrap",
  };

  const looks = {
    primary: {
      background: on ? "var(--accent)" : "var(--text-primary)",
      color: on ? "var(--ink-900)" : "var(--text-inverse)",
      boxShadow: on ? "var(--glow-md)" : "var(--shadow-contact)",
    },
    secondary: {
      background: "transparent",
      color: on ? "var(--accent-on-light)" : "var(--text-primary)",
      borderColor: on ? "var(--accent)" : "var(--border-strong)",
      boxShadow: on ? "var(--glow-sm)" : "none",
    },
    ghost: {
      background: on ? "var(--accent-wash)" : "transparent",
      color: on ? "var(--accent-on-light)" : "var(--text-secondary)",
      padding: size === "lg" ? "12px 16px" : "8px 12px",
    },
  }[variant];

  const Tag = href && !disabled ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Tag === "button" ? disabled : undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      style={{ ...base, ...looks, ...style }}
      {...rest}
    >
      {iconLeft}
      <span>{children}</span>
      {iconRight}
    </Tag>
  );
}
