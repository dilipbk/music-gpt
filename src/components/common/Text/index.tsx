import React from "react";
import { TextProps, TextSize } from "./types";
import clsx from "clsx";

const sizeClasses: Record<TextSize, string> = {
  xl: "text-[32px] font-semibold leading-[100%]",
  lg: "text-2xl font-medium leading-[26px]",
  md: "text-lg font-medium leading-[26px]",
  rg: "text-base font-normal leading-[100%]",
  sm: "text-sm font-normal leading-[150%]",
  xs: "text-[13px] font-normal leading-[150%]",
};

const tagMap: Record<TextSize, React.ElementType> = {
  xl: "h1",
  lg: "h2",
  md: "h3",
  rg: "p",
  sm: "p",
  xs: "p",
};

const Text: React.FC<TextProps> = ({
  size = "rg",
  className = "",
  children,
}) => {
  const Tag = tagMap[size];
  const classes = `${sizeClasses[size]} ${className}`.trim();
  return <Tag className={clsx(classes, className)}>{children}</Tag>;
};

export default Text;
