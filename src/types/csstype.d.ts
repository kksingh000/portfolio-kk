// Every value in this design system is a CSS custom property (`var(--space-4)`),
// which csstype's narrow unions (fontWeight, aspectRatio, mixBlendMode, ...) reject.
// This is csstype's documented escape hatch for exactly that case.
import "csstype";

declare module "csstype" {
  interface Properties {
    [index: string]: unknown;
  }
}
