import type * as React from "react";

/**
 * Billboarded iceberg label: a blurred glass chip plus a thin leader line and anchor dot on the ice.
 * Gray by default; the chip, line and dot all go teal together on hover / when current.
 * @startingPoint section="Portfolio" subtitle="Iceberg tech label with leader line" viewport="700x150"
 */
export interface TechChipProps {
  children?: React.ReactNode;
  /** depth tier — drives tint, opacity and the hover sub-note */
  zone?: "peak" | "upper" | "below-shallow" | "below-deep";
  /** leader-line length in px */
  leader?: number;
  /** which side the leader line and anchor dot sit on */
  leaderSide?: "left" | "right";
  /** externally-driven current state (e.g. a Badge hover elsewhere) */
  active?: boolean;
  onHoverChange?: (hovered: boolean) => void;
  style?: React.CSSProperties;
}
export function TechChip(props: TechChipProps): JSX.Element;
