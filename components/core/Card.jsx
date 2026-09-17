import React from "react";

export function Card({
  children, elevation = "contact", interactive = false, focused = false,
  padding = "var(--space-5)", theme, onClick, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = focused || (interactive && hover);
  const shadow = { flat: "none", contact: "var(--shadow-contact)", raised: "var(--shadow-raised)", float: "var(--shadow-float)" }[elevation];
  return (
    <div
      data-theme={theme}
      onClick={onClick}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: "var(--surface-card)", color: "var(--text-primary)",
        border: "var(--border-hair) solid " + (lit ? "var(--accent)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-lg)", padding,
        boxShadow: lit ? "var(--glow-md)," + (shadow === "none" ? "var(--shadow-raised)" : shadow) : shadow,
        transform: lit ? "translateY(-2px)" : "none",
        transition: "var(--transition-interactive)",
        cursor: interactive ? "pointer" : "default", ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
