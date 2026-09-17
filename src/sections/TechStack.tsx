import React from "react";

import { SectionLabel, TechChip, IconButton, Tooltip } from "../design-system";
import { stack } from "../data/stack";
import { useDragRotate } from "../lib/interaction";
import { useSceneEnabled } from "../lib/capability";
import { SceneBoundary } from "../components/SceneBoundary";

const IcebergCanvas = React.lazy(() => import("../three/IcebergScene"));

/** Lucide `rotate-3d`, inlined — the drag affordance. */
function RotateMark() {
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
      <path d="M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2" />
      <path d="m15.194 13.707 3.814 1.86-1.86 3.814" />
      <path d="M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4" />
    </svg>
  );
}

export function TechStack() {
  const canRunScene = useSceneEnabled();
  // a scene that fails at runtime drops to the same lite path for good
  const [sceneFailed, setSceneFailed] = React.useState(false);
  const sceneEnabled = canRunScene && !sceneFailed;
  const rotationRef = React.useRef(-8);
  const [readout, setReadout] = React.useState(-8);
  const { dragging, handlers, takeMomentum } = useDragRotate(0.3);
  const dragState = React.useRef<{ start: number; base: number } | null>(null);

  // the drag hook owns pointer state; the scene reads rotation from a ref so the
  // 3D loop never re-renders React
  const onPointerDown = (e: React.PointerEvent) => {
    dragState.current = { start: e.clientX, base: rotationRef.current };
    handlers.onPointerDown(e);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    handlers.onPointerMove(e);
    if (!dragState.current) return;
    rotationRef.current =
      dragState.current.base + (e.clientX - dragState.current.start) * 0.3;
    setReadout(rotationRef.current);
  };
  const onPointerUp = (e: React.PointerEvent) => {
    dragState.current = null;
    handlers.onPointerUp(e);
  };

  React.useEffect(() => {
    if (sceneEnabled) return;
    setReadout(rotationRef.current);
  }, [sceneEnabled]);

  // consume drag momentum on the ref between frames
  React.useEffect(() => {
    if (!sceneEnabled) return;
    let raf = 0;
    const tick = () => {
      const m = takeMomentum();
      if (m) rotationRef.current += m;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [sceneEnabled, takeMomentum]);

  return (
    <section
      id="stack"
      className="page page--deep"
      data-theme="deep"
      aria-label="02 — Tech stack"
      style={{ overflow: "hidden" }}
    >
      <div className="page__inner stack-grid">
        <div
          style={{
            position: "relative",
            zIndex: 5,
            display: "grid",
            gap: "var(--space-5)",
            alignContent: "center",
          }}
        >
          <SectionLabel index={2} theme="deep">
            Tech stack · the iceberg
          </SectionLabel>
          <h2 className="display display--page">
            What I know,
            <br />
            and how deep
          </h2>
          <p className="prose">
            Above the waterline is what I reach for daily. Below it is what I
            have used, read and debugged — honestly ordered, not flattened into
            one list.
          </p>
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              alignItems: "center",
            }}
          >
            <Tooltip label="Drag to rotate">
              <IconButton label="Rotate the iceberg" variant="circle">
                <RotateMark />
              </IconButton>
            </Tooltip>
            <span className="mono-label">
              {!sceneEnabled
                ? "Ranked list · reduced-motion view"
                : dragging
                  ? `Y-axis locked · ${Math.round(((readout % 360) + 360) % 360)}°`
                  : "Drag to rotate"}
            </span>
          </div>
        </div>

        {sceneEnabled && (
          <div className="stack-scene">
            <div
              className={
                "scene " + (dragging ? "scene--grabbing" : "scene--grab")
              }
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
            >
              <SceneBoundary
                fallback={null}
                onFail={() => setSceneFailed(true)}
              >
                <IcebergCanvas
                  rotation={rotationRef}
                  spin={!dragging}
                  animate
                  onContextLost={() => setSceneFailed(true)}
                />
              </SceneBoundary>
            </div>
          </div>
        )}
      </div>

      {!sceneEnabled && <IcebergFallback />}
    </section>
  );
}

/**
 * Lite path: no WebGL, reduced motion, or a narrow viewport. Same ranking, same
 * chips, no scene — the content mechanic survives without the 3D.
 */
function IcebergFallback() {
  return (
    <div
      className="page__inner"
      style={{ display: "grid", gap: "var(--space-7)" }}
    >
      {stack.map((tier) => (
        <div key={tier.zone} style={{ display: "grid", gap: "var(--space-4)" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-3)",
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-micro)",
              letterSpacing: "var(--tracking-micro)",
              textTransform: "uppercase",
              color: tier.submerged ? "var(--gray-400)" : "var(--gray-200)",
            }}
          >
            <span>{tier.label}</span>
            <span
              style={{
                flex: 1,
                height: 1,
                background: tier.submerged
                  ? "var(--border-subtle)"
                  : "var(--waterline)",
                opacity: tier.submerged ? 1 : 0.5,
              }}
            />
            <span>{String(tier.items.length).padStart(2, "0")}</span>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}
          >
            {tier.items.map((item) => (
              <TechChip
                key={item}
                zone={tier.zone}
                leader={0}
                leaderSide="left"
              >
                {item}
              </TechChip>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
