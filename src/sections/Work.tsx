import React from "react";

import {
  SectionLabel,
  ProjectFocusPanel,
  Dialog,
  Button,
  Badge,
  Card,
  IconButton,
} from "../design-system";
import { projects } from "../data/projects";
import { useDragRotate } from "../lib/interaction";
import { useSceneEnabled } from "../lib/capability";
import { SceneBoundary } from "../components/SceneBoundary";

const ProjectRingCanvas = React.lazy(() => import("../three/ProjectRingScene"));

/** Lucide `chevron-left` / `chevron-right`, inlined. */
function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

export function Work() {
  const canRunScene = useSceneEnabled();
  // a scene that fails at runtime drops to the same lite path for good
  const [sceneFailed, setSceneFailed] = React.useState(false);
  const sceneEnabled = canRunScene && !sceneFailed;
  const n = projects.length;
  const step = 360 / n;

  const angleRef = React.useRef(0);
  const [angle, setAngle] = React.useState(0);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const [open, setOpen] = React.useState<number | null>(null);
  const { dragging, handlers, takeMomentum } = useDragRotate(0.28);
  const dragState = React.useRef<{ start: number; base: number } | null>(null);

  const paused = hovered != null || open != null || dragging;

  /** whichever card is nearest the front of the ring is the current one */
  const nearest = (((Math.round(-angle / step) % n) + n) % n) % n;
  const focused = hovered ?? nearest;
  const project = projects[focused];

  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { start: e.clientX, base: angleRef.current };
    handlers.onPointerDown(e);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    handlers.onPointerMove(e);
    if (!dragState.current) return;
    angleRef.current =
      dragState.current.base + (e.clientX - dragState.current.start) * 0.28;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragState.current = null;
    handlers.onPointerUp(e);
  };

  /** step the ring one slot, snapping onto that slot rather than drifting from wherever it is */
  const stepTo = (delta: number) => {
    angleRef.current = (Math.round(angleRef.current / step) - delta) * step;
    setAngle(angleRef.current);
    setHovered(null);
  };

  return (
    <section
      id="work"
      className="page page--deep"
      data-theme="deep"
      aria-label="03 — Selected work"
      style={{
        overflow: "hidden",
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        gap: "var(--space-6)",
      }}
    >
      <SectionLabel index={3} theme="deep">
        Selected work · {String(n).padStart(2, "0")} projects
      </SectionLabel>

      <div
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
          minHeight: "62vh",
        }}
      >
        {sceneEnabled && (
          <div
            className={
              "scene " + (dragging ? "scene--grabbing" : "scene--grab")
            }
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <SceneBoundary fallback={null} onFail={() => setSceneFailed(true)}>
              <ProjectRingCanvas
                projects={projects}
                angle={angleRef}
                onAngle={setAngle}
                focused={focused}
                onHover={setHovered}
                onSelect={(i) => setOpen(i)}
                spin={!paused}
                takeMomentum={takeMomentum}
                onContextLost={() => setSceneFailed(true)}
              />
            </SceneBoundary>
          </div>
        )}

        {sceneEnabled ? (
          /* the front-center slot breaks off the ring and becomes the focus panel */
          <div
            style={{
              position: "relative",
              zIndex: 5,
              transform: "translateY(-4%)",
            }}
          >
            <ProjectFocusPanel
              name={project.name}
              category={project.category}
              blurb={project.blurb}
              width={368}
              onEnlarge={() => setOpen(focused)}
            />
          </div>
        ) : (
          <WorkFallback onOpen={setOpen} />
        )}
      </div>

      <div
        className="page__inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--space-4)",
          flexWrap: "wrap",
        }}
      >
        <span className="mono-label">
          {!sceneEnabled
            ? "Card list · reduced-motion view"
            : paused
              ? "Ring paused"
              : "Drag to rotate · hover a card to focus it"}
        </span>
        {sceneEnabled && (
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <IconButton
              label="Previous project"
              size="sm"
              onClick={() => stepTo(-1)}
            >
              <Chevron dir="left" />
            </IconButton>
            <IconButton
              label="Next project"
              size="sm"
              onClick={() => stepTo(1)}
            >
              <Chevron dir="right" />
            </IconButton>
          </div>
        )}
      </div>

      {open != null && (
        <Dialog
          open
          eyebrow={projects[open].category}
          title={projects[open].name}
          width={640}
          onClose={() => setOpen(null)}
          footer={
            <>
              {projects[open].live && (
                <Button
                  href={projects[open].live!}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live site
                </Button>
              )}
              {projects[open].repo && (
                <Button
                  variant="secondary"
                  href={projects[open].repo!}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </Button>
              )}
              <Button variant="ghost" onClick={() => setOpen(null)}>
                Close
              </Button>
            </>
          }
        >
          {projects[open].blurb}
          <div
            style={{
              display: "flex",
              gap: "var(--space-2)",
              flexWrap: "wrap",
              marginTop: "var(--space-5)",
            }}
          >
            {projects[open].stack.map((t, i) => (
              <Badge key={t} active={i === 0}>
                {t}
              </Badge>
            ))}
          </div>
        </Dialog>
      )}
    </section>
  );
}

/** Lite path: the same claims, as a plain card list. */
function WorkFallback({ onOpen }: { onOpen: (index: number) => void }) {
  return (
    <div
      className="page__inner"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
        gap: "var(--space-5)",
        width: "100%",
      }}
    >
      {projects.map((p, i) => (
        <Card
          key={p.name}
          theme="deep"
          interactive
          elevation="contact"
          ariaLabel={"Open " + p.name}
          onClick={() => onOpen(i)}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-subheading)",
              fontWeight: "var(--weight-semibold)",
              letterSpacing: "var(--tracking-display)",
              fontVariationSettings: "var(--fraunces-text)",
            }}
          >
            {p.name}
          </div>
          <div className="mono-label" style={{ marginTop: "var(--space-2)" }}>
            {p.category}
          </div>
          <p
            style={{
              margin: "var(--space-4) 0 0",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-body-sm)",
              lineHeight: "var(--leading-body)",
              color: "var(--text-secondary)",
            }}
          >
            {p.blurb}
          </p>
        </Card>
      ))}
    </div>
  );
}
