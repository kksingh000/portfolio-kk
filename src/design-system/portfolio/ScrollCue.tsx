import React from "react";

export interface ScrollCueProps {
  label?: string;
  theme?: "deep";
  style?: React.CSSProperties;
}

// `theme` has no default: the .d.ts declares it optional, and a "deep" default
// cannot be cleared by a caller passing `theme={undefined}` — which is how the
// cue ended up rendering dark-ground gray on the shell-white hero.
export function ScrollCue({ label = "scroll", theme, style }: ScrollCueProps) {
  return (
    <div
      data-theme={theme}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "var(--space-3)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        letterSpacing: "var(--tracking-micro)",
        textTransform: "uppercase",
        color: "var(--text-label-rest)",
        ...style,
      }}
    >
      <span>{label}</span>
      <span
        style={{
          width: 1,
          height: 44,
          background: "linear-gradient(to bottom,var(--gray-400),transparent)",
        }}
      />
    </div>
  );
}
