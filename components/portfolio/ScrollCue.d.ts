import type * as React from "react";

/** Quiet mono cue with a fading hairline, pinned bottom-center of the 3D scenes. Never accented. */
export interface ScrollCueProps {
  label?: React.ReactNode;
  theme?: "deep";
  style?: React.CSSProperties;
}
export function ScrollCue(props: ScrollCueProps): JSX.Element;
