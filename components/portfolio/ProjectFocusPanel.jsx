import React from "react";

export function ProjectFocusPanel({
  name, category, cover, coverAlt = "", onEnlarge, width = 420, style, ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-theme="deep"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onEnlarge}
      style={{
        width, cursor: "pointer", padding: "var(--space-3)",
        background: "var(--surface-card)", color: "var(--text-primary)",
        border: "var(--border-hair) solid " + (hover ? "var(--accent)" : "var(--border-subtle)"),
        borderRadius: "var(--radius-lg)",
        boxShadow: (hover ? "var(--glow-md)," : "") + "var(--shadow-float)",
        transform: hover ? "translateY(-4px)" : "none",
        transition: "var(--transition-interactive)", ...style,
      }}
      {...rest}
    >
      <div style={{
        aspectRatio: "16 / 10", borderRadius: "var(--radius-md)", overflow: "hidden",
        background: "var(--gray-800)", display: "grid", placeItems: "center",
      }}>
        {cover ? (
          <img src={cover} alt={coverAlt} style={{
            width: "100%", height: "100%", objectFit: "cover",
            filter: hover ? "none" : "var(--desaturate-photo)",
            transition: "filter var(--dur-base) var(--ease-out)",
          }} />
        ) : (
          <span style={{
            fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-micro)", textTransform: "uppercase",
            color: "var(--gray-400)",
          }}>cover image</span>
        )}
      </div>
      <div style={{ padding: "var(--space-4) var(--space-3) var(--space-3)" }}>
        <h3 style={{
          margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-heading)",
          fontWeight: "var(--weight-semibold)", letterSpacing: "var(--tracking-display)",
          lineHeight: "var(--leading-display)", fontVariationSettings: "var(--fraunces-text)",
        }}>{name}</h3>
        <div style={{
          marginTop: "var(--space-2)", fontFamily: "var(--font-mono)",
          fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-micro)",
          textTransform: "uppercase", color: "var(--text-muted)",
        }}>{category}</div>
        <div style={{
          marginTop: "var(--space-5)", display: "flex", alignItems: "center", gap: "var(--space-2)",
          fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)",
          letterSpacing: "var(--tracking-micro)", textTransform: "uppercase",
          color: "var(--accent)", textShadow: hover ? "0 0 16px var(--teal-a35)" : "none",
          transition: "text-shadow var(--dur-base) var(--ease-out)",
        }}>
          click to enlarge
          <span style={{ transform: hover ? "rotate(90deg)" : "none", transition: "transform var(--dur-base) var(--ease-out)" }}>+</span>
        </div>
      </div>
    </div>
  );
}
