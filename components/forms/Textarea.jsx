import React from "react";

export function Textarea({ label, value, onChange, placeholder, rows = 4, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <label htmlFor={uid} style={{ display: "grid", gap: "var(--space-2)", ...style }}>
      {label && (
        <span style={{
          fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
          letterSpacing: "var(--tracking-label)", textTransform: "uppercase",
          color: focus ? "var(--accent-on-light)" : "var(--text-muted)",
          transition: "color var(--dur-fast) var(--ease-out)",
        }}>{label}</span>
      )}
      <textarea
        id={uid} rows={rows} value={value} placeholder={placeholder} onChange={onChange}
        onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
        style={{
          font: "inherit", fontFamily: "var(--font-mono)", fontSize: "var(--text-body-sm)",
          lineHeight: "var(--leading-body)", color: "var(--text-primary)",
          background: "transparent", padding: "12px", resize: "vertical",
          border: "var(--border-hair) solid " + (focus ? "var(--accent)" : "var(--border-strong)"),
          borderRadius: "var(--radius-sm)", outline: "none",
          boxShadow: focus ? "var(--glow-sm)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-base) var(--ease-out)",
        }}
        {...rest}
      />
    </label>
  );
}
