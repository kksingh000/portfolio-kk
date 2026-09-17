import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";

import { TechChip } from "../design-system";
import { stack, type StackTier } from "../data/stack";
import { RING_IDLE_DEG_PER_MS } from "../lib/interaction";

const SCENE = {
  water: "#1B1B1E",
  waterDeep: "#101012",
  iceAbove: "#E7E6E1",
  iceBelow: "#7E8A8C",
  teal: "#2DD4CF",
  ink: "#0A0A0A",
};

/**
 * Where each tier's chip cluster hangs, ranked top to bottom across the waterline.
 * Sides alternate so the leader lines always point inward at the ice.
 */
const ANCHORS: Array<{
  position: [number, number, number];
  side: "left" | "right";
}> = [
  { position: [-2.5, 2.75, 0], side: "left" },
  { position: [2.5, 0.75, 0], side: "right" },
  { position: [-2.6, -1.75, 0], side: "left" },
  { position: [2.5, -3.6, 0], side: "right" },
];

/** Faceted, irregular ice — a low-segment cone with its vertices nudged off the lathe. */
function useIceGeometry(
  radius: number,
  height: number,
  segments: number,
  seed: number,
) {
  return React.useMemo(() => {
    const geo = new THREE.ConeGeometry(radius, height, segments, 2);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    // deterministic pseudo-random, so the silhouette is stable across renders
    const rand = (i: number) => {
      const n = Math.sin((i + seed) * 127.1) * 43758.5453;
      return n - Math.floor(n) - 0.5;
    };
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      // leave the tip and the base rim alone so the silhouette stays convex
      if (Math.abs(y - height / 2) < 0.001) continue;
      pos.setX(i, pos.getX(i) * (1 + rand(i) * 0.16));
      pos.setZ(i, pos.getZ(i) * (1 + rand(i * 3.7) * 0.16));
      pos.setY(i, y + rand(i * 7.3) * height * 0.04);
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
    return geo;
  }, [radius, height, segments, seed]);
}

function Iceberg({
  rotation,
  spin,
}: {
  rotation: React.MutableRefObject<number>;
  spin: boolean;
}) {
  const group = React.useRef<THREE.Group>(null);
  const above = useIceGeometry(1.9, 3.0, 8, 11);
  const below = useIceGeometry(3.0, 7.4, 8, 43);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (spin) rotation.current += RING_IDLE_DEG_PER_MS * delta * 1000 * 0.5;
    group.current.rotation.y = THREE.MathUtils.degToRad(rotation.current);
    group.current.position.y = Math.sin(performance.now() * 0.0004) * 0.05;
  });

  return (
    <group ref={group}>
      {/* above the waterline — what KK reaches for daily */}
      <mesh geometry={above} position={[0, 1.5, 0]}>
        <meshStandardMaterial
          color={SCENE.iceAbove}
          flatShading
          roughness={0.72}
          metalness={0}
        />
      </mesh>

      {/* below — larger, cooler, translucent */}
      <mesh geometry={below} position={[0, -3.7, 0]} rotation={[Math.PI, 0, 0]}>
        <meshStandardMaterial
          color={SCENE.iceBelow}
          flatShading
          roughness={0.5}
          metalness={0.05}
          transparent
          opacity={0.56}
          depthWrite={false}
        />
      </mesh>

      {/* where the ice meets the water */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.014, 0]}>
        <ringGeometry args={[2.62, 2.76, 80]} />
        <meshBasicMaterial
          color={SCENE.teal}
          transparent
          opacity={1}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* foam collar */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 0]}>
        <ringGeometry args={[2.76, 3.24, 56]} />
        <meshBasicMaterial
          color={SCENE.iceAbove}
          transparent
          opacity={0.09}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Ocean({ animate }: { animate: boolean }) {
  const geo = React.useMemo(() => new THREE.PlaneGeometry(90, 90, 64, 64), []);
  const base = React.useMemo(
    () =>
      Float32Array.from(
        (geo.attributes.position as THREE.BufferAttribute).array,
      ),
    [geo],
  );

  useFrame(({ clock }) => {
    if (!animate) return;
    const t = clock.getElapsedTime();
    const pos = geo.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3];
      const y = base[i * 3 + 1];
      pos.setZ(
        i,
        Math.sin(x * 0.28 + t * 0.5) * 0.12 +
          Math.cos(y * 0.34 + t * 0.38) * 0.09,
      );
    }
    pos.needsUpdate = true;
    geo.computeVertexNormals();
  });

  return (
    <mesh geometry={geo} rotation={[-Math.PI / 2, 0, 0]}>
      <meshStandardMaterial
        color={SCENE.water}
        roughness={0.22}
        metalness={0.4}
      />
    </mesh>
  );
}

