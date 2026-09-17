import React from "react";

export interface ProjectFocusPanelProps {
  name: string;
  category: string;
  /** one sentence, mechanism-first */
  blurb?: string;
  cover?: string;
  coverAlt?: string;
  onEnlarge?: () => void;
  width?: number | string;
  style?: React.CSSProperties;
}

export function ProjectFocusPanel({
  name,
  category,
  blurb,
  cover,
  coverAlt = "",
  onEnlarge,
  width = 420,
  style,
}: ProjectFocusPanelProps) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-theme="deep"
      role="button"
      tabIndex={0}
      aria-label={"Enlarge " + name}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onClick={onEnlarge}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onEnlarge?.();
        }
      }}
      style={{
        width,
        cursor: "pointer",
        padding: "var(--space-3)",
        background: "var(--surface-card)",
        color: "var(--text-primary)",
        border:
          "var(--border-hair) solid " +
          (hover ? "var(--accent)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-lg)",
        boxShadow: (hover ? "var(--glow-md)," : "") + "var(--shadow-float)",
        transform: hover ? "translateY(-4px)" : "none",
        transition: "var(--transition-interactive)",
        outline: "none",
        ...style,
      }}
    >
      <div
        style={{
          aspectRatio: "16 / 10",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          background: "var(--gray-800)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {cover ? (
          <img
            src={cover}
            alt={coverAlt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: hover ? "none" : "var(--desaturate-photo)",
              transition: "filter var(--dur-base) var(--ease-out)",
            }}
          />
        ) : (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-micro)",
              letterSpacing: "var(--tracking-micro)",
              textTransform: "uppercase",
              color: "var(--gray-400)",
            }}
          >
            cover image
          </span>
        )}
      </div>
      <div style={{ padding: "var(--space-4) var(--space-3) var(--space-3)" }}>
        <h3
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
          {name}
        </h3>
        <div
          style={{
            marginTop: "var(--space-2)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-micro)",
            textTransform: "uppercase",
            color: "var(--text-muted)",
          }}
        >
          {category}
        </div>
        {blurb && (
          <p
            style={{
              margin: "var(--space-4) 0 0",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-body-sm)",
              lineHeight: "var(--leading-body)",
              color: "var(--text-secondary)",
            }}
          >
            {blurb}
          </p>
        )}
        <div
          style={{
            marginTop: "var(--space-5)",
            display: "flex",
            alignItems: "center",
            gap: "var(--space-2)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-micro)",
            textTransform: "uppercase",
            color: "var(--accent)",
            textShadow: hover ? "0 0 16px var(--teal-a35)" : "none",
            transition: "text-shadow var(--dur-base) var(--ease-out)",
          }}
        >
          click to enlarge
          <span
            style={{
              transform: hover ? "rotate(90deg)" : "none",
              transition: "transform var(--dur-base) var(--ease-out)",
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
}
