import React from "react";

export interface ContactLinkProps {
  label: string;
  value: string;
  href?: string;
  /** copies `value` to the clipboard instead of navigating */
  copyable?: boolean;
  theme?: "deep";
  style?: React.CSSProperties;
}

export function ContactLink({
  label,
  value,
  href,
  copyable = false,
  theme,
  style,
}: ContactLinkProps) {
  const [hover, setHover] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const external = Boolean(href && href.startsWith("http"));

  const copy = (e: React.MouseEvent) => {
    if (!copyable) return;
    e.preventDefault();
    navigator.clipboard?.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1400);
  };

  return (
    <a
      data-theme={theme}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      onClick={copy}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) auto",
        alignItems: "baseline",
        gap: "var(--space-4)",
        padding: "var(--space-4) 0",
        textDecoration: "none",
        borderBottom:
          "var(--border-hair) solid " +
          (hover ? "var(--accent)" : "var(--border-subtle)"),
        color: "var(--text-primary)",
        transition: "var(--transition-interactive)",
        ...style,
      }}
    >
      <span style={{ display: "grid", gap: "var(--space-2)", minWidth: 0 }}>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-micro)",
            textTransform: "uppercase",
            color: hover ? "var(--accent-on-light)" : "var(--text-label-rest)",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-subheading)",
            fontWeight: "var(--weight-medium)",
            letterSpacing: "var(--tracking-display)",
            fontVariationSettings: "var(--fraunces-text)",
            overflowWrap: "anywhere",
          }}
        >
          {value}
        </span>
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-micro)",
          letterSpacing: "var(--tracking-label)",
          textTransform: "uppercase",
          color: hover ? "var(--accent-on-light)" : "var(--text-label-rest)",
          transform: hover ? "translateX(3px)" : "none",
          transition: "var(--transition-interactive)",
          whiteSpace: "nowrap",
        }}
      >
        {copied ? "copied" : copyable ? "copy" : "open ↗"}
      </span>
    </a>
  );
}
