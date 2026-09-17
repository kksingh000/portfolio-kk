import React from "react";

interface Props {
  /** the flat-DOM version of this page, rendered if the scene cannot run */
  fallback: React.ReactNode;
  /** called once when the scene gives up, so the page can drop its scene chrome */
  onFail?: () => void;
  children: React.ReactNode;
}

interface State {
  failed: boolean;
}

/**
 * A WebGL scene can fail after it has mounted — a driver fault, a shader that
 * will not compile on some GPU, a throw inside the render loop. Suspense does
 * not catch any of that, so without this the whole app unmounts and the visitor
 * gets a blank page. Here the page fails over to the same lite path that narrow
 * viewports and reduced-motion visitors already get.
 *
 * Lost contexts do not throw, so each Canvas reports those separately through
 * its own `onContextLost`.
 */
export class SceneBoundary extends React.Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  componentDidCatch(error: unknown) {
    if (import.meta.env.DEV) {
      console.error("[scene] falling back to lite path", error);
    }
    this.props.onFail?.();
  }

  render() {
    if (this.state.failed) return this.props.fallback;
    return (
      <React.Suspense fallback={null}>{this.props.children}</React.Suspense>
    );
  }
}
