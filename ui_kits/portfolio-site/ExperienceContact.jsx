const __ds = () => window.KKPortfolioDesignSystem_b5704f || {};

const roles = [
  { role: "Software Developer Intern", org: "SchoolSaavy", when: "2025 — present", stack: ["Laravel", "React", "MySQL"] },
  { role: "Frontend Intern", org: "Dabster SoftTech", when: "Aug 2025", stack: ["React", "Tailwind"] },
  { role: "B.Tech CSE, final year", org: "NIET Greater Noida", when: "2026", stack: [] },
];

function ExperienceContact() {
  const { SectionLabel, Card, Badge, ContactLink, Input, Textarea, Button } = __ds();
  return (
    <section data-screen-label="04 Experience + contact"
      style={{ minHeight: "100vh", padding: "var(--page-pad-y) var(--page-pad-x)", display: "grid", gap: "var(--space-8)", alignContent: "start" }}>
      <SectionLabel index={4}>Experience &amp; contact</SectionLabel>

      <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.1fr) minmax(0,.9fr)", gap: "var(--space-8)" }}>
        <div style={{ display: "grid", gap: "var(--space-4)", alignContent: "start" }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: "var(--text-title)", letterSpacing: "var(--tracking-display)", lineHeight: "var(--leading-display)", fontWeight: "var(--weight-semibold)", fontVariationSettings: "var(--fraunces-text)" }}>
            Where I have shipped
          </h2>
          {roles.map((r) => (
            <Card key={r.role} interactive elevation="contact" padding="var(--space-5)">
              <div style={{ display: "flex", justifyContent: "space-between", gap: "var(--space-4)", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-subheading)", letterSpacing: "var(--tracking-display)", fontVariationSettings: "var(--fraunces-text)" }}>{r.role}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-micro)", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>{r.org}</div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-micro)", letterSpacing: "var(--tracking-label)", textTransform: "uppercase", color: "var(--text-secondary)" }}>{r.when}</div>
              </div>
              {r.stack.length > 0 && (
                <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap", marginTop: "var(--space-4)" }}>
                  {r.stack.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div style={{ display: "grid", gap: "var(--space-6)", alignContent: "start" }}>
          <div>
            <ContactLink label="Email" value="kkandsingh000@gmail.com" copyable />
            <ContactLink label="GitHub" value="github.com/kksingh000" href="https://github.com/kksingh000" />
            <ContactLink label="LinkedIn" value="11K+ followers" href="https://www.linkedin.com/" />
            <ContactLink label="Live site" value="kksrizzz.online" href="https://kksrizzz.online" />
          </div>
          <Card elevation="contact" padding="var(--space-6)">
            <div style={{ display: "grid", gap: "var(--space-5)" }}>
              <Input label="Your name" placeholder="Who is this?" />
              <Textarea label="Message" rows={4} placeholder="What are you building?" />
              <Button style={{ justifySelf: "start" }}>Send it</Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ExperienceContact });
