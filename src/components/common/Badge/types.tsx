export type Variants = "primary" | "secondary" | "danger" | "muted";

export interface BadgeProps {
  text: string;
  variant?: Variants;
}
