import { motion } from "framer-motion";

import { SectionLabel, ScrollCue } from "../design-system";
import { person } from "../data/site";
import { useParallax, PARALLAX, TILT_MAX, EASE_OUT } from "../lib/interaction";
import { useReducedMotion } from "../lib/capability";

const rise = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.64, delay: 0.08 * i, ease: EASE_OUT },
  }),
};

export function Hero() {
  const reduced = useReducedMotion();
  const { p, layer, handlers } = useParallax(!reduced);

  return (
    <section
      id="hero"
      className="page"
      aria-label="01 — Krishna Kumar Singh"
      style={{
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "var(--space-7)",
        perspective: "1200px",
        overflow: "hidden",
      }}
      {...handlers}
    >
      <SectionLabel index={1}>Krishna Kumar Singh · portfolio</SectionLabel>

      <div className="page__inner hero-grid">
        <motion.h1
          className="display display--hero"
          variants={rise}
          initial="hidden"
          animate="show"
          custom={0}
          style={layer(PARALLAX.near)}
        >
          {person.nameLines.map((line) => (
            <span key={line} style={{ display: "block" }}>
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={1}
          className="hero-portrait"
          style={{ ...layer(PARALLAX.mid), transformStyle: "preserve-3d" }}
        >
          {/* Portrait plane. No photograph was supplied (assets/README.md), so the
              plane renders as the system's monochrome placeholder rather than stock art. */}
          <div
            style={{
              aspectRatio: "4 / 5",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
              background:
                "linear-gradient(160deg,var(--gray-200),var(--gray-600) 70%,var(--gray-800))",
              filter: "var(--desaturate-photo)",
              boxShadow: "var(--shadow-plane)",
              transform: reduced
                ? "none"
                : `rotateY(${(p.x * TILT_MAX).toFixed(2)}deg) rotateX(${(-p.y * TILT_MAX).toFixed(2)}deg)`,
              transition: "transform var(--dur-fast) var(--ease-out)",
              display: "grid",
              placeItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-micro)",
                letterSpacing: "var(--tracking-micro)",
                textTransform: "uppercase",
                color: "var(--shell-000)",
              }}
            >
              Portrait plane
            </span>
          </div>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={2}
          style={{
            ...layer(PARALLAX.far),
            display: "grid",
            gap: "var(--space-5)",
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-subheading)",
              lineHeight: "var(--leading-snug)",
              color: "var(--text-primary)",
              fontVariationSettings: "var(--fraunces-text)",
              maxWidth: "26ch",
            }}
          >
            {person.statement}
          </p>
          <div className="mono-label mono-label--wide">{person.eyebrow}</div>
          <div className="mono-label">{person.education}</div>
        </motion.div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ScrollCue label="Scroll into the water" />
      </div>
    </section>
  );
}
