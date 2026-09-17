const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};

function ProjectRing() {
  const { SectionLabel, ProjectFocusPanel, Dialog, Button, Badge } = __ds();
  const projects = window.KK_PROJECTS;
  const n = projects.length;
  const [angle, setAngle] = React.useState(0);
  const [hover, setHover] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const paused = hover != null || open;

  React.useEffect(() => {
    let raf, last = performance.now();
    const tick = (t) => {
      const dt = t - last; last = t;
      if (!paused) setAngle((a) => a + dt * 0.006);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  const step = 360 / n;
  const nearest = ((Math.round(-angle / step) % n) + n) % n;
  const focused = hover != null ? hover : nearest;
  const project = projects[focused];

  return (
    <section data-theme="deep" data-screen-label="03 Project ring"
      style={{ minHeight: "100vh", background: "var(--ink-900)", color: "var(--text-primary)", padding: "var(--page-pad-y) var(--page-pad-x)", overflow: "hidden", display: "grid", gridTemplateRows: "auto 1fr", gap: "var(--space-6)" }}>
      <SectionLabel index={3} theme="deep">Selected work · {n} projects</SectionLabel>

      <div style={{ position: "relative", display: "grid", placeItems: "center" }}>
        <div style={{ position: "absolute", inset: 0, perspective: "1100px" }}>
          <div style={{ position: "absolute", left: "50%", top: "62%", transformStyle: "preserve-3d", transform: "translate(-50%,-50%) rotateX(-58deg) rotateZ(" + angle + "deg)" }}>
            {projects.map((p, i) => {
              const a = i * step;
              const lit = i === focused;
              return (
                <div key={p.name}
                  onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}
                  onClick={() => setOpen(true)}
                  style={{
                    position: "absolute", width: 170, height: 106, marginLeft: -85, marginTop: -53, cursor: "pointer",
                    transform: "rotateZ(" + a + "deg) translateY(-300px) rotateZ(" + -a + "deg) rotateZ(" + -angle + "deg)",
                    transformStyle: "preserve-3d",
                  }}>
                  <div style={{
                    width: "100%", height: "100%", borderRadius: "var(--radius-md)",
                    background: "linear-gradient(140deg,var(--gray-600),var(--gray-800))",
                    border: "var(--border-hair) solid " + (lit ? "var(--accent)" : "var(--border-subtle)"),
                    boxShadow: lit ? "var(--glow-md)" : "var(--shadow-contact)",
                    filter: lit ? "none" : "var(--desaturate-thumb)",
                    opacity: lit ? 1 : 0.6,
                    display: "grid", placeItems: "center", textAlign: "center", padding: "var(--space-3)",
                    transition: "var(--transition-interactive)",
                  }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: lit ? "var(--teal-300)" : "var(--gray-200)" }}>{p.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div style={{ position: "relative", zIndex: 2, transform: "translateY(-6%)" }}>
          <ProjectFocusPanel name={project.name} category={project.category} width={400} onEnlarge={() => setOpen(true)} />
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-micro)", textTransform: "uppercase", color: "var(--text-muted)" }}>
          {paused ? "Ring paused" : "Drag or hover a card to focus it"}
        </div>
      </div>

      <Dialog open={open} eyebrow={project.category} title={project.name} width={640} onClose={() => setOpen(false)}
        footer={<>
          {project.live && <Button href={project.live}>Live site</Button>}
          {project.repo && <Button variant="secondary" href={"https://" + project.repo}>GitHub</Button>}
          <Button variant="ghost" onClick={() => setOpen(false)}>Close</Button>
        </>}>
        {project.blurb}
        <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-5)" }}>
          {project.stack.map((t, i) => <Badge key={t} active={i === 0}>{t}</Badge>)}
        </div>
      </Dialog>
    </section>
  );
}
Object.assign(window, { ProjectRing });
