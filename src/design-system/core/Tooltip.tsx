import React from "react";

export interface TooltipProps {
  label: string;
  placement?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Tooltip({
  label,
  placement = "top",
  children,
  style,
}: TooltipProps) {
  const [on, setOn] = React.useState(false);
  const pos: React.CSSProperties = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)",
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)",
    },
  }[placement];
  return (
    <span
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      style={{ position: "relative", display: "inline-flex", ...style }}
    >
      {children}
      <span
        role="tooltip"
        style={{
          position: "absolute",
          ...pos,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          opacity: on ? 1 : 0,
          transition: "opacity var(--dur-fast) var(--ease-out)",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-micro)",
          letterSpacing: "var(--tracking-label)",
          textTransform: "uppercase",
          padding: "6px 9px",
          borderRadius: "var(--radius-xs)",
          background: "var(--ink-900)",
          color: "var(--shell-000)",
          border: "var(--border-hair) solid var(--accent)",
          boxShadow: "var(--glow-sm)",
          zIndex: 10,
        }}
      >
        {label}
      </span>
    </span>
  );
}
