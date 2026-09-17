import React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Billboard } from "@react-three/drei";
import * as THREE from "three";

import type { Project } from "../data/projects";
import { RING_IDLE_DEG_PER_MS } from "../lib/interaction";

const SCENE = {
  ink: "#0A0A0A",
  plateTop: "#5C5C61",
  plateBottom: "#2B2B2E",
  border: "#D4D4D6",
  teal: "#2DD4CF",
  shell: "#F5F4F0",
  gray400: "#9A9A9E",
};

const RADIUS = 4.5;
const CARD_W = 2.05;
const CARD_H = 1.28;

/**
 * Card faces are drawn to a canvas rather than loaded as textures — no project
 * cover art was supplied (assets/README.md), and this keeps the plate type in
 * JetBrains Mono without shipping a second font pipeline for the 3D layer.
 */
function drawPlate(project: Project, dpr = 2): HTMLCanvasElement {
  const w = 410;
  const h = 256;
  const canvas = document.createElement("canvas");
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;
  ctx.scale(dpr, dpr);

  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, SCENE.plateTop);
  grad.addColorStop(1, SCENE.plateBottom);
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  ctx.strokeStyle = "rgba(212,212,214,.55)";
  ctx.lineWidth = 2;
  ctx.strokeRect(1, 1, w - 2, h - 2);

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.fillStyle = SCENE.shell;
  ctx.font = '500 26px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillText(project.name.toUpperCase(), w / 2, h / 2 - 10, w - 48);

  ctx.fillStyle = SCENE.gray400;
  ctx.font = '400 13px "JetBrains Mono", ui-monospace, monospace';
  ctx.fillText(project.category, w / 2, h / 2 + 26, w - 40);

  return canvas;
}

function usePlateTextures(projects: Project[]) {
  const [version, setVersion] = React.useState(0);

  React.useEffect(() => {
    let cancelled = false;
    // redraw once JetBrains Mono is actually available, or the plates fall back to Menlo
    document.fonts?.ready.then(() => {
      if (!cancelled) setVersion((v) => v + 1);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return React.useMemo(() => {
    return projects.map((p) => {
      const tex = new THREE.CanvasTexture(drawPlate(p));
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = 4;
      return tex;
    });
    // `version` intentionally re-runs the draw once webfonts land
  }, [projects, version]);
}

function Card({
  texture,
  position,
  lit,
  onHover,
  onSelect,
}: {
  texture: THREE.Texture;
  position: [number, number, number];
  lit: boolean;
  onHover: (hovering: boolean) => void;
  onSelect: () => void;
}) {
  const inner = React.useRef<THREE.Group>(null);

  useFrame(() => {
    if (!inner.current) return;
    // hover lift, weighted — no bounce, no overshoot
    const targetY = lit ? 0.22 : 0;
    inner.current.position.y += (targetY - inner.current.position.y) * 0.12;
  });

  return (
    <Billboard position={position} follow>
      <group ref={inner}>
        {/* hairline frame — gray at rest, teal when this card is the current one */}
        <mesh position={[0, 0, -0.012]}>
          <planeGeometry args={[CARD_W + 0.05, CARD_H + 0.05]} />
          <meshBasicMaterial
            color={lit ? SCENE.teal : SCENE.border}
            transparent
            opacity={lit ? 1 : 0.35}
          />
        </mesh>
        {lit && (
          <mesh position={[0, 0, -0.02]}>
            <planeGeometry args={[CARD_W + 0.55, CARD_H + 0.55]} />
            <meshBasicMaterial
              color={SCENE.teal}
              transparent
              opacity={0.1}
              depthWrite={false}
            />
          </mesh>
        )}
        <mesh
          onPointerOver={(e) => {
            e.stopPropagation();
            onHover(true);
          }}
          onPointerOut={() => onHover(false)}
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
        >
          <planeGeometry args={[CARD_W, CARD_H]} />
          <meshBasicMaterial
            map={texture}
            toneMapped={false}
            transparent
            opacity={lit ? 1 : 0.6}
            color={lit ? "#FFFFFF" : "#8E8E92"}
          />
        </mesh>
      </group>
    </Billboard>
  );
}

function Ring({
  projects,
  angle,
  onAngle,
  focused,
  onHover,
  onSelect,
  spin,
  takeMomentum,
}: {
  projects: Project[];
  angle: React.MutableRefObject<number>;
  onAngle: (deg: number) => void;
  focused: number;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  spin: boolean;
  takeMomentum: () => number;
}) {
  const group = React.useRef<THREE.Group>(null);
  const textures = usePlateTextures(projects);
  const { camera } = useThree();
  const emitted = React.useRef(0);

  React.useEffect(() => {
    camera.lookAt(0, 0.1, 0);
  }, [camera]);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (spin) angle.current += RING_IDLE_DEG_PER_MS * delta * 1000;
    angle.current += takeMomentum();
    group.current.rotation.y = THREE.MathUtils.degToRad(angle.current);
    // throttle the React-side angle update to ~15fps; the ring itself runs on the ref
    emitted.current += delta;
    if (emitted.current > 0.066) {
      emitted.current = 0;
      onAngle(angle.current);
    }
  });

  const step = (Math.PI * 2) / projects.length;

  return (
    <group ref={group}>
      {projects.map((p, i) => {
        const a = i * step;
        return (
          <Card
            key={p.name}
            texture={textures[i]}
            position={[Math.sin(a) * RADIUS, 0, Math.cos(a) * RADIUS]}
            lit={i === focused}
            onHover={(h) => onHover(h ? i : null)}
            onSelect={() => onSelect(i)}
          />
        );
      })}
    </group>
  );
}

/** The ground the ring sits on: a neutral hairline track, never tinted at rest. */
function Track() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.72, 0]}>
      <ringGeometry args={[RADIUS - 0.03, RADIUS + 0.03, 96]} />
      <meshBasicMaterial
        color={SCENE.border}
        transparent
        opacity={0.18}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export default function ProjectRingCanvas(props: {
  projects: Project[];
  angle: React.MutableRefObject<number>;
  onAngle: (deg: number) => void;
  focused: number;
  onHover: (index: number | null) => void;
  onSelect: (index: number) => void;
  spin: boolean;
  takeMomentum: () => number;
  onContextLost?: () => void;
}) {
  const { onContextLost, ...ring } = props;
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 2.35, 8.6], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ scene, gl }) => {
        scene.fog = new THREE.Fog(SCENE.ink, 9, 19);
        // a lost context never throws, so React only hears about it from here
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          onContextLost?.();
        });
      }}
    >
      <ambientLight intensity={1} />
      <Track />
      <Ring {...ring} />
    </Canvas>
  );
}
