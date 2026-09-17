import React from "react";

const zoneMeta = {
  peak: { note: "Daily driver", submerged: false },
  upper: { note: "Shipped in production", submerged: false },
  "below-shallow": { note: "Working knowledge", submerged: true },
  "below-deep": { note: "Exploring", submerged: true },
};

export function TechChip({
  children, zone = "peak", leader = 64, leaderSide = "left",
  active = false, onHoverChange, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  const meta = zoneMeta[zone] || zoneMeta.peak;
  const line = (
    <span style={{
      width: leader, height: 1, flex: "0 0 auto",
      background: lit ? "var(--accent)" : "var(--gray-400)",
      boxShadow: lit ? "var(--glow-waterline)" : "none",
      transition: "var(--transition-interactive)",
    }} />
  );
  const dot = (
    <span style={{
      width: 5, height: 5, borderRadius: "var(--radius-pill)", flex: "0 0 auto",
      background: lit ? "var(--accent)" : "var(--gray-400)",
      boxShadow: lit ? "0 0 0 4px var(--teal-a35)" : "none",
      transition: "var(--transition-interactive)",
    }} />
  );
  return (
    <span
      onMouseEnter={() => { setHover(true); onHoverChange && onHoverChange(true); }}
      onMouseLeave={() => { setHover(false); onHoverChange && onHoverChange(false); }}
      style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-2)", ...style }}
      {...rest}
    >
      {leaderSide === "left" && <>{dot}{line}</>}
      <span style={{
        display: "inline-flex", flexDirection: "column", gap: 2,
        padding: "7px 11px", borderRadius: "var(--radius-sm)",
        background: meta.submerged ? "rgba(126,138,140,.16)" : "rgba(245,244,240,.08)",
        backdropFilter: "var(--blur-chip)",
        border: "var(--border-hair) solid " + (lit ? "var(--accent)" : meta.submerged ? "rgba(154,154,158,.35)" : "rgba(212,212,214,.45)"),
        boxShadow: lit ? "var(--glow-md)" : "none",
        color: lit ? "var(--teal-300)" : meta.submerged ? "var(--gray-200)" : "var(--shell-000)",
        opacity: meta.submerged && !lit ? 0.74 : 1,
        transition: "var(--transition-interactive)", whiteSpace: "nowrap",
      }}>
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "var(--text-label)",
          letterSpacing: "0.04em", fontWeight: "var(--weight-medium)",
        }}>{children}</span>
        {lit && (
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-label)", textTransform: "uppercase",
            color: "var(--accent)",
          }}>{meta.note}</span>
        )}
      </span>
      {leaderSide === "right" && <>{line}{dot}</>}
    </span>
  );
}
