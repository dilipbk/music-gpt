export type TextSize = "xl" | "lg" | "md" | "rg" | "sm" | "xs";

export interface TextProps {
  size?: TextSize;
  className?: string;
  children: React.ReactNode;
}
