const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};

function IcebergScene() {
  const { SectionLabel, TechChip, Tooltip, IconButton } = __ds();
  const [rot, setRot] = React.useState(-8);
  const drag = React.useRef(null);
  const zones = window.KK_STACK;

  const down = (e) => { drag.current = { x: e.clientX, r: rot }; };
  const move = (e) => { if (drag.current) setRot(drag.current.r + (e.clientX - drag.current.x) * 0.25); };
  const up = () => { drag.current = null; };

  return (
    <section data-theme="deep" data-screen-label="02 Ocean + iceberg"
      onMouseDown={down} onMouseMove={move} onMouseUp={up} onMouseLeave={up}
      style={{ minHeight: "100vh", position: "relative", background: "var(--ink-900)", color: "var(--text-primary)", padding: "var(--page-pad-y) var(--page-pad-x)", overflow: "hidden", cursor: drag.current ? "grabbing" : "grab" }}>

      <div style={{ position: "absolute", inset: "52% 0 0 0", background: "linear-gradient(to bottom,var(--scene-water),var(--scene-water-deep))" }} />
      <div style={{ position: "absolute", left: 0, right: 0, top: "52%", height: 1, background: "var(--waterline)", boxShadow: "var(--glow-waterline)" }} />

      <div style={{ position: "relative", display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1.1fr)", gap: "var(--space-8)", alignItems: "center", minHeight: "78vh" }}>
        <div style={{ display: "grid", gap: "var(--space-5)" }}>
          <SectionLabel index={2} theme="deep">Tech stack · the iceberg</SectionLabel>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-display)", lineHeight: "var(--leading-display)", letterSpacing: "var(--tracking-display)", fontWeight: "var(--weight-semibold)", fontVariationSettings: "var(--fraunces-display)" }}>
            What I know,<br />and how deep
          </h2>
          <p style={{ margin: 0, fontFamily: "var(--font-mono)", fontSize: "var(--text-body-sm)", lineHeight: "var(--leading-body)", color: "var(--text-secondary)", maxWidth: "44ch" }}>
            Above the waterline is what I reach for daily. Below it is what I have used, read and debugged — honestly ordered, not flattened into one list.
          </p>
          <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
            <Tooltip label="Drag to rotate"><IconButton label="Rotate the iceberg" variant="circle"><i data-lucide="rotate-3d" style={{ width: 18, height: 18 }} /></IconButton></Tooltip>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-micro)", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Y-axis locked · {Math.round(rot)}°
            </span>
          </div>
        </div>

        <div style={{ position: "relative", height: "72vh", display: "grid", alignContent: "center", justifyItems: "center" }}>
          <div style={{
            position: "absolute", top: "8%", width: 260, height: "84%",
            transform: "rotateY(" + rot * 0.4 + "deg)", transformStyle: "preserve-3d",
            background: "linear-gradient(to bottom,var(--scene-ice-above) 0%,var(--scene-ice-above) 44%,var(--scene-ice-below) 45%,rgba(126,138,140,.35) 100%)",
            clipPath: "polygon(48% 0%,66% 18%,58% 40%,84% 44%,72% 74%,50% 100%,28% 72%,16% 44%,40% 40%,32% 17%)",
            filter: "saturate(.2)",
          }} />
          <div style={{ position: "relative", display: "grid", gap: "var(--space-4)", width: "100%" }}>
            {zones.map((z, zi) => (
              <div key={z.zone} style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", justifyContent: zi % 2 ? "flex-end" : "flex-start" }}>
                {z.items.map((t) => (
                  <TechChip key={t} zone={z.zone} leader={zi % 2 ? 34 : 48} leaderSide={zi % 2 ? "right" : "left"}>{t}</TechChip>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { IcebergScene });
