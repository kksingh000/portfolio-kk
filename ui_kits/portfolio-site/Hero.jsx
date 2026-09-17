const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};

function Hero() {
  const { SectionLabel, ScrollCue } = __ds();
  const [m, setM] = React.useState({ x: 0, y: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setM({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
  };
  const layer = (mult) => ({ transform: "translate3d(" + (-m.x * mult * 100).toFixed(2) + "px," + (-m.y * mult * 60).toFixed(2) + "px,0)" });

  return (
    <section data-screen-label="01 Hero" onMouseMove={onMove} onMouseLeave={() => setM({ x: 0, y: 0 })}
      style={{ minHeight: "100vh", padding: "var(--page-pad-y) var(--page-pad-x)", display: "grid", gridTemplateRows: "auto 1fr auto", gap: "var(--space-7)", perspective: "1200px", overflow: "hidden" }}>
      <SectionLabel index={1}>Krishna Kumar Singh · portfolio</SectionLabel>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.15fr) minmax(0,.95fr) minmax(0,.9fr)", gap: "var(--space-7)", alignItems: "center" }}>
        <h1 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-hero)", lineHeight: "var(--leading-tight)", letterSpacing: "var(--tracking-hero)", fontWeight: "var(--weight-semibold)", fontVariationSettings: "var(--fraunces-display)", ...layer(0.14) }}>
          Krishna<br />Kumar<br />Singh
        </h1>

        <div style={{ ...layer(0.08), transformStyle: "preserve-3d" }}>
          <div style={{
            aspectRatio: "4 / 5", borderRadius: "var(--radius-sm)", overflow: "hidden",
            background: "linear-gradient(160deg,var(--gray-200),var(--gray-600) 70%,var(--gray-800))",
            filter: "var(--desaturate-photo)", boxShadow: "var(--shadow-plane)",
            transform: "rotateY(" + (m.x * 9).toFixed(2) + "deg) rotateX(" + (-m.y * 9).toFixed(2) + "deg)",
            transition: "transform var(--dur-fast) var(--ease-out)",
            display: "grid", placeItems: "center",
          }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-micro)", color: "var(--shell-000)" }}>PORTRAIT PLANE</span>
          </div>
        </div>

        <div style={{ ...layer(0.03), display: "grid", gap: "var(--space-5)" }}>
          <p style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-subheading)", lineHeight: "var(--leading-snug)", color: "var(--text-primary)", fontVariationSettings: "var(--fraunces-text)", maxWidth: "26ch" }}>
            Building software that ships, scales &amp; earns trust.
          </p>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-label)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-secondary)" }}>
            Full-stack &amp; AI engineer · India
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ScrollCue theme={undefined} label="Scroll into the water" />
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
