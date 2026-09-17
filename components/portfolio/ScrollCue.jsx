import React from "react";

export function ScrollCue({ label = "scroll", theme = "deep", style }) {
  return (
    <div data-theme={theme} style={{
      display: "inline-flex", flexDirection: "column", alignItems: "center", gap: "var(--space-3)",
      fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)", textTransform: "uppercase",
      color: "var(--text-muted)", ...style,
    }}>
      <span>{label}</span>
      <span style={{
        width: 1, height: 44,
        background: "linear-gradient(to bottom,var(--gray-400),transparent)",
      }} />
    </div>
  );
}
