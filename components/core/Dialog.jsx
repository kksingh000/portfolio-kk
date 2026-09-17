import React from "react";
import { IconButton } from "./IconButton.jsx";

export function Dialog({ open = true, title, eyebrow, onClose, footer, children, width = 720, style }) {
  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed", inset: 0, zIndex: 60, display: "grid", placeItems: "center",
        padding: "var(--space-5)", background: "var(--scene-fog)",
        backdropFilter: "var(--blur-scrim)", animation: "none",
      }}
      onClick={onClose}
    >
      <div
        data-theme="deep"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(" + width + "px, 100%)", maxHeight: "86vh", overflow: "auto",
          background: "var(--surface-card)", color: "var(--text-primary)",
          border: "var(--border-hair) solid var(--accent)",
          borderRadius: "var(--radius-lg)", boxShadow: "var(--glow-md),var(--shadow-float)",
          padding: "var(--space-6)", ...style,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "var(--space-5)" }}>
          <div>
            {eyebrow && (
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-micro)", textTransform: "uppercase",
                color: "var(--accent)", marginBottom: "var(--space-3)",
              }}>{eyebrow}</div>
            )}
            {title && (
              <h2 style={{
                margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-heading)",
                fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-display)",
                lineHeight: "var(--leading-display)", fontVariationSettings: "var(--fraunces-text)",
              }}>{title}</h2>
            )}
          </div>
          {onClose && <IconButton label="Close" variant="bare" size="sm" onClick={onClose}>✕</IconButton>}
        </div>
        <div style={{ marginTop: "var(--space-5)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-body)", color: "var(--text-secondary)" }}>
          {children}
        </div>
        {footer && <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>{footer}</div>}
      </div>
    </div>
  );
}