/**
 * The waterline: the only teal in the scene, and the only thing that separates
 * "reach for daily" from "used, read and debugged". It sits outside the berg's
 * group so dragging the ice never tilts the horizon.
 */
function Waterline() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.016, 0]}>
        <planeGeometry args={[64, 0.045]} />
        <meshBasicMaterial color={SCENE.teal} toneMapped={false} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.008, 0]}>
        <planeGeometry args={[64, 1.1]} />
        <meshBasicMaterial
          color={SCENE.teal}
          transparent
          opacity={0.1}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function TierCluster({
  tier,
  anchor,
}: {
  tier: StackTier;
  anchor: (typeof ANCHORS)[number];
}) {
  const onRight = anchor.side === "right";
  return (
    <Html position={anchor.position} center zIndexRange={[20, 0]}>
      <div
        style={{
          display: "grid",
          gap: "var(--space-2)",
          justifyItems: onRight ? "start" : "end",
          width: "max-content",
          maxWidth: "min(24vw, 300px)",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-micro)",
            letterSpacing: "var(--tracking-micro)",
            textTransform: "uppercase",
            color: tier.submerged ? "var(--gray-400)" : "var(--gray-200)",
            whiteSpace: "nowrap",
            // the caption can cross the ice, so it carries the same glass
            // treatment as the chips rather than relying on the ground behind it
            padding: "3px 7px",
            borderRadius: "var(--radius-xs)",
            background: "rgba(10,10,10,.5)",
            backdropFilter: "var(--blur-chip)",
          }}
        >
          {tier.label} · {String(tier.items.length).padStart(2, "0")}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "var(--space-2)",
            justifyContent: onRight ? "flex-start" : "flex-end",
          }}
        >
          {tier.items.map((item) => (
            <TechChip
              key={item}
              zone={tier.zone}
              leader={18}
              leaderSide={onRight ? "left" : "right"}
            >
              {item}
            </TechChip>
          ))}
        </div>
      </div>
    </Html>
  );
}

export default function IcebergCanvas({
  rotation,
  spin,
  animate,
  onContextLost,
}: {
  rotation: React.MutableRefObject<number>;
  spin: boolean;
  animate: boolean;
  onContextLost?: () => void;
}) {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.8, 15], fov: 40 }}
      gl={{ antialias: true, alpha: false }}
      onCreated={({ scene, gl }) => {
        scene.background = new THREE.Color(SCENE.ink);
        scene.fog = new THREE.Fog(SCENE.waterDeep, 17, 42);
        // a lost context never throws, so React only hears about it from here
        gl.domElement.addEventListener("webglcontextlost", (e) => {
          e.preventDefault();
          onContextLost?.();
        });
      }}
    >
      {/* neutral lighting only — nothing in this scene is tinted at rest */}
      <ambientLight intensity={1.5} />
      <hemisphereLight args={["#FFFFFF", SCENE.iceBelow, 0.9]} />
      <directionalLight position={[-6, 9, 8]} intensity={1.2} />
      <directionalLight position={[7, 3, 5]} intensity={0.5} />

      <Ocean animate={animate} />
      <Waterline />
      <Iceberg rotation={rotation} spin={spin && animate} />

      {stack.map((tier, i) => (
        <TierCluster key={tier.zone} tier={tier} anchor={ANCHORS[i]} />
      ))}
    </Canvas>
  );
}
