import React from "react";
import { BadgeProps, Variants } from "./types";
import Text from "../Text";
import clsx from "clsx";

const Badge = ({ text, variant = "primary" }: BadgeProps) => {
  const badgeClasses: Record<Variants, string> = {
    primary: "bg-white text-[#16191C]",
    secondary: "bg-black text-white",
    danger: "bg-red-500 text-white",
    muted: "bg-gray-300 text-white",
  };
  return (
    <div className={clsx("px-3 py-1.5 rounded-full", badgeClasses[variant])}>
      <Text className="!text-[12px] font-semibold">{text}</Text>
    </div>
  );
};

export default Badge;
