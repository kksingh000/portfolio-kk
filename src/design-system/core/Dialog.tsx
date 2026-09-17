import React from "react";
import { IconButton } from "./IconButton";

export interface DialogProps {
  open?: boolean;
  title?: string;
  eyebrow?: string;
  onClose?: () => void;
  footer?: React.ReactNode;
  children?: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}

export function Dialog({
  open = true,
  title,
  eyebrow,
  onClose,
  footer,
  children,
  width = 720,
  style,
}: DialogProps) {
  const panel = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 60,
        display: "grid",
        placeItems: "center",
        padding: "var(--space-5)",
        background: "var(--scene-fog)",
        backdropFilter: "var(--blur-scrim)",
      }}
      onClick={onClose}
    >
      <div
        ref={panel}
        tabIndex={-1}
        data-theme="deep"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(" + width + "px, 100%)",
          maxHeight: "86vh",
          overflow: "auto",
          background: "var(--surface-card)",
          color: "var(--text-primary)",
          border: "var(--border-hair) solid var(--accent)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--glow-md),var(--shadow-float)",
          padding: "var(--space-6)",
          outline: "none",
          ...style,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-5)",
          }}
        >
          <div>
            {eyebrow && (
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-micro)",
                  letterSpacing: "var(--tracking-micro)",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: "var(--space-3)",
                }}
              >
                {eyebrow}
              </div>
            )}
            {title && (
              <h2
                style={{
                  margin: 0,
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-heading)",
                  fontWeight: "var(--weight-semibold)",
                  letterSpacing: "var(--tracking-display)",
                  lineHeight: "var(--leading-display)",
                  fontVariationSettings: "var(--fraunces-text)",
                }}
              >
                {title}
              </h2>
            )}
          </div>
          {onClose && (
            <IconButton
              label="Close"
              variant="bare"
              size="sm"
              onClick={onClose}
            >
              <CloseMark />
            </IconButton>
          )}
        </div>
        <div
          style={{
            marginTop: "var(--space-5)",
            fontSize: "var(--text-body-sm)",
            lineHeight: "var(--leading-body)",
            color: "var(--text-secondary)",
          }}
        >
          {children}
        </div>
        {footer && (
          <div
            style={{
              marginTop: "var(--space-6)",
              display: "flex",
              gap: "var(--space-3)",
              flexWrap: "wrap",
            }}
          >
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

/** Lucide `x`, inlined: 2px round-cap stroke, matching the system's hairline character. */
function CloseMark() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
