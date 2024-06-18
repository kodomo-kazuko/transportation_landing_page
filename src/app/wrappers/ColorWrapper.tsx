import { ReactNode } from "react";

export interface WrapperBlueProps {
  children: ReactNode;
  color: "primary" | "secondary" | "transparent" | "white" | "gray";
  className?: string;
}

const colorClasses = {
  primary: "bg-ub-primary",
  secondary: "bg-ub-secondary",
  transparent: "bg-transparent",
  white: "bg-white",
  gray: "bg-gray-50",
};

export default function ColorWrapper({
  children,
  color,
  className,
}: WrapperBlueProps) {
  const colorClass = colorClasses[color];
  const textColor =
    color === "gray"
      ? "text-black"
      : color === "transparent"
        ? "text-black"
        : color === "white"
          ? "text-black"
          : "text-white";

  return (
    <div className={`${colorClass} ${textColor} ${className}`}>
      {children}
    </div>
  );
}
