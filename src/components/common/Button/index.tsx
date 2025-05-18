import React from "react";
import clsx from "clsx";
import { ButtonProps } from "./types";

const variantClasses: Record<string, string> = {
  primary: "bg-[#fff] text-black border border-gray-300 hover:bg-gray-100",
  secondary: "bg-blue-600 text-white border border-blue-700 hover:bg-blue-700",
  danger: "bg-red-600 text-white border border-red-700 hover:bg-red-700",
};

const sizeClasses: Record<string, string> = {
  sm: "px-2 py-1 text-sm rounded-md",
  md: "px-4 py-2 text-base rounded-lg",
  lg: "px-6 py-4 text-lg rounded-xl",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        sizeClasses[size],
        "font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
