import { ReactNode } from "react";

export type Position = "top" | "bottom";

export interface ToolTipProps {
  children: ReactNode;
  description: string;
  position?: Position;
  className?: string;
}
