import React from "react";

const box = { sm: 34, md: 44, lg: 52 };

export function IconButton({
  children, label, size = "md", variant = "outline", onClick, disabled = false, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const on = hover && !disabled;
  const s = box[size];
  return (
    <button
      aria-label={label}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: s, height: s, display: "inline-flex", alignItems: "center", justifyContent: "center",
        borderRadius: variant === "circle" ? "var(--radius-pill)" : "var(--radius-sm)",
        border: "var(--border-hair) solid " + (on ? "var(--accent)" : variant === "bare" ? "transparent" : "var(--border-strong)"),
        background: variant === "bare" ? (on ? "var(--accent-wash)" : "transparent") : "var(--surface-card)",
        color: on ? "var(--accent-on-light)" : "var(--text-secondary)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.38 : 1,
        boxShadow: on ? "var(--glow-sm)" : "none",
        transition: "var(--transition-interactive)", ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
