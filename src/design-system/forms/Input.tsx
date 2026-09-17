import React from "react";

export interface InputProps {
  label?: string;
  hint?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  name?: string;
  required?: boolean;
  invalid?: boolean;
  id?: string;
  style?: React.CSSProperties;
}

export function Input({
  label,
  hint,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
  required,
  invalid = false,
  id,
  style,
}: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const uid = id || React.useId();
  return (
    <label
      htmlFor={uid}
      style={{ display: "grid", gap: "var(--space-2)", ...style }}
    >
      {label && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-label)",
            textTransform: "uppercase",
            color: focus ? "var(--accent-on-light)" : "var(--text-label-rest)",
            transition: "color var(--dur-fast) var(--ease-out)",
          }}
        >
          {label}
        </span>
      )}
      <input
        id={uid}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          font: "inherit",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-body-sm)",
          color: "var(--text-primary)",
          background: "transparent",
          padding: "12px 0",
          minHeight: "var(--hit-min)",
          border: "none",
          borderBottom:
            "var(--border-hair) solid " +
            (invalid
              ? "var(--gray-800)"
              : focus
                ? "var(--accent)"
                : "var(--border-strong)"),
          boxShadow: focus ? "0 1px 0 0 var(--accent)" : "none",
          outline: "none",
          borderRadius: 0,
          transition:
            "border-color var(--dur-fast) var(--ease-out),box-shadow var(--dur-fast) var(--ease-out)",
        }}
      />
      {hint && (
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            color: "var(--text-label-rest)",
          }}
        >
          {hint}
        </span>
      )}
    </label>
  );
}
