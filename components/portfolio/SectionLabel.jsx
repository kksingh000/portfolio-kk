import React from "react";

export function SectionLabel({ index, children, align = "left", theme, style }) {
  return (
    <div data-theme={theme} style={{
      display: "flex", alignItems: "center", gap: "var(--space-3)",
      justifyContent: align === "right" ? "flex-end" : align === "center" ? "center" : "flex-start",
      fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-micro)", textTransform: "uppercase",
      color: "var(--text-muted)", ...style,
    }}>
      {index != null && <span style={{ color: "var(--text-secondary)" }}>{String(index).padStart(2, "0")}</span>}
      <span style={{ width: "var(--space-6)", height: 1, background: "var(--border-strong)" }} />
      <span>{children}</span>
    </div>
  );
}
