import React from "react";

export interface SectionLabelProps {
  /** zero-padded in the eyebrow: 01–04 */
  index?: number;
  children?: React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "deep";
  style?: React.CSSProperties;
}

export function SectionLabel({
  index,
  children,
  align = "left",
  theme,
  style,
}: SectionLabelProps) {
  return (
    <div
      data-theme={theme}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        justifyContent:
          align === "right"
            ? "flex-end"
            : align === "center"
              ? "center"
              : "flex-start",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-micro)",
        textTransform: "uppercase",
        color: "var(--text-label-rest)",
        ...style,
      }}
    >
      {index != null && (
        <span style={{ color: "var(--text-secondary)" }}>
          {String(index).padStart(2, "0")}
        </span>
      )}
      <span
        style={{
          width: "var(--space-6)",
          height: 1,
          background: "var(--border-strong)",
        }}
      />
      <span>{children}</span>
    </div>
  );
}
