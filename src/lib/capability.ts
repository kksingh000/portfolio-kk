import React from "react";

/** `prefers-reduced-motion: reduce` — idle motion and scene animation stop. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = React.useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/** Matches a media query, for the mobile/lite fallback path. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = React.useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia(query).matches;
  });

  React.useEffect(() => {
    if (!window.matchMedia) return;
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener("change", onChange);
    setMatches(mq.matches);
    return () => mq.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

let webglCache: boolean | null = null;

/** One-shot WebGL probe. Drives the lite/flat-DOM fallback for both 3D pages. */
export function hasWebGL(): boolean {
  if (webglCache != null) return webglCache;
  if (typeof document === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    webglCache = Boolean(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl"),
    );
  } catch {
    webglCache = false;
  }
  return webglCache;
}

/**
 * True when the 3D scenes should render. Falls back to the flat-DOM versions on
 * no-WebGL, reduced-motion, and narrow viewports — the capability detection the
 * design system's UI kit README lists as the real site's lite path.
 *
 * The 1180px cutoff is the width below which the iceberg's annotated tier
 * clusters can no longer sit beside the copy column without clipping; the
 * ranked-list fallback carries the same content honestly at any size.
 */
export function useSceneEnabled(): boolean {
  const reduced = useReducedMotion();
  const narrow = useMediaQuery("(max-width: 1180px)");
  const [webgl, setWebgl] = React.useState(false);
  React.useEffect(() => setWebgl(hasWebGL()), []);
  return webgl && !reduced && !narrow;
}
