import React from "react";

/**
 * Mouse-follow parallax, normalised to -0.5..0.5 on both axes.
 * Multipliers come from tokens/motion.css: --parallax-near/mid/far.
 */
export const PARALLAX = { near: 0.14, mid: 0.08, far: 0.03 } as const;
export const TILT_MAX = 9; // --tilt-max
/** --ease-out, as a Framer Motion bezier tuple */
export const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];
/** --ring-idle-rpm, as degrees per millisecond */
export const RING_IDLE_DEG_PER_MS = (0.55 * 360) / 60000;

export function useParallax(enabled = true) {
  const [p, setP] = React.useState({ x: 0, y: 0 });

  const onMouseMove = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (!enabled) return;
      const r = e.currentTarget.getBoundingClientRect();
      setP({
        x: (e.clientX - r.left) / r.width - 0.5,
        y: (e.clientY - r.top) / r.height - 0.5,
      });
    },
    [enabled],
  );

  const onMouseLeave = React.useCallback(() => setP({ x: 0, y: 0 }), []);

  /** translate3d for a z-layer, in px */
  const layer = React.useCallback(
    (mult: number): React.CSSProperties => ({
      transform: `translate3d(${(-p.x * mult * 100).toFixed(2)}px,${(-p.y * mult * 60).toFixed(2)}px,0)`,
    }),
    [p],
  );

  return { p, layer, handlers: { onMouseMove, onMouseLeave } };
}

/**
 * Horizontal drag that yields a continuously-accumulating angle in degrees,
 * with inertial release (--ease-drag is a CSS curve; here the release is a
 * velocity decay, which is the same idea in a rAF loop).
 */
export function useDragRotate(sensitivity = 0.35) {
  const [dragging, setDragging] = React.useState(false);
  const active = React.useRef(false);
  const velocity = React.useRef(0);
  const lastX = React.useRef(0);

  const onPointerDown = React.useCallback((e: React.PointerEvent) => {
    active.current = true;
    lastX.current = e.clientX;
    velocity.current = 0;
    setDragging(true);
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  }, []);

  // the caller owns the angle (it lives on a ref the render loop reads), so this
  // only tracks velocity — no state is written per pointer move
  const onPointerMove = React.useCallback(
    (e: React.PointerEvent) => {
      if (!active.current) return;
      velocity.current = (e.clientX - lastX.current) * sensitivity;
      lastX.current = e.clientX;
    },
    [sensitivity],
  );

  const onPointerUp = React.useCallback((e: React.PointerEvent) => {
    active.current = false;
    setDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId);
  }, []);

  /** decayed drag momentum, consumed once per frame by the scene */
  const takeMomentum = React.useCallback(() => {
    if (active.current || Math.abs(velocity.current) < 0.01) {
      velocity.current = 0;
      return 0;
    }
    velocity.current *= 0.94;
    return velocity.current;
  }, []);

  return {
    dragging,
    takeMomentum,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp,
      onPointerCancel: onPointerUp,
    },
  };
}
