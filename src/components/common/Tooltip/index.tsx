import React from "react";
import Text from "../Text";
import { Position, ToolTipProps } from "./types";
import clsx from "clsx";

const Tooltip = ({
  children,
  description,
  position = "top",
  className = "",
}: ToolTipProps) => {
  const positionClasses: Record<Position, string> = {
    top: "tooltip-top bottom-7 left-1/2 -translate-x-1/2",
    bottom: "tooltip-bottom top-7 left-1/2 -translate-x-1/2",
  };
  return (
    <div className="relative group">
      {children}

      <div
        className={clsx(
          "absolute hidden tooltip-description group-hover:block p-3 rounded-md bg-black shadow-sm w-max",
          positionClasses[position],
          className
        )}
      >
        <Text>{description}</Text>
      </div>
    </div>
  );
};

export default Tooltip;
