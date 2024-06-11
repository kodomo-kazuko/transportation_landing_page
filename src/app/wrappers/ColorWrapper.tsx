import { ReactNode } from "react";

export interface WrapperBlueProps {
  children: ReactNode;
  color: "primary" | "secondary" | "transparent" | "white";
  className?: string;
}

const colorClasses = {
  primary: "bg-ub-primary",
  secondary: "bg-ub-secondary",
  transparent: "bg-transparent",
  white: "bg-white",
};

export default function ColorWrapper({
  children,
  color,
  className,
}: WrapperBlueProps) {
  const colorClass = colorClasses[color];
  const textColor =
    color === "transparent"
      ? "text-black"
      : color === "white"
      ? "text-black"
      : "text-white";

  return (
    <div className={`p-5 ${colorClass} ${textColor} ${className} `}>
      {children}
    </div>
  );
}
