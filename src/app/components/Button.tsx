import React, { ReactNode } from "react";

interface MyButtonProps {
  bgColor: string;
  fontType: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function MyButton({
  bgColor,
  fontType,
  children,
  onClick,
}: MyButtonProps) {
  return (
    <button
      className={`font-${fontType} bg-${bgColor} hover:bg-${bgColor}-light text-xl`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
