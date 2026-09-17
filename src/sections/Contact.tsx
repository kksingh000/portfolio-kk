import React from "react";

import {
  SectionLabel,
  Card,
  Badge,
  ContactLink,
  Input,
  Textarea,
  Button,
} from "../design-system";
import { person, roles, contacts } from "../data/site";

export function Contact() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");
  const email = contacts.find((c) => c.label === "Email")?.value ?? "";

  /** No backend is deployed with this site, so the form composes a real mail draft
      rather than pretending to POST somewhere. */
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      name ? `Portfolio — ${name}` : "Portfolio",
    );
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="page"
      aria-label="04 — Experience and contact"
      style={{ display: "grid", gap: "var(--space-8)", alignContent: "start" }}
    >
      <SectionLabel index={4}>Experience &amp; contact</SectionLabel>

      <div className="page__inner contact-grid">
        <div
          style={{
            display: "grid",
            gap: "var(--space-4)",
            alignContent: "start",
          }}
        >
          <h2 className="display display--title">Where I have shipped</h2>
          {roles.map((r) => (
            <Card key={r.role} interactive elevation="contact">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "var(--space-4)",
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--text-subheading)",
                      letterSpacing: "var(--tracking-display)",
                      fontVariationSettings: "var(--fraunces-text)",
                    }}
                  >
                    {r.role}
                  </div>
                  <div
                    className="mono-label"
                    style={{ marginTop: "var(--space-2)" }}
                  >
                    {r.org}
                  </div>
                </div>
                <div className="mono-label mono-label--wide">{r.when}</div>
              </div>
              {r.stack.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    gap: "var(--space-2)",
                    flexWrap: "wrap",
                    marginTop: "var(--space-4)",
                  }}
                >
                  {r.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gap: "var(--space-6)",
            alignContent: "start",
          }}
        >
          <div>
            {contacts.map((c) => (
              <ContactLink
                key={c.label}
                label={c.label}
                value={c.value}
                href={c.href ?? (c.copyable ? `mailto:${c.value}` : undefined)}
                copyable={c.copyable}
              />
            ))}
          </div>

          <Card elevation="contact" padding="var(--space-6)">
            <form
              onSubmit={send}
              style={{ display: "grid", gap: "var(--space-5)" }}
            >
              <Input
                label="Your name"
                name="name"
                placeholder="Who is this?"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Textarea
                label="Message"
                name="message"
                rows={4}
                placeholder="What are you building?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button type="submit" style={{ justifySelf: "start" }}>
                Send it
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <footer
        className="page__inner"
        style={{
          marginTop: "var(--space-7)",
          paddingTop: "var(--space-5)",
          borderTop: "var(--border-hair) solid var(--border-subtle)",
          display: "flex",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
        }}
      >
        <span className="mono-label">
          {person.name} · {person.eyebrow}
        </span>
        <span className="mono-label">
          <a
            href="https://github.com/kksingh000"
            target="_blank"
            rel="noreferrer"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            github.com/kksingh000 ↗
          </a>
        </span>
      </footer>
    </section>
  );
}
