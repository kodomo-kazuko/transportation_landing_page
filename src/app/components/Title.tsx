import React from "react";

interface TitleProps {
  title: string;
  size?: "sm" | "md" | "lg";
}

export default function Title({ title, size = "md" }: TitleProps) {
  let style = "text-base";

  switch (size) {
    case "sm":
      style = "text-sm";
      break;
    case "md":
      style = "text-lg";
      break;
    case "lg":
      style = "text-xl";
      break;
  }

  return (
    <h1 className={`text-white font-medium leading-6 ${style}`}>{title}</h1>
  );
}
