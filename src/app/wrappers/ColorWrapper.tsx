import { ReactNode } from "react";

interface WrapperBlueProps {
  children: ReactNode;
  color: "primary" | "secondary" | "transparent" | "white";
}

const colorClasses = {
  primary: "bg-ub-primary",
  secondary: "bg-ub-secondary",
  transparent: "bg-transparent",
  white: "bg-white",
};

export default function ColorWrapper({ children, color }: WrapperBlueProps) {
  const colorClass = colorClasses[color];
  const textColor =
    color === "transparent"
      ? "text-black"
      : color === "white"
      ? "text-black"
      : "text-white";

  return (
    <div
      className={`p-4 bg-gradient-radial ${colorClass} ${textColor} rounded-xl`}
    >
      {children}
    </div>
  );
}
